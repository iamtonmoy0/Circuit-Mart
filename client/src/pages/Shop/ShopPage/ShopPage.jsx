import { useState } from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';

const ShopPage = () => {
	const {search} = useSelector(state=>({...state}));
	const [product,setProduct] = useState([]);

	useEffect(()=>{

	},[])
const loadProduct=()=>{

}
	return (
		<>
			<Helmet>
				<title>Circuit-Mart | Shop</title>
			</Helmet>
			{/* layout */}
			<div className='h-screen'>
		
			</div>
		</>
	);
}

export default ShopPage;
