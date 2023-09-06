const subCategoryServices  = require("../services/subCategory.services")

// create new sub category
exports.createSubCategoryController=async(req,res,next)=>{
	try {
		const result = await subCategoryServices.createSubCategoryServices(req.body);
		res.status(200).json({
			status:"success",
			data:result
		})
	} catch (error) {
		res.status(400).json({
			status:'fail',
			message:'Failed to create new sub category / sub category already exist!',
			err:error.message
		})
	}
}
// get latest sub category
exports.getLatestSubCategoryController=async(req,res,next)=>{
	try {
		const result = await subCategoryServices.getLatestSubCategoryServices();
		res.status(200).json({
			status:"success",
			data:result
		})
		
	} catch (error) {
		res.status(400).json({
			status:'fail',
			message:'Failed to find the sub  categories',
			err:error.message
		})
	}
}
// get  sub category by slug
exports.getSubCategoryBySlugNameController=async(req,res,next)=>{
	try {
		const category = await subCategoryServices.getSubCategoryBySlugNameServices(req.params.slug)
		res.status(200).json({
			status:'success',
			data:category
		})
		
	} catch (error) {
		res.status(400).json({
			status:'fail',
			message:'Failed to find the sub  category',
			err:error.message
		})
	}
};
// update sub category by slug
exports.updateSubCategoryBySlugNameController=async(req,res,next)=>{
	try {
		const category = await subCategoryServices.updateSubCategoryBySlugNameServices(req.params.slug,req.body)
		res.status(200).json({
			status:'success',
			data:category
		})
		
	} catch (error) {
		res.status(400).json({
			status:'fail',
			message:'Failed to update the sub category',
			err:error.message
		})
	}
};

// remove sub category by slug name
exports.removeSubCategoryBySlugNameController=async(req,res,next)=>{
	try {
		const category = await subCategoryServices.removeSubCategoryBySlugNameServices(req.params.slug)
		res.status(200).json({
			status:'success',
			data:category
		})
		
	} catch (error) {
		res.status(400).json({
			status:'fail',
			message:'Failed to remove the sub category',
			err:error.message
		})
	}
}