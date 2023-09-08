const categoryServices = require("../services/category.services")

// create new category
exports.createCategoryController=async(req,res,next)=>{
	try {
		const result = await categoryServices.createCategoryServices(req.body);
		res.status(200).json({
			status:"success",
			data:result
		})
	} catch (error) {
		res.status(400).json({
			status:'fail',
			message:'Failed to create new category / category already exist!',
			err:error.message
		})
	}
}
// get latest category
exports.getLatestCategoryController=async(req,res,next)=>{
	try {
		const result = await categoryServices.getLatestCategoryServices();
		res.status(200).json({
			status:"success",
			data:result
		})
		
	} catch (error) {
		res.status(400).json({
			status:'fail',
			message:'Failed to find the categories',
			err:error.message
		})
	}
}
// get category by slug
exports.getCategoryBySlugNameController=async(req,res,next)=>{
	try {
		const category = await categoryServices.getCategoryBySlugNameServices(req.params.slug)
		res.status(200).json({
			status:'success',
			data:category
		})
		
	} catch (error) {
		res.status(400).json({
			status:'fail',
			message:'Failed to find the category',
			err:error.message
		})
	}
};
// update category by slug
exports.updateCategoryBySlugNameController=async(req,res,next)=>{
	try {
		const category = await categoryServices.updateCategoryBySlugNameServices(req.params.slug,req.body)
		res.status(200).json({
			status:'success',
			data:category
		})
		
	} catch (error) {
		res.status(400).json({
			status:'fail',
			message:'Failed to update the category',
			err:error.message
		})
	}
};

// remove category by slug name
exports.removeCategoryBySlugNameController=async(req,res,next)=>{
	try {
		const category = await categoryServices.removeCategoryBySlugNameServices(req.params.slug)
		res.status(200).json({
			status:'success',
			data:category
		})
		
	} catch (error) {
		res.status(400).json({
			status:'fail',
			message:'Failed to remove the category',
			err:error.message
		})
	}
}
// get sub-category by category id
exports.getSubCategoryByCategoryIdController=async(req,res,next)=>{
	try {
		console.log(req.params.id)
		const result = await categoryServices.getSubCategoriesByCategoryIdServices(req.params.id)
		res.status(200).json({
			status:"success",
			data:result
		})
	} catch (error) {
		res.status(400).json({
			status:'fail',
			message:'Failed to get sub category',
			err:error.message
		})
	}
}