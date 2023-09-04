const { createCategoryServices } = require("../services/category.services")

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
			err:error
		})
	}
}