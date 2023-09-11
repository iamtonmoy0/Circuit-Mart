import { useEffect, useState } from "react";
import { getAllProducts } from "../../../functions/productFunctions";
import toast from "react-hot-toast";

const AllProducts = () => {
	const[products,setProducts]=useState([]);
	
	
	useEffect(()=>{
loadAllProducts()
	},[])
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
    className="h-[300px] w-full object-cover sm:h-[450px]"
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
		</div>)}
		</div>
	</>
	);
}

export default AllProducts;
