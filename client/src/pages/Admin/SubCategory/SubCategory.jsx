import { useEffect, useState } from "react"
import { getCategories } from "../../../functions/categoryFunctions"
import CategoryForm from "../../Shared/CategoryForms/CategoryForm";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { createSubCategory } from "../../../functions/subCategoryFunctions";

const SubCategory = () => {
	const [categories,setCategories]=useState([]);
	const {user}= useSelector(state=>({...state}));
	const [selectedCategoryId, setSelectedCategoryId] = useState("");


	//render load categories
	useEffect(()=>{
		loadCategories()
	},[])
	// load categories
	const loadCategories=()=>{
	getCategories()
	.then((res)=>setCategories(res.data.data))
	}
	// handle parent categroy
	const handleParent=(e)=>{
		const selectedValue = e.target.value; // Get the selected value from the event
		console.log(selectedValue)
		setSelectedCategoryId(selectedValue); // Update the state with the selected value
	}
	// handle create sub category
	const handleSubCategory=(e)=>{
		e.preventDefault();
		const form = e.target;
		const category = form.category.value;
		createSubCategory({name:category,parent:selectedCategoryId},user.token)
		.then(res=>{
			toast.success(`${res.data.data.name} created!`)
			form.reset();
		})
		.catch(err=>{
			toast.error(err.message)
		})
		
	}
	return (
		<div className="block items-center px-20">
			{/* parent category  */}
			<div className="pt-10">
			<label for="countries"   className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Select an option</label>
			<select onChange={handleParent}  id="countries" className="bg-gray-50 border outline-none border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
			<option selected>Choose a category</option>
			{categories.map(c=><option value={c._id}>{c.name} </option>)}
			</select>
			</div>
			{/* sub category */}
			<div>
			<CategoryForm handleSubmit={handleSubCategory}  button={'Save'} />
			</div>
		</div>
		
	);
}

export default SubCategory;
