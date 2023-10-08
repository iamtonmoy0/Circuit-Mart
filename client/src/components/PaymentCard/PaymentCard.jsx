
import {CardElement,  useElements, useStripe} from '@stripe/react-stripe-js';


const PaymentCard = () => {
	const stripe = useStripe();
const elements = useElements();

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
      <button className='btn bg-blue-500 self-center px-20 py-3 rounded  text-md font-semibold text-white ml-28 mt-6' type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
	</div>
	);
}

export default PaymentCard;
