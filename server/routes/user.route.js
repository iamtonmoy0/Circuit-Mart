const express = require('express');
const router  = express.Router();

// controllers
const { userCartController,getUserCartController, removeUserCartController } = require('../controllers/user.controller');

// middleware
const { authCheck } = require('../middlewares/auth.middleware');

router.route('/user/cart')
 .post(authCheck,userCartController)
 .get(authCheck,getUserCartController)
 .delete(authCheck,removeUserCartController)
module.exports=router;