import { DatePicker } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { createCoupon } from "../../../functions/couponFunctions";
import toast from "react-hot-toast";

const Coupons = () => {
	const [coupon,setCoupon]= useState('');
	const [discount,setDiscount]= useState(0);
	const [date,setDate]= useState('');
	const {user}= useSelector(state=>({...state}))
	// submit handler
	const handleSubmit=(e)=>{
		e.preventDefault()
		toast.loading('please wait')
  createCoupon({name:coupon,expiry:date.$d,discount:discount},user.token)
  .then(()=>{
	toast.dismiss();
	setDiscount('')
	setDate('')
	setCoupon('')
	toast.success('Coupon created')
  }).catch(err=>{
	toast.dismiss()
	toast.error(err.message)
  })
	}
	return (
		<div>
      <p className="text-center text-3xl  text-green-600 pt-4">Create Coupon</p>
	<form onSubmit={handleSubmit} action=""className="form-control">
		
		<div className="px-20">
			<label className="  text-md font-semibold">Name:</label>
			<input type="text" value={coupon} onChange={(e)=>setCoupon(e.target.value)} className="form-control w-full outline-none py-3 rounded text-dark border-b border-b-lime-300" placeholder="Enter coupon name" required/>
		</div>
		
		<div className="px-20 pt-5">
			<label className="text-md font-semibold">Discount:</label>
			<input type="number" value={discount} onChange={(e)=>setDiscount(e.target.value)} className="form-control w-full outline-none py-3 rounded text-dark border-b border-b-lime-300" placeholder="Enter discount percent / %" required/>
		</div>
		
		<div className="px-20 pt-4">
			<DatePicker className="text-dark form-control" required selected={new Date()} value={date} onChange={(date)=>setDate(date)} />
			</div>
		<button type="submit" className="btn bg-blue-500 text-white font-semibold ml-20 py-2 px-8 mt-10 rounded" >Create</button>	
	</form>
    </div>
	);
}

export default Coupons;
