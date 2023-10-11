import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getOrderHistory } from "../../functions/orderFunctions";

const Welcome = () => {
 const {user}= useSelector(state=>({...state}));
 const [order,setOrder]= useState([])
  useEffect(()=>{
loadOrder()
  },[])
  // load user order details
  const loadOrder = ()=>{
getOrderHistory(user._id,user.token)
.then(res=>{
  setOrder(res.data.data)
})
  }

	return (
		<div>
		{JSON.stringify(order)}
		</div>
	);
}

export default Welcome;
