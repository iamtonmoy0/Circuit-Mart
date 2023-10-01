import { AiOutlineEye } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import * as routePath from '../../../routes/routePath';
import StarRating from "../StarRating/StarRating";
import { useState } from "react";
import { Tooltip } from "antd";

const ProductCard = ({product}) => {
  const [tooltip,setTooltip] = useState('Click to add to cart')
	// console.log(product)
	const{title,price,images,description,slug,ratings,_id} = product;


// handle cart
const handleAddToCart = ()=>{
  // Check if the product is already in the cart
  let cart = [];
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
    }
    // Check if the product is already in the cart by comparing product IDs
    const existingProduct = cart.find((item) => item._id === product._id);
    if (existingProduct) {
      // If the product exists in the cart, you can update its quantity or take other actions
      // For example, you can increment the quantity of the existing product
      existingProduct.count += 1;
    } else {
      // If the product is not in the cart, add it
      cart.push({ ...product, count: 1 });
    }

    // Save the updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
    setTooltip("Added to cart!")
  }
}
	return (
		
<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="p-8 h-[300px] rounded-t-lg" src={images} alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <div className=" flex justify-between">
        <a >
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="text-xl font-medium">$ {price}</p>
        </div>
        <div className="flex items-center mt-2.5 mb-5">
            {/* ratings */}
				{product && ratings && ratings.length > 0 ? <StarRating product={product} /> : "No ratings yet"}
			
            </div>
        <div className="flex items-center justify-between">
            <span className="text-md truncate  text-gray-800 dark:text-white">{description}</span>
           
        </div>
		<div className="flex justify-between">
  <Link to={`${routePath.VIEW_PRODUCT}/${slug}`} className="cursor-pointer text-center text-sm text-blue-400 dark:text-gray-200">
    <div className="flex flex-col items-center">
      <AiOutlineEye className="text-2xl" />
      <p>View Details</p>
    </div>
  </Link>
  <div className="border border-spacing-0 border-gray-200"></div>
  <button
    className="text-center cursor-pointer text-sm text-green-700 dark:text-gray-200"
  
  >
    <Tooltip title={tooltip}>

    <div onClick={handleAddToCart} className="flex flex-col items-center">
      <BsFillCartPlusFill className="text-2xl" />
      <a>Add to cart</a>
    </div>
    </Tooltip>
  </button>
</div>


    </div>
</div>

	);
}

export default ProductCard;
