import axios from "axios"

// create review
export const createReview = async(data,token)=>{
	return await axios.post(`${import.meta.env.VITE_Base_Url}/review`,data,{
		headers:{
			token
		}
	})

}
// get review
export const getReview=async(id)=>{
	return await axios.get(`${import.meta.env.VITE_Base_Url}/review/${id}`)
}