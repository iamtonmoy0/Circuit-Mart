import axios from 'axios';

// create product
export const createProduct=async(product,token)=>{
	return await axios.post(`${import.meta.env.VITE_Base_Url}/product`,product,{
		headers:{
			token
		},
	})
};
// get product

export const getAllProducts=async(limit)=>{
	return await axios.get(`${import.meta.env.VITE_Base_Url}/products/${limit}`)
}

// remove product 
export const deleteProduct=async(id,token)=>{
	return await axios.delete(`${import.meta.env.VITE_Base_Url}/product/${id}`,{
		headers:{
			token
		}
	})
}