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
 <CategoryForm handleSubmit={handleSubmit} button={'Create Category'} />
</div>


{/* search  form */}
<SearchForm handleChange={handleChange} keywords={keywords} />
  {/* categories table */}

<div className="flex flex-col">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Name</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {categories.filter(searched(keywords)).map(c=>
			<tr key={c._id} className="flex flex-row justify-between items-center">
			<td className="flex-grow px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
			{c.name}
			</td>
			<Link to={`${routePath.UPDATE_CATEGORY}/${c.slug}`} className="cursor-pointer px-6 py-4 text-right text-sm text-orange-400 dark:text-gray-200">
			<AiOutlineEdit className="text-2xl" />
			</Link>
			<td className="cursor-pointer px-6 py-4 text-sm text-red-800 dark:text-gray-200" onClick={()=>handleRemove(c.slug)}>
			<AiOutlineDelete className="text-2xl" />
			</td>
		</tr>
  
			)}        
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>


</div>
{/* End Comment Form */}
		</>
	);
}

export default CreateCategory;
