const { createCouponServices, getCouponsServices, deleteCouponServices } = require("../services/coupon.services")

// create coupon
exports.createCouponController=async(req,res,next)=>{
	try {
		const result = await createCouponServices(req.body.coupon);
		res.status(200).json({
			status:"success",
			data:result
		})
		
	} catch (error) {
		res.status(400).json({
			success: "fail",
			err:error.message
		})
	}
}
// get coupons
exports.getCouponsController=async(req,res,next)=>{
	try {
		const result = await getCouponsServices();
		res.status(200).json({
			status:"success",
			data:result
		})
		
	} catch (error) {
		res.status(400).json({
			success: "fail",
			err:error.message
		})
	}
}
// delete coupon c
exports.deleteCouponController=async(req,res,next)=>{
	try {
		const result = await deleteCouponServices(req.params.couponId)
		res.status(200).json({
			status:"success",
			data:result
		})
		
	} catch (error) {
		res.status(400).json({
			success: "fail",
			err:error.message
		})
	}
}