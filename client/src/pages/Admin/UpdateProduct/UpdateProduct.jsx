import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { getProductBySlug } from "../../../functions/productFunctions";
import { useParams } from "react-router-dom";


// initial state
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

const UpdateProduct = () => {
	const {user}= useSelector(state=>({...state}));
const [product,setProduct] = useState(initialState);
const {slug} = useParams()

console.log(product)
	useEffect(()=>{
	loadProduct();
			
	},[])
//    get all parent category
const loadProduct=()=>{
	toast.loading('loading !')
getProductBySlug(slug)
.then((res)=>{
	toast.dismiss()
	setProduct({...product, ...res.data.data})
}).catch(err=>{
	toast.dismiss();
	toast.error(err.message);
})
}


	
	
	return (
		<>
		{JSON.stringify(product)}
	</>
	);
	};


export default UpdateProduct;
