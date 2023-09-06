import toast from "react-hot-toast";
import { getSubCategory, updateSubCategory } from "../../../functions/subCategoryFunctions";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCategories } from "../../../functions/categoryFunctions";
import { useNavigate, useParams } from "react-router-dom";
import * as routePath from '../../../routes/routePath'
import CategoryForm from "../../Shared/CategoryForms/CategoryForm";

const UpdateSubCategory = () => {
	const [categories,setCategories]=useState([]);
	const [name,setName]=useState('');
	const [parent,setParent]=useState('')
	const {user}= useSelector(state=>({...state}));
	const {slug}= useParams();
	const navigate = useNavigate();
	
	//render load categories
	useEffect(()=>{
		loadCategories()
		loadSubCategory()
	},[])

	// load categories
	const loadCategories=()=>{
	getCategories()
	.then((res)=>setCategories(res.data.data))
	}
	// load sub category
	const loadSubCategory=()=>{
		getSubCategory(slug)
		.then(res=>{
			setName(res.data.data.name);
			setParent(res.data.data.parent)
		})
	}

	// handle parent category
	const handleParent=(e)=>{
		const selectedValue = e.target.value; // Get the selected value from the event
		// console.log(selectedValue)
		setParent(selectedValue) // Update the state with the selected value
	}
	// handle update sub category
	const handleUpdate=(e)=>{
		e.preventDefault();
		const form = e.target;
		const category = form.category.value;
		updateSubCategory(slug,{name:category,parent },user.token)
		.then((res=>{
			toast.success(`${res.data.data.name} updated !`);
			navigate(routePath.SUB_CATEGORY);

		}))
		.catch(err=>{
			toast.error(err.message)
		})
	
		
	}
	
	return (
		<div>
			<div className="block items-center px-20">
			{/* parent category  */}
			<div className="pt-10">
			<label    className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Select an option</label>
			<select onChange={handleParent}  id="countries" className="bg-gray-50 border outline-none border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[600px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
			<option selected>Choose a category</option>
			{categories.map(c=><option key={c._id} value={c._id} selected={c._id === parent} >{c.name}  </option>)}
			</select>
			</div>
			{/* sub category */}
			<div>
			<CategoryForm handleSubmit={handleUpdate}  button={'Update'} name={name} />
			</div>
			</div>
		</div>
	);
}

export default UpdateSubCategory;
