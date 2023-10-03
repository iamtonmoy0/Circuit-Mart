const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const schema = mongoose.Schema;

const cartSchema = new schema({
	products:[
		{
			product:{
				type:ObjectId,
				ref:'Product'
			},
			count:Number,
			price:Number,
			price:Number
		}
	],
	totalPrice : Number ,
	discountPrice:Number,
	orderedBy:{
		type:ObjectId,
		ref:"User"
	}
},{timestamps:true})

const cartModel = mongoose.model("Cart",cartSchema);
module.exports=cartModel;