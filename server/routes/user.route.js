const express = require('express');
const router  = express.Router();

// controllers
const { userCartController } = require('../controllers/user.controller');

// middleware
const { authCheck } = require('../middlewares/auth.middleware');

router.route('/user/cart')
 .get(authCheck,userCartController)
 
module.exports=router;