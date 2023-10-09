
import {CardElement,  useElements, useStripe} from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { createPayment, savePayment } from '../../functions/orderFunctions';
import toast from 'react-hot-toast';


const PaymentCard = ({user,price,cart}) => {
	const stripe = useStripe();
const elements = useElements();
const [processing, setProcessing] = useState(false);
const [clientSecret, setClientSecret] = useState("");

useEffect(()=>{
  if(price>0){
createPayment(price,user.token)
.then(res=>{
  setClientSecret(res.data.data)
}).catch(err=>{
  toast.error(err.message)
})
  }
},[price])

const handleSubmit=async(e)=>{
	e.preventDefault()
if (!stripe || !elements) {
	// Stripe.js has not loaded yet. Make sure to disable
	// form submission until Stripe.js has loaded.
	return;
  }
  const card = elements.getElement(CardElement);

  if (card == null) {
	return;
  }
  // Use your card Element with other Stripe.js APIs
  const {error, paymentMethod} = await stripe.createPaymentMethod({
	type: 'card',
	card,
  });

  if (error) {
	console.log('[error]', error);
  } else {
	console.log('[PaymentMethod]', paymentMethod);
  }
  setProcessing(true)
  const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
    clientSecret,
    {
        payment_method: {
            card: card,
            billing_details: {
                email: user?.email ,
                name: user?.name 
            },
        },
    },
);

if (confirmError) {
    toast.error(confirmError);
}
console.log(paymentIntent) //console log payment intend
setProcessing(false)
if(paymentIntent.status === 'succeeded'){
const data = {
  products:cart,
  totalPrice:price,
  paymentId:paymentIntent.id
};
savePayment(data,user.token)
.then(res=>{
  console.log(res)
})
}


};
	return (
		<div className='pl-[400px]'>

		
		<form className='w-7/12 ' onSubmit={handleSubmit}>
      <CardElement
	className='my-3 bg-gray-200 py-5 px-320'
        options={{
          style: {
            base: {
              fontSize: '18px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn bg-blue-500 self-center px-20 py-3 rounded  text-md font-semibold text-white ml-28 mt-6' type="submit" 
      disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>
	</div>
	);
}

export default PaymentCard;
