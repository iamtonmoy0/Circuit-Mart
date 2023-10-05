import axios from "axios"

// saving user data to db
export const userCart = async(cart,token)=>{
return axios.post(`${import.meta.env.VITE_DEV_Url}/user/cart`,{cart},{
	headers:{
		token
	}
})
}