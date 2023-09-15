import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {  getProductBySorting } from "../../../functions/productFunctions";
import toast from "react-hot-toast";
import Banner from "../Banner/Banner";
import ProductCard from "../../Shared/ProductCard/ProductCard";

const Home = () => {
	const [products,setProducts]=useState([])
	useEffect(()=>{
		loadProduct()
	},[])
	// load product
	const loadProduct=()=>{
		toast.loading('Loading!')
		getProductBySorting("createdAt","desc", 3)
		.then(res=>{
			toast.dismiss()
			console.log(res)
			setProducts(res.data.data)
		}).catch(err=>{
			toast.dismiss();
			toast.error(err.message)
		})
		
	}
	return (
		<div>
			<Helmet>
				<title>Circuit-Mart| Home</title>
			</Helmet>
			<Banner/>
			{/* new product */}
			<p></p>
			<div className="mx-6 pt-6 grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
				{products.map(p=><ProductCard key={p._id} product={p} />)}
			</div>
		</div>
	);
}

export default Home;
