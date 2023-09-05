import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { createCategory, getCategories, removeCategory } from "../../../functions/categoryFunctions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai'
import Swal from 'sweetalert2'
const CreateCategory = () => {
  const {user}= useSelector(state=>({...state}));
  const [categories,setCategories]=useState([])
 
 
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

    {/* Card */}
    <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-gray-800 dark:border-gray-700">
      <form onSubmit={e=>handleSubmit(e)} >
        <div className="mb-4 sm:mb-8">
          <label For="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">Category Name</label>
          <input type="text" name="category" id="hs-feedback-post-comment-name-1" className="py-3 px-4 block w-full rounded-md bg-gray-200 text-sm border-b-2 focus:border-b-2 focus:border-green-500 outline-none   sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" placeholder="Enter  name of category"/>
        </div>


        <div className="mt-6 grid">
          <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800">Create</button>
        </div>
      </form>
    </div>
    {/* End Card */}
  </div>
  {/* categories */}
  <div className="pt-10 grid grid-cols-3 gap-2">
  {categories.map(c=>(
    <div className="bg-gray-200 flex justify-between items-center p-4 rounded-md shadow-md mb-4" key={c._id}>
  <div>{c.name}</div>
  <div className="flex my-auto  ">
    <span
      onClick={() => handleRemove(c.slug)}
      className="cursor-pointer mr-2  text-red-600"
    >
      <AiOutlineDelete className="text-2xl" />
    </span>
    <Link to={`/admin/category/${c.slug}`}>
      <span className="cursor-pointer  text-yellow-600">
        <AiOutlineEdit className="text-2xl" />
      </span>
    </Link>
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
