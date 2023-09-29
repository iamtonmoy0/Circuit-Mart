import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getAllProducts, getProductByFilter } from "../../../functions/productFunctions";
import ProductCard from "../../Shared/ProductCard/ProductCard";
import { useSelector } from "react-redux";


const ShopHome = ({price,ok,product,setProduct}) => {
	const {search} = useSelector(state=>({...state}));
	const {text} = search;
	// load product
	useEffect(()=>{
		if (text && text.length > 0) {
			// If search text is present, load search products
			setTimeout(()=>{
				loadSearchProduct({ query: text })		
			},2000)
		} else if(price[1] !== 0 && ok  && text.length==0) {
			// If search text is empty, load all products
			loadSearchProduct({price })		
		}else if(!ok){
		loadProduct();
		}
	},[text,price,ok])
	
// SEARCH PRODUCT LOAD FUNCTION
const loadSearchProduct=(arg)=>{
	getProductByFilter(arg)
	.then(res=>{
		setProduct(res.data.data)
		// if(res.data.data.length>0){
		// toast.success(`Total ${res.data.data.length} product found!`,{duration:1000,})
		// }
	}).catch(err=>{
		toast.error(err.message)
	})
}

	// default product load
	const loadProduct=()=>{
		getAllProducts(9)
		.then(res=>{
			setProduct(res.data.data)
		}).catch(err=>{
			toast.error(err.message)
		})
		}


	return (
		<>
		<p className="text-3xl text-center   text-[tomato] font-semibold " > {product && product.length >0 ? `Total ${product.length} Found!` : 'No Product Found'} </p>
		<hr />
		<div className="grid lg:grid-cols-3 gap-3 md:grid-cols-2 sm:grid-cols-1 pt-4">
			{ product && product.length >0 && product.map(p=> <ProductCard  key={p._id} product={p} />
			)}
		</div>
			</>
	);
}

export default ShopHome;
