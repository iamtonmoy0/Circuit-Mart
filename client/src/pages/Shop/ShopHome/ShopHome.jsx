import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getAllProducts, getProductByFilter } from "../../../functions/productFunctions";
import ProductCard from "../../Shared/ProductCard/ProductCard";
import { useSelector } from "react-redux";


const ShopHome = () => {
	const {search} = useSelector(state=>({...state}));
	const {text} = search;
	const [product,setProduct] = useState([]);

	useEffect(()=>{
		loadProduct()
	},[])
	// default product load
const loadProduct=()=>{
toast.loading('loading')
getAllProducts(9)
.then(res=>{
	toast.dismiss()
	setProduct(res.data.data)
}).catch(err=>{
	toast.dismiss();
	toast.error(err.message)
})
}
useEffect(()=>{
	getProductByFilter(text)
	.then(res=>{
		setProduct(res.data.data)
	})
},[text])


	return (
		<div className="grid lg:grid-cols-3 gap-3 md:grid-cols-2 sm:grid-cols-1">
			{ product && product.length >0 && product.map(p=> <ProductCard  key={product._id} product={p} />
			)}
		</div>
	);
}

export default ShopHome;
