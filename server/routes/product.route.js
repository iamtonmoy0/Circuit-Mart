const express = require('express');
const router = express.Router();


// controllers
const productController = require('../controllers/product.controller');

// middleware
const authMiddleware = require('../middlewares/auth.middleware');

router.route('/product')
 .post(authMiddleware.authCheck,authMiddleware.adminCheck,productController.createProductController)

module.exports=router;