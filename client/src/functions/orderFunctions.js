import axios from 'axios'
// create payment
export const createPayment=async(price,token)=>{
	return await axios.post(`${import.meta.env.VITE_Base_Url}/create-payment-intend`,{price},{
		headers:{
			token
		}
	})
}
// save payment to db
export const savePayment=async(data,token)=>{
	return await axios.post(`${import.meta.env.VITE_Base_Url}/payment-success`,{data},{
		headers:{
			token
		}
	})
}

// get order history of user
export const  getOrderHistory = async(id,token)=>{
	return await axios.get(`${import.meta.env.VITE_Base_Url}/order-history/${id}`,{
		headers:{
			token
		}
	})
}
