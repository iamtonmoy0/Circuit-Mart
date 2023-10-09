const { createPaymentServices, savePaymentServices } = require("../services/order.services")

// cheate payment order
exports.createPaymentController=async(req,res,next)=>{
	try {
		const result = await createPaymentServices(req.body.price,req.user);
		res.status(200).json({
			status:'success',
			data:result
		})
	} catch (error) {
		res.status(200).json({
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
		res.status(200).json({
			status:"fail",
			err:error.message
		})
	}
}