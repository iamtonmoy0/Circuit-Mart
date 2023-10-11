const express = require('express');
const router = express.Router();

const {authCheck, adminCheck}= require('../middlewares/auth.middleware');
const { createPaymentController, savePaymentController, getOrderByIdController, deleteOrderByIdController } = require('../controllers/order.controller');

router.route('/create-payment-intend')
 .post(authCheck,createPaymentController)
router.route('/payment-success')
 .post(authCheck,savePaymentController)
router.route('/order-history/:id')
 .get(authCheck,getOrderByIdController)
 .delete(authCheck,deleteOrderByIdController)
//  admin side functionality
router.route('all-orders')
 .get(authCheck,adminCheck,)

module.exports=router;