const categoryModel = require('../models/category.model');
const slugify = require('slugify')
// create category services
exports.createCategoryServices=async(data)=>{
	const {name}=data;
	const createCategory = await categoryModel.create({name,slug:slugify(name)});
	return createCategory;
}