const mongoose = require('mongoose');
// const {ObjectId} = mongoose.schema;
const schema = mongoose.Schema;

const userSchema = new schema({
	name:String,
	picture:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true,
		unique:true,
		index:true 
	},
	role:{
		type:String,
		required:true,
		default:'subscriber',
	},
	cart:{
		type:Array,
		default:[]
		},
	address:String,
	// wishlist:[{type:ObjectId,ref:"Product" }] //todo:need to comment out after wishlist is created!	
},{timestamps:true});

const userModel = mongoose.model('User',userSchema);
module.exports=userModel;