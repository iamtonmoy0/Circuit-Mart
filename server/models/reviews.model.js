const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const schema = mongoose.Schema

const reviewsSchema = new schema({
	userId:{
		type:ObjectId,
		ref:'User',
		required:true
	},
	productId:{
		type:ObjectId,
		ref:'Product',
		required:true,
		index:true
	},
	message:{
		type : String ,
		maxlength:2000
	}
},{timestamps:true})

const reviewModel = mongoose.model('Reviews',reviewsSchema)
module.exports=reviewModel;