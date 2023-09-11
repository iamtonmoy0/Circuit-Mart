// upload data on cloud

const cloudServices = require("../services/cloud.services");
exports.uploadDataController=async(req,res,next)=>{

	try {
	const result = await cloudServices.uploadDataServices(req.body.image)
	res.status(200).json({
		statue:"success",
		message:"Data uploaded successfully",
		public_id:result.public_id,
		url:result.secure_url
	})
} catch (error) {
	res.status(400).json({
		status:"fail",
		message:"Failed to upload to cloud",
		err:error
	})
}
}
exports.removeDataController=async(req,res,next)=>{
	try {
		const result = await cloudServices.removeDataServices(req.body.public_id)
		res.status(200).json({
			statue:"success",
			message:"Data deleted successfully",
			data:result
		})
	} catch (error) {
		res.status(400).json({
			status:"fail",
			message:"Failed to delete data",
			err:error
		})
	}	
}