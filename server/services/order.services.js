const orderModel = require('../models/order.model');
const stripe = require("stripe")(process.env.SECRET_KEY);

// create payment services
exports.createPaymentServices=async(data,user)=>{
	const paymentIntent = await stripe.paymentIntents.create({
		amount: calculateOrderAmount(items),
		currency: "usd",
		// In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
		automatic_payment_methods: {
		  enabled: true,
		},
	  });
	
	  res.send({
		clientSecret: paymentIntent.client_secret,
	  });

}