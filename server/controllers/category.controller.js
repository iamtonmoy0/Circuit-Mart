const { createCategoryServices, getLatestCategoryServices, getCategoryBySlugNameServices, removeCategoryBySlugNameServices, updateCategoryBySlugNameServices } = require("../services/category.services")

// create new category
exports.createCategoryController=async(req,res,next)=>{
	try {
		const result = await createCategoryServices(req.body);
		res.status(200).json({
			status:"success",
			data:result
		})
	} catch (error) {
		res.status(400).json({
			status:'fail',
			message:'Failed to create new category',
			err:error.message
		})
	}
}
// get latest category
exports.getLatestCategoryController=async(req,res,next)=>{
	try {
		const result = await getLatestCategoryServices();
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
		const category = await getCategoryBySlugNameServices(req.params.slug)
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
		const category = await updateCategoryBySlugNameServices(req.params.slug,req.body)
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
		const category = await removeCategoryBySlugNameServices(req.params.slug)
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