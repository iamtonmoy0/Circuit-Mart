import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserCart, getUserCart, updateUserAddress } from "../../../functions/cartFunctions";
import toast from "react-hot-toast";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const CheckOutPage = () => {
	const dispatch = useDispatch();
	const {user} = useSelector(state=>({...state}));
	const [products,setProducts]= useState([]);
	const [totalPrice,setTotalPrice] = useState(0);
	const [address,setAddress] = useState('');
	const [disable,setDisable]= useState(true)

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
.then(res=>{
	toast.dismiss()
	setDisable(false);

}).catch(err=>{
	toast.dismiss();
	toast.error(err.message)
})
	}
	return (
		<div className="px-5">
			<h1 className="text-3xl pt-3 text-gray-700">Delivery Address</h1>
		
			<div className="flex flex-col lg:flex-row pt-3" >

				<div className="lg:w-8/12 w-full lg:pr-3 pb-4">

				<ReactQuill value={address} theme="snow" onChange={(e)=>setAddress(e.target.value)} />

				<button className="bg-blue-500 text-md font-semibold py-2 px-5 mt-5 rounded text-white " onClick={saveAddress}>Save</button>
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
					<div className="pt-3">

					{user && user.token ? 
					<div className=" flex justify-between">

					<button  disabled={disable} className="bg-green-400 mt-4 rounded py-2 px-5 font-semibold text-gray-800  inline-flex">Place Order</button>
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
