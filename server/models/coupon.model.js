const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;


const schema = mongoose.Schema;

const couponSchema = new schema({
name:{
	type:String,
	required:"Name is required",
	unique:true,
	trim:true,
	uppercase:true,
	minlength:[4,"too short"],
	maxlength:[20,"too long"]

},
expiry:{
	type:Date,
	required:true
},
discount:{
	type:Number,
	required:true
}

},{timestamps:true})

const couponModel = mongoose.model("Coupon",couponSchema);
module.exports=couponModel;