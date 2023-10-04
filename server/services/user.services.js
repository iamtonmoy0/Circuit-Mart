const userModel = require('../models/user.model');
const cartModel = require('../models/cart.model');
const productModel = require('../models/product.model');

// user cart
exports.userCartServices=async(cart,user)=>{
	const products=[];
	const currentUser = await userModel.findOne({email:user.email})
	// if previous cart exist by this user will be removed
	const existCartByUser = await cartModel.findOne({orderedBy:currentUser._id})
	if(existCartByUser){
		existCartByUser.remove();
		
	}
	for(let i = 0;i <cart.length;i++){
		let object = {}
		object.product = cart[i]._id;
		object.count = cart[i].count;
		// get the correct price form db
		const {price}= await productModel.findById(cart[i]._id).select('price');
		object.price = price
		products.push(object);
	}
	let cartTotal= 0;
	for(let i = 0;i <products.length;i++){
		cartTotal = cartTotal + products[i].price * products[i].count;
	}

return await cartModel.create({
	products,
	totalPrice:cartTotal,
	orderedBy:currentUser._id
})	

}
