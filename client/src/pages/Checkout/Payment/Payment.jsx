

import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentCard from '../../../components/PaymentCard/PaymentCard';
import {Helmet} from 'react-helmet-async'
import {useSelector} from 'react-redux';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE);

const Payment = () => {
const {cart,user,totalPrice} = useSelector(state=>({...state}));
// console.log(cart)

	return (
		<>
		<Helmet>
		<title>Circuit-Mart | Payment</title>
		</Helmet>
		<div className='px-10  items-center'>
		<p className='text-4xl text-center font-semibold pt-6'>Payment</p>
		<Elements  stripe={stripePromise}>
			<PaymentCard price={totalPrice}  user={user} cart={cart} />
		</Elements>
 
		</div>
		</>
	);
}

export default Payment;
