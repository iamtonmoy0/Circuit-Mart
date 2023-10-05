import axios from "axios"
// get coupons
export const getCoupon = async()=>{
	return axios.get(`${import.meta.env.VITE_Base_Url}/coupons`)
}
// create coupon
export const createCoupon = async(data,token)=>{
	return axios.post(`${import.meta.env.VITE_Base_Url}/coupon`,{data},{
		headers:{
			token
		}
	})
}
// delete coupons
export const deleteCouponById = async(id,token)=>{
	return axios.delete(`${import.meta.env.VITE_Base_Url}/coupon/${id}`,{
		headers:{
			token
		}
	})
}