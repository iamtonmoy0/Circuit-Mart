import { useEffect, useState } from "react"
import { getCategories } from "../../functions/categoryFunctions"

const CategoryList = () => {
	const [categories,setCategories]=useState([])

 //render load categories
 useEffect(()=>{
    loadCategories()
  },[])
  // load categories
const loadCategories=()=>{
getCategories()
.then((res)=>setCategories(res.data.data))
}
	return (
		<div className="py-3 px-5 bg-[#F3FDE8]">
			<div className="flex cursor-pointer  ">
			{categories && categories.length>0 && categories.map(cat=><p  style={{fontWeight:'80px'}} className="ml-2  hover:bg-green-300 py-1 rounded"  key={cat._id}> {cat.name} </p>)}
			</div>
		</div>
	);
}

export default CategoryList;
