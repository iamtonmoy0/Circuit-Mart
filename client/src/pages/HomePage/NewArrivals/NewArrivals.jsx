import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { getProductBySorting, getProductCount } from "../../../functions/productFunctions"
import ProductCard from "../../Shared/ProductCard/ProductCard"
import Pagination from "../../Shared/Pagination/Pagination"

const NewArrivals = () => {
	const [products,setProducts]=useState([])
	const [productCount,setProductCount]=useState(0);
	const [page,setPage]=useState(1);
	useEffect(()=>{
		loadProduct()
	},[])
	useEffect(()=>{
		loadProductCount()
		
	},[page])
	// load total product
	const loadProductCount = ()=>{
		getProductCount()
		.then(res=>{
			setProductCount(res.data.data)
		})
	}
	const pagination = (number)=>{
		setPage(number)
		toast.loading('Loading!')
		getProductBySorting("createdAt","desc", number)
		.then(res=>{
			toast.dismiss()
			setProducts(res.data.data)
		}).catch(err=>{
			toast.dismiss();
			toast.error(err.message)
		})
	}
	// load product
	const loadProduct=()=>{
		toast.loading('Loading!')
		getProductBySorting("createdAt","desc", page)
		.then(res=>{
			toast.dismiss()
			setProducts(res.data.data)
		}).catch(err=>{
			toast.dismiss();
			toast.error(err.message)
		})
		
	}
	
	return (
		<div className='flex flex-col items-center' >
	<div className="  mx-6 pt-6 grid lg:grid-cols-3 sm:grid-cols-1 lg:gap-4 sm:gap-2">
				{products.map(p=><ProductCard key={p._id} product={p} />)}
	</div>
	<div className="">
	<Pagination current={page} totalPage={Math.ceil(productCount/3)} pagination={pagination} />

	</div>
		</div>
	);
}

export default NewArrivals;
