const express = require('express');
const router  = express.Router();

// controllers
const { userCartController,getUserCartController, removeUserCartController, updateUserAddressController } = require('../controllers/user.controller');

// middleware
const { authCheck } = require('../middlewares/auth.middleware');
const { updateAddressService } = require('../services/user.services');

router.route('/user/cart')
 .post(authCheck,userCartController)
 .get(authCheck,getUserCartController)
 .delete(authCheck,removeUserCartController)
router.route('/user/address')
 .put(authCheck,updateUserAddressController) 
module.exports=router;