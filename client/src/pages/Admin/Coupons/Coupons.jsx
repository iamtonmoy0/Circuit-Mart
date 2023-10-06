import { DatePicker } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createCoupon, deleteCouponById, getCoupon } from "../../../functions/couponFunctions";
import toast from "react-hot-toast";
import {AiFillDelete} from 'react-icons/ai'

const Coupons = () => {
	const [coupon,setCoupon]= useState('');
	const [discount,setDiscount]= useState(0);
	const [date,setDate]= useState('');
	const [data,setData]= useState([]);
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
	loadCoupons()
	toast.success('Coupon created')
  }).catch(err=>{
	toast.dismiss()
	toast.error(err.message)
  })
	}
	useEffect(()=>{
loadCoupons()
	},[])
	// load coupons
	const loadCoupons=()=>{
		toast.loading('please wait')
		getCoupon()
		.then(res=>{
			toast.dismiss()
			console.log(res)
			setData(res.data.data)
		}).catch(err=>{
			toast.dismiss();
			toast.error(err.message);
		})

	}
	// delete coupon
	const handleDelete=(id)=>{
		deleteCouponById(id,user.token)
		.then(()=>{
			toast.success('Deleted successfully')
			loadCoupons()
		}).catch(err=>{
			toast.error(err.message)
		})
	}
	return (
		<div>
      <p className="text-center text-3xl underline text-green-600 pt-4">Create Coupon</p>
	
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
	<div className="px-10">
		<p className='text-center text-3xl font-semiblod text-green-600' >All Coupons</p>
		{/* table */}
		<div className="flex flex-col">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 ">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 text-center text-md font-medium text-gray-500 uppercase">Name</th>
              <th scope="col" className="px-6 py-3 text-center text-md font-medium text-gray-500 uppercase">Expiry</th>
              <th scope="col" className="px-6 py-3 text-center text-md font-medium text-gray-500 uppercase">Discount Amount</th>
              <th scope="col" className="px-6 py-3 text-center text-md font-medium text-gray-500 uppercase">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700 text-center">
            { data && data.length>0 && data.map(c=><tr key={c._id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{c.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{c.expiry}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{c.discount} %</td>
              <td className="pl-16 py-4 whitespace-nowrap  text-sm font-medium">
                <a className="cursor-pointer " onClick={()=>handleDelete(c._id)} ><AiFillDelete className='text-xl text-red-500' /></a>
              </td>
            </tr>)}

          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
		<hr />
	</div>
    </div>
	);
}

export default Coupons;
