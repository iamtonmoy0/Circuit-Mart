const mongoose  = require('mongoose');
const {ObjectId}= mongoose.Schema;

const schema = mongoose.Schema;

const orderSchema = new schema({
	user:{
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
		enum:['processing',"accepted",'delivered','canceled'],
		default:"processing"
	},
	paymentId:{
		type:String,
		required:true
	}
},{timeseries:true})

const orderModel = mongoose.model("Order",orderSchema);
module.exports=orderModel;