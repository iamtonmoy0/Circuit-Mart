const express = require('express');
const router = express.Router();


// controllers
const productController = require('../controllers/product.controller');

// middleware
const authMiddleware = require('../middlewares/auth.middleware');

router.route('/product')
 .post(authMiddleware.authCheck,authMiddleware.adminCheck,productController.createProductController)

 router.route('/product/:id')
 .delete(authMiddleware.authCheck,authMiddleware.adminCheck,productController.removeProduct)
router.route('/product/:slug')
 .get(productController.getProductBySlugController)
 router.route('/products/:count')
 .get(productController.getProductByQueryController)

module.exports=router;