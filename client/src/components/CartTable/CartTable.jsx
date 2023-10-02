import ModalImage from 'react-modal-image';
import { Link } from 'react-router-dom';
import * as routePath from '../../routes/routePath';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { MdRemove, MdRemoveShoppingCart } from 'react-icons/md';

const CartTable = ({ p }) => {
  const { title, images, brand, price, color, count, shipping, slug ,_id,quantity} = p;
const dispatch = useDispatch()
	// handle count change
	const handleCountChange = (e) => {
    const newCount = parseInt(e.target.value, 10);
    const maxCount = quantity; // Available quantity
  
    // Ensure the new count is within the available quantity range
    const countValue = Math.min(Math.max(newCount, 1), maxCount);
  
    if (newCount !== countValue) {
      // Display a toast message indicating that the count has been limited
      toast.warning(`Quantity limited to ${countValue}`);
    }
  
    let updatedCart = [];
    
    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        updatedCart = JSON.parse(localStorage.getItem("cart"));
      }
  
      // Update the count for the product in the cart
      updatedCart = updatedCart.map((product) => {
        if (product._id === _id) {
          return { ...product, count: countValue };
        }
        return product;
      });
  
      localStorage.setItem("cart", JSON.stringify(updatedCart));
  
      dispatch({
        type: "ADD_TO_CART",
        payload: updatedCart,
      });
    }
  };
  
		// handle delete product
    const handleRemove = () => {
      let cart = [];
  
      if (typeof window !== "undefined") {
        if (localStorage.getItem("cart")) {
          cart = JSON.parse(localStorage.getItem("cart"));
        }
        cart.map((product, i) => {
          if (product._id === _id) {
            cart.splice(i, 1);
          }
        });
  
        localStorage.setItem("cart", JSON.stringify(cart));
        dispatch({
          type: "ADD_TO_CART",
          payload: cart,
        });
      }
    };
	
  return (
    <tbody className="w-full">
      <tr>
        <td className="p-2" style={{ width: '100px' }}>
          <div className="flex items-center justify-center" style={{ height: '100px' }}>
            <ModalImage small={images[0]} large={images[0]} alt="Product" />
          </div>
        </td>
        <td className="p-2 text-blue-400">
          <Link to={`${routePath.VIEW_PRODUCT}/${slug}`}>{title}</Link>
        </td>
        <td className="p-2">${price.toFixed(2)}</td>
        <td className="p-2">{brand}</td>
        <td className="p-2">{color}</td>
        <td className="p-2">
          <input type="number" value={count} onChange={handleCountChange} className='form-contro w-12 text-center bg-gray-200 outline-none border border-b-green-600'  />
          
          </td>
        <td className="p-2">{shipping}</td>
        <td className="p-2">
          <button className="bg-red-500 text-white px-2 py-1 rounded-md" onClick={handleRemove}><MdRemoveShoppingCart/></button>
        </td>
      </tr>
    </tbody>
  );
};

export default CartTable;
