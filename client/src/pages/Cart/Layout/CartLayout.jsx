import {  useSelector } from "react-redux";
import {  Link, useNavigate } from "react-router-dom";
import * as routePath from '../../../routes/routePath';
import CartTable from "../../../components/CartTable/CartTable";
import {MdShoppingCartCheckout} from 'react-icons/md'
import { userCart } from "../../../functions/cartFunctions";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
const CartLayout = () => {
	const {cart,user}=useSelector(state=>({...state}));
	// const dispatch = useDispatch();
	const navigate = useNavigate();
	// navigation
	const handleNavigate = ()=>{
		
			navigate(routePath.LOGIN,{state:{from:'/cart'}})
		
	}
	// total price
	const getTotal=()=>{
		return cart.reduce((currentValue,nextValue)=>{
			return currentValue + nextValue.price * nextValue.count
		},0)
	}



// order info to db
const orderToDb=()=>{
	userCart(cart,user.token)
	.then((res)=>{
		console.log(res)
	navigate(routePath.CHECKOUT)
	toast.success('Proceeding for payment')
}).catch(err=>{
	toast.error(err.message)
})

}
	return (
		<div className="px-5">
			<Helmet>
				<title>Circuit-Mart | Cart</title>
			</Helmet>
			<h1 className="text-3xl pt-3 text-gray-700">Cart/{cart.length} Products</h1>
		
			<div className="flex flex-col lg:flex-row pt-3" >

				<div className="lg:w-8/12 w-full lg:pr-3 pb-4">
					{cart && cart.length>0 ? 
					
		<>

<table className="w-full border-collapse border-gray-200">
      <thead className="bg-gray-200">
        <tr>
          <th className="p-2">Image</th>
          <th className="p-2">Title</th>
          <th className="p-2">Price</th>
          <th className="p-2">Brand</th>
          <th className="p-2">Color</th>
          <th className="p-2">Count</th>
          <th className="p-2">Shipping</th>
          <th className="p-2">Remove</th>
        </tr>
      </thead>
    
	{
		cart && cart.map(c=><CartTable key={c._id} p={c} />)
	}
    </table>
 
					</>
					:
					<p>No product available in cart. <Link to={routePath.SHOP} className="text-blue-500 ">Continue To Shop</Link></p>
					
					}
				</div>
				<div className="lg:w-4/12 w-full lg:pl-3 pb-4">
					<p className="text-center text-2xl font-medium">Order Summery</p>
					<hr />
					<p className="pt-2 text-gray-600">Products</p>
					{cart && cart.length>0 && cart.map((p,i)=><div key={i}>
						<p className="pt-1">{p.title} x {p.count} Pcs  = ${p.count * p.price}</p>
					</div>)}
					<hr/>
					<p className='py-3'>Total: ${getTotal()}</p>
					<hr />
					<div className="pt-3">

					{user && user.token ? 
					<button onClick={orderToDb} disabled={!cart.length} className="bg-green-400 mt-4 rounded py-2 px-3 font-semibold text-gray-800  inline-flex">Proceed Checkout<MdShoppingCartCheckout className="text-xl"/></button>
					:
					<button onClick={handleNavigate} className="bg-[tomato] mt-  rounded py-2 px-3 text-md">Login For Confirm Payment</button>
				}
				</div>
				</div>

			</div>

		</div>
	);
}

export default CartLayout;
