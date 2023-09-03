const { createCategoryServices } = require("../services/category.services")

// create new category
exports.createCategoryController=async(req,res,next)=>{
	try {
		const result = await createCategoryServices(req.body)
	} catch (error) {
		res.status(400).json({
			status:'fail',
			err:error
		})
	}
}