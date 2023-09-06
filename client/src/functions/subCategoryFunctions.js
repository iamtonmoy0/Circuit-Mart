import axios from "axios"
//get all categories
export const  getSubCategories =async()=>{
	return await axios.get(`${import.meta.env.VITE_Base_Url}/sub-categories`);

}
// get categories by slug
export const  getSubCategory =async(slug)=>{
	return await axios.get(`${import.meta.env.VITE_Base_Url}/sub-category/${slug}`);

}
// update category
export const  updateSubCategory =async(slug,category,token)=>{
	return await axios.patch(`${import.meta.env.VITE_Base_Url}/sub-category/${slug}`,{name:category},{
		headers:{
			token
		}
	});

}
// remove category  
export const  removeSubCategory =async(slug,token)=>{
	return await axios.delete(`${import.meta.env.VITE_Base_Url}/sub-category/${slug}`,{
		headers:{
			token
		}
	});

}
// create new category
export const  createSubCategory =async(category,token)=>{
	return await axios.post(`${import.meta.env.VITE_Base_Url}/sub-category`,category,{
		headers:{
			token
		}
	});

}
