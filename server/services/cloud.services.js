const cloudinary = require('cloudinary');

// config
cloudinary.config({
	cloud_name:process.env.CLOUD_NAME,
	api_key:process.env.CLOUD_API_KEY,
	api_secret:process.env.CLOUD_API_SECRET,
})

exports.uploadDataServices=async(data)=>{
	return await cloudinary.uploader.upload(data,{
		public_id:`${Date.now()}`,
		resource_type:"auto"
	})
}
exports.removeDataServices=async(image_id)=>{
	return await cloudinary.uploader.destroy(image_id)
}