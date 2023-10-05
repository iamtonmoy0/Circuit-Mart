const couponModel = require('../models/coupon.model')
// create coupon
exports.createCouponServices=async(data)=>{
	console.log(data)
	return await couponModel.create(data)
	
}
// get coupons
exports.getCouponsServices=async(id)=>{
return await couponModel.find({}).sort({createdAt:-1})
}
// delete coupons
exports.deleteCouponServices=async(id)=>{
	return await couponModel.findByIdAndRemove(id);

}