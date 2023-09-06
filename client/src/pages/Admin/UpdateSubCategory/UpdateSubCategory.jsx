import toast from "react-hot-toast";
import { updateSubCategory } from "../../../functions/subCategoryFunctions";
import { useState } from "react";

const UpdateSubCategory = () => {
	const [categories,setCategories]=useState([]);
	const [subCategories,setSubCategories]=useState([]);
	const {user}= useSelector(state=>({...state}));
	const [selectedCategoryId, setSelectedCategoryId] = useState("");


	//render load categories
	useEffect(()=>{
		loadCategories()
		loadSubCategories()
	},[])
	// load categories
	const loadCategories=()=>{
	getCategories()
	.then((res)=>setCategories(res.data.data))
	}
	// load sub category
	const loadSubCategories=()=>{
		getSubCategories()
		.then(res=>setSubCategories(res.data.data))
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
		updateSubCategory({name:category,parent:selectedCategoryId},user.token)
		.then(res=>{
			toast.success(`${res.data.data.name} created!`)
			form.reset();
			loadSubCategories()
		})
		.catch(err=>{
			toast.error(err.message)
		})
		
	}
	
	return (
		<div>
			sub category
		</div>
	);
}

export default UpdateSubCategory;
