const categoryModel = require('../models/category.model');
const subCategoryModel = require('../models/subCategory.model');
const slugify = require('slugify')
// create category services
exports.createCategoryServices=async(data)=>{
	const {name}=data;
	const createCategory = await categoryModel.create({name,slug:slugify(name)});
	return createCategory;
};
// get latest category
exports.getLatestCategoryServices=async()=>{
	const getLatest = await categoryModel.find({}).sort({createdAt:-1});
	return getLatest;
}

// get category by slug name
exports.getCategoryBySlugNameServices=async(data)=>{
const category = await categoryModel.findOne({slug:data}); 
return  category;
}
// update category by slug name
exports.updateCategoryBySlugNameServices=async(slug,data)=>{
	const {name}= data;
const category = await categoryModel.findOneAndUpdate({slug},{name,slug:slugify(name)},{new:true} ); 
return  category;
}

// remove category by slug name
exports.removeCategoryBySlugNameServices=async(data)=>{
const category = await categoryModel.findOneAndRemove({slug:data}); 
return  category;
}
// get sub category by category id
exports.getSubCategoriesByCategoryIdServices=async(id)=>{
	return await subCategoryModel.find({parent:id});
};