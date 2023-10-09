const { createPaymentServices } = require("../services/order.services")

// cheate payment order
exports.createPaymentController=async(req,res,next)=>{
	try {
		const result = await createPaymentServices(req.body,req.user);
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