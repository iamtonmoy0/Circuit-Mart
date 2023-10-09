import axios from 'axios'
// create payment
export const createPayment=async(price,token)=>{
	return await axios.post(`${import.meta.env.VITE_DEV_Url}/create-payment-intend`,{price},{
		headers:{
			token
		}
	})
}
export const savePayment=async(data,token)=>{
	return await axios.post(`${import.meta.env.VITE_DEV_Url}/payment-success`,{data},{
		headers:{
			token
		}
	})
}
