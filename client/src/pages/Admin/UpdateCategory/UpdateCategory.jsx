import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; // Import useParams from react-router-dom
import { getCategory, updateCategory } from "../../../functions/categoryFunctions";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import * as routePath from '../../../routes/routePath'

const UpdateCategory = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const [name, setName] = useState("");
  const navigate= useNavigate();
  const { slug } = useParams();
   // Use useParams to get the slug from the URL parameter
console.log(name,slug)
  useEffect(() => {
    loadCategory();
  }, []); // Include slug in the dependency array
// loading category from server by slug
  const loadCategory = () => {
    getCategory(slug) // Use the slug from useParams
      .then((c) => {setName(c.data.data.name)});
  }
//   handle update
const handleUpdate=(e)=>{
e.preventDefault();
const form = e.target;
const category = form.category.value;
updateCategory(slug,category,user.token)
.then((res)=>{
	console.log(res)
	toast.success(`${res.data.data.name} updated !`);
	form.reset();
	navigate(routePath.CATEGORY)
}).catch(err=>{
	toast.error(err.response.data.err)
})
}

  return (
    <div>
		<div className="mx-auto max-w-2xl">
    <div className="text-center">
      <h2 className="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
       Update Category
      </h2>
    </div>

    {/* Card */}
    <div className="mt-5 p-4 relative  bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-gray-800 dark:border-gray-700">
      <form onSubmit={e=>handleUpdate(e)} >
        <div className="mb-4 sm:mb-8">
          <label For="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">Category Name</label>
          <input required type="text" name="category" defaultValue={name} id="hs-feedback-post-comment-name-1" className="py-3 px-4 block w-full rounded-md bg-gray-200 text-sm border-b-2 focus:border-b-2 focus:border-green-500 outline-none   sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" placeholder="Enter new  category name"/>
        </div>


        <div className="mt-6 grid">
          <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800">Create</button>
        </div>
      </form>
    </div>
    {/* End Card */}
  </div>
    </div>
  );
}

export default UpdateCategory;
