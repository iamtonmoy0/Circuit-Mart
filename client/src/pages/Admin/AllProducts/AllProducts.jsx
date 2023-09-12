import { useEffect, useState } from "react";
import { deleteProduct, getAllProducts } from "../../../functions/productFunctions";
import toast from "react-hot-toast";
import {AiOutlineDelete,AiOutlineEdit} from 'react-icons/ai';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const AllProducts = () => {
	const[products,setProducts]=useState([]);
  const {user}= useSelector(state=>({...state}));
	
	
	useEffect(()=>{
loadAllProducts()
	},[])
	// load prouduct
	const loadAllProducts=()=>{
		toast.loading('loading!')
		getAllProducts(10000)
		.then(res=>{
			toast.dismiss();
			setProducts(res.data.data)
		}).catch(err=>{
			toast.error(err.message)
		})
	}
	// delete product
	const handleDeleteProduct=(id)=>{
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this category !",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
			if (result.isConfirmed) {
			// remove category
			deleteProduct(id,user?.token)
			.then((res)=>{
			loadAllProducts();
			Swal.fire(
				`${res.data.data.title} Deleted!`,
				'Your Product has been deleted.',
				'success'
			);
			})
		}
		})
	}
	return (<>

	<p className="text-2xl font-bold text-center pt-10">All Products</p>
		<hr />
{/* product card */}
<div className='mx-10 pt-10 grid grid-cols-3 gap-3'>
{products && products.map(p=> <div
key={p._id}>
<a  className="group block">
  <img
    src={p.images}
    className="h-[300px] w-full object-cover sm:h-[300px]"
  />

  <div className="mt-3 flex justify-between text-sm">
    <div>
      <h3
        className="text-gray-900 group-hover:underline group-hover:underline-offset-4"
      >
        {p.title}
      </h3>

      <p className="mt-1.5 max-w-[45ch] text-xs text-gray-500">
	{p.description}
    </p>
    </div>

    <p className="text-gray-900">${p.price}</p>
  </div>
</a>
{/* delete and update */}
<div className="flex justify-between">
		<Link  className="cursor-pointer px-6 py-4 text-right text-sm text-orange-400 dark:text-gray-200">
			<AiOutlineEdit className="text-2xl" />
		</Link>
		<button className="cursor-pointer px-6 py-4 text-sm text-red-800 dark:text-gray-200" onClick={()=>handleDeleteProduct(p._id)}>
			<AiOutlineDelete className="text-2xl" />
		</button>

</div>
		</div>)}
		</div>
	</>
	);
}

export default AllProducts;
