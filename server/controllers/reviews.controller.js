const reviewServices = require("../services/reviews.services");

// create reviews
exports.createReviewController = async(req,res,next)=>{
	try {
		const result = await reviewServices.createReviewServices(req.body);
		res.status(200).json({
			status:'success',
			data:result
		})
	} catch (error) {
		res.status(400).json({
			status:'fail',
			message:'failed to create review',
			err:error
		})
	}
}
// get reviews by product id

exports.getReviewsByProductIdController=async(req,res,next)=>{
	try {
		const result = await reviewServices.getReviewsByProductIdService(req.params.id)
		res.status(200).json({
			status:'success',
			data:result
		})
	} catch (error) {
		res.status(400).json({
			status:'fail',
			message:'failed to get review',
			err:error
		})
	}
}