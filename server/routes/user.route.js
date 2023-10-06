const express = require('express');
const router  = express.Router();

// controllers
const { userCartController,getUserCartController, removeUserCartController, updateUserAddressController, applyDiscountController } = require('../controllers/user.controller');

// middleware
const { authCheck } = require('../middlewares/auth.middleware');
const { updateAddressService } = require('../services/user.services');

router.route('/user/cart')
 .post(authCheck,userCartController)
 .get(authCheck,getUserCartController)
 .delete(authCheck,removeUserCartController)
router.route('/user/address')
 .put(authCheck,updateUserAddressController) 
// coupon apply route 
router.route('/user/cart/coupon')
.post(authCheck,applyDiscountController)
module.exports=router;