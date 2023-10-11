import axios from "axios"

// save to withlist
export const addToWishlist =async(id,token)=>{
	return await axios.post(`${import.meta.env.VITE_Base_Url}/wishlist/${id}`,{
		headers:{
			token
		}
	})
}
// remove from withlist
export const removeWishlist =async(id,token)=>{
	return await axios.post(`${import.meta.env.VITE_Base_Url}/wishlist/${id}`,{
		headers:{
			token
		}
	})
}