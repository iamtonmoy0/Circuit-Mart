import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createProduct } from "../../../functions/productFunctions";
import toast from "react-hot-toast";
import { getCategories, getSubsByCategoryId } from "../../../functions/categoryFunctions";
import ImageUploadForm from "../../../components/Form/ImageUploadForm";

const initialState={
	title: "",
	description: "",
	price: "",
	categories: [],
	category: "",
	subs: [],
	shipping: "",
	quantity: "",
	images: [],
	colors: ["Black", "Brown", "Silver", "White", "Blue"],
	brands: ["Apple","Samsung","Lenovo","Asus","Dell"," Razer","Acer","Sony","Microsoft"],
	color: "",
	brand: "",
}
const CreateProduct = () => {
	const {user}= useSelector(state=>({...state}));
	const [product, setProduct] = useState(initialState);
	const [subOptions,setSubOptions]=useState([]);




	useEffect(()=>{
	loadParentCategories();
			
	},[])
//    get all parent category
const loadParentCategories=()=>{
	getCategories()
	.then(res=>{
		setProduct({...product,categories:res.data.data})
	})
}


	// handle change
	const handleChange = (e) => {
		const { name, value } = e.target;
		setProduct({ ...product, [name]: value });

		// console.log(e.target.name,'=>' ,e.target.value)
	};
	// handle category change
	const handleCategoryChange=(e)=>{
	e.preventDefault()
	setProduct({...product, category: e.target.value })
	getSubsByCategoryId(e.target.value)
	.then(res=>{
		console.log(res)
		setSubOptions( res.data.data);
		
	}).catch(err=>{
		toast.error(err.message)
	})}

	// handle submit
	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission here
		
		console.log(product);
		createProduct(product,user.token)
		.then(()=>{
			toast.success('product created')
			setProduct(initialState)
			setProduct({...product,images:[]})
			
		}).catch(err=>{
			toast.error(err.message)
		})
	};
	
	return (
		<div className="w-full mx-auto mt-8 px-10 bg-white rounded-md shadow-md">
		<h2 className="text-2xl text-center font-semibold mb-4">Product Create Form</h2>
		<hr  className="w-80 mx-auto"/>
			{/* image upload form */}
			<ImageUploadForm  product={product} setProduct={setProduct}  />
		<form onSubmit={handleSubmit} className="pt-10">
		<div className="grid lg:grid-cols-2 gap-4">
			
			<div className="mb-4">
			<label htmlFor="title" className="block text-sm font-medium text-gray-600">
				Title
			</label>
			<input
				type="text"
				id="title"
				name="title"
				value={product.title}
				onChange={handleChange}
				className="mt-1 p-2 w-full outline-none border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
				required
			/>
			</div>

			<div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-600">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={product.description}
          onChange={handleChange}
          className="mt-1 p-2 w-full outline-none border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-sm font-medium text-gray-600">
          Price
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={product.price}
          onChange={handleChange}
          className="mt-1 p-2 w-full border outline-none border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
	{/* quantity */}
      <div className="mb-4">
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-600">
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          className="mt-1 p-2 w-full border outline-none border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="shipping" className="block text-sm font-medium text-gray-600">
          Shipping
        </label>
        <select
          id="shipping"
          name="shipping"
          value={product.shipping}
          onChange={handleChange}
          className="mt-1 p-2 w-full border outline-none border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          required
        >
          <option value="" disabled>
            Select Shipping
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
	{/*category  */}
      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-medium text-gray-600">
          Category
        </label>
        <select
          id="category"
          name="category"
          value={product.category}
          onChange={handleCategoryChange}
          className="mt-1 p-2 w-full border outline-none border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          required
        >
          <option value="" disabled>
            Select Category
          </option>
          {/* Add options dynamically based on your categories */}
          {product.categories.map((cat, index) => (
            <option key={index} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
		{/*sub category  */}
      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-medium text-gray-600">
          Sub Category
        </label>
{/* selector */}
<select
          id="subs"
          name="subs"
          value={product.subs}
          onChange={handleChange}
          className="mt-1 p-2 w-full border outline-none border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        //   required
        >
          <option value="" disabled>
            Select Sub-Category
          </option>
          {/*  options dynamically based on categories */}
          {subOptions.map((cat, index) => (
            <option key={index} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
  
      </div>	
	{/* color select */}
			<div className="mb-4">
			<label htmlFor="color" className="block text-sm font-medium text-gray-600">
				Color
			</label>
			<select
				id="color"
				name="color"
				value={product.color}
				onChange={handleChange}
				className="mt-1 p-2 w-full border outline-none border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
				required
			>
				<option value="" disabled>
				Select Color
				</option>
				{product.colors.map((color, index) => (
				<option key={index} value={color}>
					{color}
				</option>
				))}
			</select>
			</div>
			{/* brand select */}
			<div className="mb-4">
			<label htmlFor="brand" className="block text-sm font-medium text-gray-600">
				Brand
			</label>
			<select
				id="brand"
				name="brand"
				value={product.brand}
				onChange={handleChange}
				className="mt-1 p-2 w-full border outline-none border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
				required
			>
				<option value="" disabled>
				Select Brand
				</option>
				{product.brands.map((brand, index) => (
				<option key={index} value={brand}>
					{brand}
				</option>
				))}
			</select>
			</div>
			
			</div>
			<button
				type="submit"
				className="px-4 py-2 ml-[400px] bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
			>
				Create Product
			</button>
		</form>
		</div>
	);
	};


export default CreateProduct;
