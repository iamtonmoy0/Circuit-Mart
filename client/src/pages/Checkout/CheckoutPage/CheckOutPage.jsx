import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserCart, getUserCart, updateUserAddress } from "../../../functions/cartFunctions";
import toast from "react-hot-toast";
import 'react-quill/dist/quill.snow.css';
import { applyDiscountToCart } from "../../../functions/couponFunctions";
import {useNavigate} from 'react-router-dom'
import * as routePath from '../../../routes/routePath';
import { Helmet } from "react-helmet-async";
const CheckOutPage = () => {
	const dispatch = useDispatch();
	const {user,coupon} = useSelector(state=>({...state}));
	const [products,setProducts]= useState([]);
	const [totalPrice,setTotalPrice] = useState(0);
	const [address,setAddress] = useState('');
	const [applyCoupon,setApplyCoupon] = useState('');
	const [disable,setDisable]= useState(true);
	const [discountPrice,setDiscountPrice] = useState(0);
	const navigate = useNavigate()

	useEffect(()=>{
		loadCart(user.token)
	},[user]);
	// load cart product
	const loadCart = (token)=>{
		toast.loading('Please Wait')
		getUserCart(token)
		.then(res=>{
			toast.dismiss();
			setProducts(res.data.data.products);
			setTotalPrice(res.data.data.totalPrice);
			toast.success('Checkout now')
			dispatch({
				type:"TOTAL_CART_PRICE",
				payload:res.data.data.totalPrice
			})
		}).catch(err=>{
			toast.dismiss();
			toast.error(err.message);
		})
	}
	// remove all product
	const handleRemove = ()=>{
		toast.loading('please wait!')
		deleteUserCart(user.token)
		.then(()=>{
			toast.dismiss()
			dispatch({
				type:"ADD_TO_CART",
				payload:[]
			})
			toast.success('cart removed!')
			setProducts([]);
			setTotalPrice(0);
		}).catch(err=>{
			toast.dismiss()
			toast.error(err.message)
		})
	}
	// save address to db
	const saveAddress=()=>{
	toast.loading('please wait')
updateUserAddress(address,user.token)
.then((res)=>{
	console.log(res)
	toast.dismiss()
	setDisable(false);

}).catch(err=>{
	toast.dismiss();
	toast.error(err.message)
})
	}
	
// apply coupon to db
const handleApplyCoupon = ()=>{
	toast.loading('Applying coupon . Please wait')
	applyDiscountToCart(applyCoupon,user.token)
	.then(res=>{
		toast.dismiss();
		toast.success("you got special discount")
		setDiscountPrice(res.data.data.discountPrice)
		setApplyCoupon('')
		dispatch({
			type:"COUPON_EXIST",
			payload:true
		})
	}).catch(err=>{
		toast.dismiss()
		toast.error(err.message)
	})
}  
const proceedForPayment=()=>{
	navigate(routePath.PAYMENT)

}
	return (
		<div className="px-5">
			<Helmet>
				<title>Circuit-Mart | Checkout</title>
			</Helmet>
			<h1 className="text-3xl pt-3 text-gray-700">Delivery Address</h1>
		
			<div className="flex flex-col lg:flex-row pt-3" >

				<div className="lg:w-8/12 w-full lg:pr-3 pb-4">

				<textarea  className='w-full bg-slate-100 border border-lime-300 outline-none' placeholder="Enter address" value={address} onChange={(e)=>setAddress(e.target.value)} id="" cols="30" rows="10"></textarea>
				<button className="bg-blue-500 text-md font-semibold py-2 px-5 mt-5 rounded text-white " onClick={saveAddress}>Save</button>
				{/* apply coupon */}

				<div className="flex flex-col">
					<p className="text-3xl pt-6 font-semibold text-gray-600">Got Coupon ?</p>
					<input type="text" className="form-control mt-5 bg-gray-100 border-b-2 border-b-green-600 rounded hover:border-b-red-600 px-3 py-3 " placeholder="Enter coupon" value={applyCoupon} onChange={(e)=>setApplyCoupon(e.target.value)} />
					<button onClick={handleApplyCoupon} className='btn bg-blue-600 rounded text-md font-semibold text-white mt-6 py-3 mx-10' >Apply coupon</button>
				</div>
				
				</div>
				<div className="lg:w-4/12 w-full lg:pl-3 pb-4">
					<p className="text-center text-2xl font-medium">Order Summery</p>
					<hr />
					<p className="pt-2 text-gray-600">Products</p>
					{products && products.length>0 && products.map((p,i)=><div key={i}>
						<p className="pt-1">{p.product.title} x {p.count} Pcs  = ${p.count * p.price}</p>
					</div>)}
					<hr/>
					<p className='py-3'>Total: ${totalPrice}</p>
					<hr />
					{/* discount price */}
					{discountPrice >0 ?
 					<p className='py-3 bg-green-500 px-6'>Price After Discount : $ {discountPrice }</p>
					:<></>
					}
					<div className="pt-3">

					{user && user.token ? 
					<div className=" flex justify-between">

					<button  disabled={disable} onClick={proceedForPayment}  className="bg-green-400 mt-4 rounded py-2 px-5 font-semibold text-gray-800  inline-flex">Place Order</button>
					<button onClick={handleRemove} className="bg-[tomato] mt-4 rounded py-2 px-5 font-semibold text-gray-800  inline-flex">Empty cart</button>
					</div>
					:
					<button  className="bg-[tomato] mt-  rounded py-2 px-3 text-md">Login For Confirm Payment</button>
				}
				</div>
				</div>

			</div>

		</div>
	);
}

export default CheckOutPage;
