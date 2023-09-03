const { createOrUpdateUserServices, currentUserServices } = require("../services/auth.services")
// create or update user
exports.createOrUpdateUserController=async(req,res,next)=>{
try {
	const result = await createOrUpdateUserServices(req.user)
	console.log(result)
	res.status(200).json({
		status:"success",
		data:result
	})
} catch (error) {
	console.log(error)
	res.status(400).json({
		status:"fail",
		message:error
	})
}

}
// check current user 
exports.currentUserController=async(req,res,next)=>{
	try {
		const result = await currentUserServices(req.user)
		console.log('current user',result)
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