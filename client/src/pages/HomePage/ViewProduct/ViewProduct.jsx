import { useEffect, useState } from "react";
import { getProductBySlug } from "../../../functions/productFunctions";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const ViewProduct = () => {
	const [product,setProduct]=useState({})
	const {slug} = useParams()

useEffect(()=>{
loadProduct()
},[])
const loadProduct =()=>{
	toast.loading('Loading!')
	getProductBySlug(slug)
	.then(res=>{
		toast.dismiss()
		setProduct(res.data.data)
	}).catch(err=>{
		toast.dismiss();
		toast.error(err.message)
	})
}

	return (
		<div>
			{JSON.stringify(product)}
		</div>
	);
}

export default ViewProduct;
