import axios from "axios"

// saving user data to db
export const userCart = async(token,cart)=>{
return axios.post(`${import.meta.env.VITE_Base_Url}`,{cart},{
	headers:{
		token
	}
})
}