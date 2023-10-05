import axios from "axios"

// saving user data to db
export const userCart = async(cart,token)=>{
return axios.post(`${import.meta.env.VITE_Base_Url}/user/cart`,{cart},{
	headers:{
		token
	}
})
}
// get cart
export const getUserCart = async(token)=>{
return axios.get(`${import.meta.env.VITE_Base_Url}/user/cart`,{
	headers:{
		token
	}
})
}
export const deleteUserCart = async(token)=>{
return axios.delete(`${import.meta.env.VITE_Base_Url}/user/cart`,{
	headers:{
		token
	}
})
}