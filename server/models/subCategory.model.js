const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const schema = mongoose.Schema;

const subCategorySchema = new schema({
	name:{
		type:String,
		trim:true,
		required:true,
		minlength:[2,'Too short'],
		maxlength:[32,'Too long'],
	},
	slug:{
		type:String,
		unique:true,
		lowercase:true,
		index:true,
	},
	parent:{type:ObjectId,ref:"Category",required:true},
	
},{timestamps:true})


const subCategoryModel = mongoose.model('Sub Category',subCategorySchema);

module.exports=subCategoryModel;