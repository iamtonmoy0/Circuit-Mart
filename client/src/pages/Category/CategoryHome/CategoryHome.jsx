import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCategory } from '../../../functions/categoryFunctions';
import toast from 'react-hot-toast';
import { getProductByCategoryId } from '../../../functions/productFunctions';
import ProductCard from '../../Shared/ProductCard/ProductCard';

const CategoryHome = () => {
	const [category,setCategory] = useState({});
	const [product,setProduct] = useState([]);
	const {slug} = useParams()
	useEffect(()=>{
		loadCategory()
		
	},[])
	// load current category by slug 
	const loadCategory =()=>{
		toast.loading('Loading! Please wait')
		getCategory(slug)
		.then(res=>{
			setCategory(res.data.data)
		getProductByCategoryId(res.data.data._id)
		.then(res=>{
			setProduct(res.data.data)
		}).catch(err=>{
			console.log(err)
		})
		toast.dismiss();
		}).catch(err=>{
			toast.dismiss();
			toast.error(err.message)
		})
	}
	
	
	return (
		<>
		<p className='text-center text-4xl pt-2 pb-2 bg-gray-400'>Total {product.length} Available Now!</p>
		<div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-3'>
			{
				product && product.length>0 && product.map(p=><ProductCard key={p._id} product={p} />)
			}
		</div>
		</>
	);
}

export default CategoryHome;
