import axios from 'axios';

// create product
export const createProduct=async(product,token)=>{
	return await axios.post(`${import.meta.env.VITE_Base_Url}/product`,product,{
		headers:{
			token
		},
	})
};
// update product
export const updateProduct=async(slug,product,token)=>{
	return await axios.patch(`${import.meta.env.VITE_Base_Url}/product/${slug}`,product,{
		headers:{
			token
		},
	})
};
// get product

export const getAllProducts=async(limit)=>{
	return await axios.get(`${import.meta.env.VITE_Base_Url}/products/${limit}`)
}
export const getProductBySlug=async(slug)=>{
	return await axios.get(`${import.meta.env.VITE_Base_Url}/product/${slug}`)
}

// remove product 
export const deleteProduct=async(id,token)=>{
	return await axios.delete(`${import.meta.env.VITE_Base_Url}/product/${id}`,{
		headers:{
			token
		}
	})
}
// get product by sorting
export const getProductBySorting=async(sort,order,page)=>{
	return axios.post(`${import.meta.env.VITE_Base_Url}/products`,{
		sort,
		order,
		page
	})
}
// product count
export const getProductCount=async()=>{
	return await axios.get(`${import.meta.env.VITE_Base_Url}/products/total`)
}
//  rate star 
export const  productStarRating =async (id,star,token)=>{
	return await axios.put(`${import.meta.env.VITE_Base_Url}/product/star/${id}`,{star},{
		headers:{
			token,
		}
	})
}
// get product by category id
export const getProductByCategoryId=async(id)=>{
return await axios.get(`${import.meta.env.VITE_Base_Url}/category/product/${id}`)
}

// get product by search filters
export const getProductByFilter=async(args)=>{
	return await axios.post(`${import.meta.env.VITE_DEV_Url}/search/filters`,args)
}