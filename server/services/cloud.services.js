const cloudinary  = require("../utils/cloud.config")

// upload data services
exports.uploadDataServices=async(image)=>{
	console.log(image)
	return await cloudinary.uploader.upload(image,{
		public_id:`${Date.now()}`,
		resource_type:"auto"
	})
}
// remove data services
exports.removeDataServices=async(image_id)=>{
	return await cloudinary.uploader.destroy(image_id)
}