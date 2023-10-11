import { useSelector } from "react-redux";

const Wishlist = () => {
const {wishlist} = useSelector(state=>({...state}));

	return (
		<div>
			this is wishlist{JSON.stringify(wishlist)}
		</div>
	);
}

export default Wishlist;
