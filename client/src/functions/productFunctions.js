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