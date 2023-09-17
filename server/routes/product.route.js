const express = require('express');
const router = express.Router();


// controllers
const productController = require('../controllers/product.controller');

// middleware
const authMiddleware = require('../middlewares/auth.middleware');

router.route('/product')
 .post(authMiddleware.authCheck,authMiddleware.adminCheck,productController.createProductController)
router.route('/products')
 .post(productController.getProductBySortController)
router.route('/products/total')
 .get(productController.productPaginationController)
 
router.route('/product/:id')
 .delete(authMiddleware.authCheck,authMiddleware.adminCheck,productController.removeProduct)
router.route('/product/:slug')
 .get(productController.getProductBySlugController)
 .patch(authMiddleware.authCheck,authMiddleware.adminCheck,productController.updateProductController)
router.route('/products/:count')
 .get(productController.getProductByQueryController)
router.route('/product/star/id')
  .put(authMiddleware.authCheck) 
module.exports=router;