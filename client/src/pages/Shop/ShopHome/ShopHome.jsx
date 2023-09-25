import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getAllProducts } from "../../../functions/productFunctions";
import ProductCard from "../../Shared/ProductCard/ProductCard";


const ShopHome = () => {
	const [product,setProduct] = useState([]);

	useEffect(()=>{
		loadProduct()
	},[])
const loadProduct=()=>{
toast.loading('loading')
getAllProducts()
.then(res=>{
	toast.dismiss()
	setProduct(res.data.data)
}).catch(err=>{
	toast.dismiss();
	toast.error(err.message)
})
}
	return (
		<div className="grid lg:grid-cols-3 gap-3 md:grid-cols-2 sm:grid-cols-1">
			{ product && product.length >0 && product.map(p=> <ProductCard  key={product._id} product={p} />
			)}
		</div>
	);
}

export default ShopHome;
