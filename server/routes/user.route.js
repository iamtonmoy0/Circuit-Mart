const express = require('express');
const router  = express.Router();

// controllers
const { userCartController,getUserCartController, removeUserCartController, updateUserAddressController, applyDiscountController, addToWishListController } = require('../controllers/user.controller');

// middleware
const { authCheck } = require('../middlewares/auth.middleware');

router.route('/user/cart')
 .post(authCheck,userCartController)
 .get(authCheck,getUserCartController)
 .delete(authCheck,removeUserCartController)
router.route('/user/address')
 .put(authCheck,updateUserAddressController) 
// coupon apply route 
router.route('/user/cart/coupon')
 .post(authCheck,applyDiscountController)
// withlist
router.route("/wishlist/:id")
 .post(authCheck,addToWishListController)

module.exports=router;