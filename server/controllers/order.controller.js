const { createPaymentServices, savePaymentServices, getOrderByIdServices, getAllOrderServices, deleteOrderByIdServices } = require("../services/order.services")

// cheate payment order
exports.createPaymentController=async(req,res,next)=>{
	try {
		const result = await createPaymentServices(req.body.price);
		res.status(200).json({
			status:'success',
			data:result
		})
	} catch (error) {
		res.status(400).json({
			status:"fail",
			err:error.message
		})
	}
}
// save cart
exports.savePaymentController=async(req,res,next)=>{
	try {
		const result = await savePaymentServices(req.body.data,req.user);
		res.status(200).json({
			status:'success',
			data:result
		})
	} catch (error) {
		res.status(400).json({
			status:"fail",
			err:error.message
		})
	}
}
// get order by user id
exports.getOrderByIdController=async(req,res,next)=>{
	try {
		const result = await getOrderByIdServices(req.params.id)
		res.status(200).json({
			status:"success",
			data:result
		})
	} catch (error) {
		res.status(400).json({
			status:"fail",
			err:error.message
		})
	}
}
// get all orders
exports.getAllOrderController=async(req,res,next)=>{
	try {
		const result = await getAllOrderServices()
		res.status(200).json({
			status:"success",
			data:result
		})
	} catch (error) {
		res.status(400).json({
			status:"fail",
			err:error.message
		})
	}
}
// delete order
exports.deleteOrderByIdController=async(req, res,next)=> {
try {
	const result = await deleteOrderByIdServices(req.params.id,req.user)
		res.status(200).json({
			status:"success",
			data:result
		})
} catch (error) {
	res.status(400).json({
		status:"fail",
		err:error.message
	})	
}
}