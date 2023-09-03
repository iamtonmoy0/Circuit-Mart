const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const schema = mongoose.Schema;

const categorySchema = new schema({
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
	
},{timestamps:true})


const categoryModel = mongoose.model('Category',categorySchema);

module.exports=categoryModel;