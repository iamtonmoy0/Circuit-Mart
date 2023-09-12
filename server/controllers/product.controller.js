const { createProductServices, getProductByQueryServices, deleteProductByIdServices, getProductBySlugServices } = require("../services/product.services")

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
exports.getProductByQueryController=async(req,res,next)=>{
	try {
		const result=await getProductByQueryServices(req.params.count)
		res.status(200).json({
			status:"success",
			data:result
		})
	} catch (error) {
		res.status(400).json({
			status:'fail',
			message:"Fail to get products",
			err:error.message
		})
	}
}
// get all products
exports.getProductBySlugController=async(req,res,next)=>{
	try {
		const result = await getProductBySlugServices(req.params.slug)
		res.status(200).json({
			status:'success',
			data:result
		})
		
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
		const result = await deleteProductByIdServices(req.params.id) 
		res.status(200).json({
			status : "Success",
			message:"Product deleted successful",
			data:result
		})
	} catch (error) {
		res.status(400).json({
			status:'fail',
			message:"",
			err:error.message
		})
	}
}

