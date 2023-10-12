
const { userCartServices, getUserCartServices, removeUserCartServices, updateAddressService, applyDiscountServices, addToWishlistServices,  } = require('../services/user.services');


// user cart
exports.userCartController= async(req,res,next)=>{
	try {
		const result = await userCartServices(req.body,req.user)
		res.status(200).json({
			status:"success",
			data:result
		})
		
	} catch (error) {
		res.status(400).json({
			status:"fail",
			err:error.message
		})
	}
}
// get user cart controller
exports.getUserCartController=async(req,res,next)=>{
	try {
		const result = await getUserCartServices(req.user);
		res.status(200).json({
			status:"success",
			data:result
		})
	} catch (error) {
		res.status(400).json({
			status:"fail",
			err:error.message
		})	
	}
}
// remove cart from db
exports.removeUserCartController=async(req,res,next)=>{
	try {
		const result = await removeUserCartServices(req.user);
		res.status(200).json({
			status:"success",
		})
		
	} catch (error) {
		res.status(400).json({
			status:"fail",
			err:error.message
		})		
	}
}
// update user services
exports.updateUserAddressController=async(req,res,next)=>{
try {
	const result = await updateAddressService(req.body.address,req.user);
	res.status(200).json({
		status:'success',
		data:result
	})
	
} catch (error) {
	res.status(400).json({
		status:"fail",
		err:error.message
	})	
}
}
// apply coupon to user cart
exports.applyDiscountController = async(req,res,next)=>{
	try {
		const result = await applyDiscountServices(req.body.coupon,req.user)
		res.status(200).json({
			status:'success',
			data:result
		})
	} catch (error) {
		res.status(400).json({
			status:"fail",
			err:error.message
		})		
	}
}
// add to wishlist
exports.addToWishlistController=async(req,res,next)=>{
	try {
		console.log('params',req.params.id)
		const result = await addToWishlistServices(req.params.id,req.user);
		
		res.status(200).json({
			status:'success',
			data:result
		})
	} catch (error) {
		res.status(400).json({
			status:"fail",
			err:error.message
		})		
	}
}