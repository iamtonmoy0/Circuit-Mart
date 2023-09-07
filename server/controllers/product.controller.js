const { createProductServices } = require("../services/product.services")

// create Product
exports.createProductController=async(req,res,next)=>{
	try {
		const result = await createProductServices(req.body)
		res.status(200).json({
			status:'success',
			message: 'Product created successfully!',
			data:result
		})
		
	} catch (error) {
		res.status(400).json({
			status:'fail',
			message:"Failed to create product",
			err:error.message
		})
	}
}
// get product
exports.getProductController=async(req,res,next)=>{
	try {
		
	} catch (error) {
		res.status(400).json({
			status:'fail',
			message:"",
			err:error.message
		})
	}
}
// get all products
exports.getAllProductsController=async(req,res,next)=>{
	try {
		
	} catch (error) {
		res.status(400).json({
			status:'fail',
			message:"",
			err:error.message
		})
	}
}
// update product
exports.updateProductController=async(req,res,next)=>{
	try {
		
	} catch (error) {
		res.status(400).json({
			status:'fail',
			message:"",
			err:error.message
		})
	}
}
// delete product
exports.removeProduct=async(req,res,next)=>{
	try {
		
	} catch (error) {
		res.status(400).json({
			status:'fail',
			message:"",
			err:error.message
		})
	}
}

