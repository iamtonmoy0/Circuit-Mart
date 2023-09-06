const subCategoryModel = require('../models/subCategory.model');
const slugify = require('slugify')

// create sub category services
exports.createSubCategoryServices=async(data)=>{
	console.log(data)
	const {name,parent}=data;
	const createCategory = await subCategoryModel.create({name,parent,slug:slugify(name)});
	return createCategory;
};

// get latest sub category
exports.getLatestSubCategoryServices=async()=>{
	const getLatest = await subCategoryModel.find({}).sort({createdAt:-1});
	return getLatest;
};

// get category by sub slug name
exports.getSubCategoryBySlugNameServices=async(data)=>{
const subCategory = await subCategoryModel.findOne({slug:data}); 
return  subCategory;
};

// update sub category by slug name
exports.updateSubCategoryBySlugNameServices=async(slug,data)=>{
	const {name}= data;
const subCategory = await subCategoryModel.findOneAndUpdate({slug},{name,slug:slugify(name)},{new:true} ); 
return  subCategory;
};

// remove sub category by slug name
exports.removeSubCategoryBySlugNameServices=async(data)=>{
const subCategory = await subCategoryModel.findOneAndRemove({slug:data}); 
return  subCategory;
};