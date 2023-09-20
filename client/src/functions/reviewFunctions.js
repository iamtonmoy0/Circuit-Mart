import axios from "axios"

// create review
export const createReview = async(data,token)=>{
	return axios.post(`${import.meta.env.VITE_Base_Url}/review`,data,{
		headers:{
			token
		}
	})

}