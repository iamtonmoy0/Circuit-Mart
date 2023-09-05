import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; // Import useParams from react-router-dom
import { getCategory, updateCategory } from "../../../functions/categoryFunctions";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import * as routePath from '../../../routes/routePath'
import CategoryForm from "../../Shared/CategoryForms/CategoryForm";

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
    <CategoryForm handleSubmit={handleUpdate} name={name}/>
    {/* End Card */}
  </div>
    </div>
  );
}

export default UpdateCategory;
