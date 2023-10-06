const userModel = require('../models/user.model');
const cartModel = require('../models/cart.model');
const productModel = require('../models/product.model');
const couponModel = require('../models/coupon.model');
const { model } = require('mongoose');

// user cart
exports.userCartServices = async (cartItem, user) => {
    const {cart} = cartItem;
    let products = [];
    const currentUser = await userModel.findOne({ email: user.email });

    if (!currentUser) {
        console.log("User not found");
        return; // Handle the case where the user is not found
    }
	// delete if previous cart exist of this user
	await cartModel.findOneAndDelete({orderedBy:currentUser._id});

    for (let i = 0; i < cart.length; i++) {
        try {
            let object = {};
            object.product = cart[i]._id;
            object.count = cart[i].count;

            // get the correct price from the database
            const product = await productModel.findById(cart[i]._id).select('price');
            if (!product) {
                console.log("Product not found:", cart[i]._id);
                continue; // Skip this product and continue with the next one
            }

            object.price = product.price;
            products.push(object);
			console.log("this is products",products)
			console.log("this is object",object)
        } catch (error) {
            console.error("Error fetching product:", error);
            // Handle the error, e.g., log it, return an error response, etc.
        }
    }

    let cartTotal = 0;
    for (let i = 0; i < products.length; i++) {
        cartTotal = cartTotal + products[i].price * products[i].count;
    }


    return await new cartModel({
        products,
        totalPrice: cartTotal,
        orderedBy: currentUser._id
    }).save();
};
// get user cart data
exports.getUserCartServices = async (user) => {
        const currentUser = await userModel.findOne({ email: user.email });
        console.log("User:", currentUser);

        if (!currentUser) {
            console.log("User not found");
            return;
        }
		const cartData = await cartModel.findOne({orderedBy:currentUser._id}).populate("products.product","_id title price")
		return cartData;		
};

//remove user cart services
exports.removeUserCartServices=async(user)=>{
	const currentUser = await userModel.findOne({ email: user.email });
	if(!currentUser){
		console.log("User Not Found")
		return
	}
	return await cartModel.findOneAndDelete({orderedBy:currentUser._id});
	
}
// add user address
exports.updateAddressService=async(data,user)=>{
// console.log("data",data)
	return await userModel.findOneAndUpdate({email:user.email},{address:data},{new:true});
}
// apply discount
exports.applyDiscountServices= async(coupon,user)=>{
    const isValid = await couponModel.findOne({name:coupon})
    if(!isValid) return
    const currentUser = await userModel.findOne({email:user.email});
    const {products,totalPrice}=await  cartModel.findOne({orderedBy:currentUser._id}).populate("products.product","_id title price")
// total after discount 
const totalAfterDiscount = (totalPrice - (totalPrice * isValid.discount)/100).toFixed(2)
return await cartModel.findOneAndUpdate({orderedBy:currentUser._id} ,{discountPrice:totalAfterDiscount},{new:true})

}