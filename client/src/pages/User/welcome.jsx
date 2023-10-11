import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getOrderHistory } from "../../functions/orderFunctions";
import OrderCard from "../../components/OrderCard/OrderCard";
import toast from "react-hot-toast";

const Welcome = () => {
 const {user}= useSelector(state=>({...state}));
 const [order,setOrder]= useState([])
  useEffect(()=>{
loadOrder()
  },[])
  // load user order details
  const loadOrder = ()=>{
    toast.loading('loading')
getOrderHistory(user._id,user.token)
.then(res=>{
  toast.dismiss()
  setOrder(res.data.data)
}).catch(err=>{
  toast.dismiss()
  toast.error(err.message)
})
  }
  
	return (
		<div className="px-6 ">
      <p className="text-center text-xl font-semibold bg-gray-400 py-3">Order History </p>
      <div className="order-cart mt-5">
        {order.length>0 && order.map(p=>
          <OrderCard key={p._id} order={p}  loadOrder={loadOrder}/>
          )
        }
        
      
    </div>
		</div>
	);
}

export default Welcome;
