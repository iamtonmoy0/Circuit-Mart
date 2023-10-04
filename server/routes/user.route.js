const express = require('express');
const router  = express.Router();

// controllers
const { userCartController } = require('../controllers/user.controller');

// middleware

router.route('/cart')
 .get(userCartController)
 
module.exports=router;