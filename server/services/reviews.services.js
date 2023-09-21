const reviewModel = require('../models/reviews.model')
// create review
exports.createReviewServices=async(data)=>{
return await reviewModel.create(data)	
}

// get review by product Id
exports.getReviewsByProductIdService=async(id)=> {
	return await reviewModel.find({productId:id}).populate('userId').sort({createdAt:-1})
}