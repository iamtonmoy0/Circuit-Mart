const { createOrUpdateUserServices } = require("../services/auth.services")
const userModel =require('../models/user.model')
exports.createOrUpdateUserController=async(req,res,next)=>{
try {
	const result = await createOrUpdateUserServices(req.user)
	res.status(200).json({
		status:"success",
		data:result
	})
} catch (error) {
	res.status(400).json({
		status:"fail",
		message:error
	})
}

}