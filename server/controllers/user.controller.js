
const { userCartServices, getUserCartServices, removeUserCartServices,  } = require('../services/user.services');


// user cart
exports.userCartController= async(req,res,next)=>{
	try {
		const result = await userCartServices(req.body,req.user)
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
// get user cart controller
exports.getUserCartController=async(req,res,next)=>{
	try {
		const result = await getUserCartServices(req.user);
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
// remove cart from db
exports.removeUserCartController=async(req,res,next)=>{
	try {
		const result = await removeUserCartServices(req.user);
		res.status(200).json({
			status:"success",
		})
		
	} catch (error) {
		res.status(400).json({
			status:"fail",
			err:error.message
		})		
	}
}