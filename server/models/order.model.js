const mongoose  = require('mongoose');
const {ObjectId}= mongoose.Schema;

const schema = mongoose.Schema;

const orderSchema = new schema({
	orderedBy:{
		type:ObjectId,
		ref:"User",
		required:true
	},
	products:{
		type:Array,
		required:true
	},
	totalPrice:Number,
	status:{
		type:String,
		enum:['processing',"accepted",'delivered','cancelled'],
		default:"processing"
	},
	paymentId:{
		type:String,
		required:true
	}
},{timestamps:true})

const orderModel = mongoose.model("Order",orderSchema);
module.exports=orderModel;