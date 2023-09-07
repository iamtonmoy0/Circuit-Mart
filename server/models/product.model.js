const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const schema = mongoose.Schema;

const productSchema = new schema({

	title:{
		type:String,
		trim:true,
		required:true,
		maxlength:32,
		text:true,
	},
	slug:{
		type:String,
		required:true,
		unique:true,
		index:true,
	},
	description:{
		type:String,
		required:true,
		text:true,
		maxlength:2000,
		},
		
	price:{
		type:Number,
		required:true,
		trim:true,
		maxlength:32,
		},
	// category:{
	// 	type:ObjectId,
	// 	ref:"Category",
		
	// },
	// subs:[{
	// 	type:ObjectId,
	// 	ref:"Sub Category",

	// }],
	quantity:Number,
	sold:{
		type:Number,
		default:0
	},
	images:{
		type:Array
	},
	shipping:{
		type:String,
		enum:["Yes","No"]
	},
	color:{
		type:String,
		enum:["Black","Brown","Silver","White" ,"Blue","Red","Yellow"]
	},
	brand:{
		type:String,
		enum:["Apple","Samsung","Lenovo","Asus","Dell"," Razer","Acer","Sony"]
	},
	// ratings:[{
	// 	star:Number,
	// 	postBy:{type:ObjectId, ref:'User'}
	// }]

},{timestamps:true})

const productModel = mongoose.model('Product',productSchema);
module.exports=productModel;