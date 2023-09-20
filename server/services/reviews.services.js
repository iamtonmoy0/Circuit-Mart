const reviewModel = require('../models/reviews.model')

exports.createReviewServices=async(data)=>{
return await reviewModel.create(data)	
}