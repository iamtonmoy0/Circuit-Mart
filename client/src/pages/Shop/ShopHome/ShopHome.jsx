import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getAllProducts, getProductByFilter } from "../../../functions/productFunctions";
import ProductCard from "../../Shared/ProductCard/ProductCard";
import { useSelector } from "react-redux";


const ShopHome = () => {
	const {search} = useSelector(state=>({...state}));
	const {text} = search;
	const [product,setProduct] = useState([]);
	// const [ok,setOk] = useState();
	// load product
	useEffect(()=>{
		if (text && text.length > 0) {
			// If search text is present, load search products
			setTimeout(()=>{
				loadSearchProduct({ query: text })		
			},2000)
		} else {
			// If search text is empty, load all products
			loadProduct();
		}
	},[text])
	
	// default product load
const loadProduct=()=>{
getAllProducts(9)
.then(res=>{
	setProduct(res.data.data)
}).catch(err=>{
	toast.error(err.message)
})
}

// SEARCH PRODUCT LOAD FUNCTION
const loadSearchProduct=(arg)=>{
	getProductByFilter(arg)
	.then(res=>{
		setProduct(res.data.data)
		if(res.data.data.length>0){
		toast.success(`Total ${res.data.data.length} product found!`,{duration:1000,})
		}
	}).catch(err=>{
		toast.error(err.message)
	})
}
// Load product based on price range
// useEffect(()=>{

// },[ok])


	return (
		<div className="grid lg:grid-cols-3 gap-3 md:grid-cols-2 sm:grid-cols-1">
			{ product && product.length >0 && product.map(p=> <ProductCard  key={p._id} product={p} />
			)}
		</div>
	);
}

export default ShopHome;
