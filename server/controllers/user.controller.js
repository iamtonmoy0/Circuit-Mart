
const { userCartServices } = require('../services/user.services');


// user cart
exports.userCartController= async(req,res,next)=>{
	try {
		const result = await userCartServices(req.body,req.user)
		
	} catch (error) {
		res.status(400).json({
			status:"fail",
			message: error.message
		})
	}
}