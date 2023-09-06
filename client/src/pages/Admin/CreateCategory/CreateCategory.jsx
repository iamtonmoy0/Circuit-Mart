import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { createCategory, getCategories, removeCategory } from "../../../functions/categoryFunctions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai'
import Swal from 'sweetalert2'
import * as routePath from '../../../routes/routePath'
import CategoryForm from "../../Shared/CategoryForms/CategoryForm";
import SearchForm from "../../Shared/SearchForm/SearchForm";

const CreateCategory = () => {
  const {user}= useSelector(state=>({...state}));
  const [categories,setCategories]=useState([])
  const [keywords,setKeywords]=useState('') //for search
 
 
 //render load categories
  useEffect(()=>{
    loadCategories()
  },[])
  // load categories
const loadCategories=()=>{
getCategories()
.then((res)=>setCategories(res.data.data))
}

  // handle submit
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.category.value;
    // console.log(name)
    await createCategory({name},user.token)
    .then(()=>{
      toast.success('Successfully created new category')
      loadCategories()
      form.reset();
    }).catch((error)=>{
      console.log(error)
      toast.error(error.response.data.message)
    })

  }
  // handle remove 
  const handleRemove=async(slug)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this category !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
       // remove category
       removeCategory(slug,user.token)
        .then((res)=>{
        loadCategories()
        Swal.fire(
          `${res.data.data.name} Deleted!`,
          'Your category has been deleted.',
          'success'
        );
      })
    }
    })
  }
  // handle search
  const handleChange=(e)=>{
    e.preventDefault();
    setKeywords(e.target.value.toLowerCase());
  }
  const searched = (keyword) => (c) => c.name.toLowerCase().includes(keyword);


	return (
		<>
		{/* Comment Form */}
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-2 mx-auto">
 <div className="mx-auto max-w-2xl">
    <div className="text-center">
      <h2 className="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
       Create A New Category
      </h2>
    </div>
 {/* create category forms */}
 <CategoryForm handleSubmit={handleSubmit} />
</div>


{/* search  form */}
<SearchForm handleChange={handleChange} keywords={keywords} />
  {/* categories */}
  <div className="pt-10 grid grid-cols-3 gap-2">
  {categories.filter(searched(keywords)).map(c=>(
    <div className="bg-gray-200 flex justify-between items-center p-4 rounded-md shadow-md mb-4" key={c._id}>
  <div>{c.name}</div>

  <div className="flex pt-4  ">
    
    <Link  to={`${routePath.UPDATE_CATEGORY}/${c.slug}`}
    className=" mr-4 ">
      <span className="cursor-pointer text-yellow-600">
        <AiOutlineEdit className="text-2xl" />
      </span>
    </Link>
    <span
      onClick={() => handleRemove(c.slug)}
      className="cursor-pointer  text-red-600"
    >
      <AiOutlineDelete className="text-2xl" />
    </span>
  </div>
</div>

))}
</div>
</div>
{/* End Comment Form */}
		</>
	);
}

export default CreateCategory;
