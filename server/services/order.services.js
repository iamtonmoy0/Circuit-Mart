const orderModel = require('../models/order.model');
const userModel = require('../models/user.model')
const stripe = require("stripe")(process.env.SECRET_KEY);

// create payment services
exports.createPaymentServices=async(price)=>{
console.log(price)
const totalAmount = (price*100).toFixed(2)
	const paymentIntent = await stripe.paymentIntents.create({
		amount: parseInt(totalAmount),
        currency: 'usd',
        payment_method_types: ['card']
		
	  });
	 const clientSecret= paymentIntent.client_secret
	  
	return clientSecret
	  

}
// save payment
exports.savePaymentServices=async(data,user)=>{

	console.log(data)
	return await orderModel.create(data)
}
// get order by user id 
exports.getOrderByIdServices=async(id)=>{
return await orderModel.find({orderedBy:id})
}
// get all orders 
exports.getAllOrderServices=async()=>{
	return await orderModel.find({})
	}

// delete order services
exports.deleteOrderByIdServices=async(id,user)=>{
const order = await orderModel.findById(id);
if(!order){
	return
}
const currentUser = userModel.find({email:user.email})
if(currentUser._id === order.orderedBy){
	return orderModel.findByIdAndDelete(order._id)
}
return []
}