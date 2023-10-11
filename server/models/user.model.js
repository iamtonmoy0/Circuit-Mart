const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;
const schema = mongoose.Schema;

const userSchema = new schema({
	name:String,
	picture:{
		type:String,
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
	wishlist:[{type:ObjectId,ref:"Product" }] 	
},{timestamps:true});

const userModel = mongoose.model('User',userSchema);
module.exports=userModel;