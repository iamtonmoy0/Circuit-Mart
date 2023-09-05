import axios from "axios"
//get all categories
export const  getCategories =async()=>{
	await axios.get(`${import.meta.env.VITE_Base_Url}/categories`);

}
// get categories by slug
export const  getCategory =async(slug)=>{
	await axios.get(`${import.meta.env.VITE_Base_Url}/category/${slug}`);

}
// update category
export const  updateCategory =async(slug,category,token)=>{
	await axios.patch(`${import.meta.env.VITE_Base_Url}/category/${slug}`,{
		headers:{
			token
		}
	});

}
// remove category  
export const  removeCategory =async(slug,token)=>{
	await axios.delete(`${import.meta.env.VITE_Base_Url}/category/${slug}`,{
		headers:{
			token
		}
	});

}
// create new category
export const  createCategory =async(category,token)=>{
	await axios.delete(`${import.meta.env.VITE_Base_Url}/category`,category,{
		headers:{
			token
		}
	});

}
