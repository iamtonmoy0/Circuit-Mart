import { useDispatch, useSelector } from "react-redux";
import {  Link, useNavigate } from "react-router-dom";
import * as routePath from '../../../routes/routePath';
import { Table } from "antd";

const columns =[ {
    title: 'Image',
    dataIndex: 'Image',
  },
  {
    title: 'Title',
    dataIndex: 'Title',
  },
  {
    title: 'Price',
    dataIndex: 'price',
  },
  {
    title: 'Brand',
    dataIndex: 'Brand',
  },
  {
    title: 'Color',
    dataIndex: 'Color',
  },
  {
    title: 'Count',
    dataIndex: 'Count',
  },
  {
    title: 'Shipping',
    dataIndex: 'shipping',
  },
  {
    title: 'Remove',
    dataIndex: 'remove',
  },
]

const CartLayout = () => {
	const {cart,user}=useSelector(state=>({...state}));
	const dispatch = useDispatch();
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

}
	return (
		<div className="px-5">
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
      <tbody>
        {cart.map((c) => (
          <tr key={c._id}>
            <td className="p-2"><img src={c.images[0]} alt="Product" width="50" height="50" /></td>
            <td className="p-2 text-blue-400"><Link to={`${routePath.VIEW_PRODUCT}/${c.slug}`}>{c.title} </Link> </td>
            <td className="p-2">${c.price.toFixed(2)}</td>
            <td className="p-2">{c.brand}</td>
            <td className="p-2">{c.color}</td>
            <td className="p-2">{c.count}</td>
            <td className="p-2">{c.shipping}</td>
            <td className="p-2"><button className="bg-red-500 text-white px-2 py-1 rounded-md">Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
 
					</>
					:
					<p>No product here <Link to={routePath.SHOP}>continue to shop</Link></p>
					
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
					<button onClick={orderToDb} disabled={!cart.length} className="bg-green-400 mt-4 rounded py-2 px-3 font-semibold text-gray-800">Proceed Checkout</button>
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
