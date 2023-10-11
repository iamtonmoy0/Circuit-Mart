const express = require('express');
const router = express.Router();

const {authCheck}= require('../middlewares/auth.middleware');
const { createPaymentController, savePaymentController, getOrderByIdController } = require('../controllers/order.controller');

router.route('/create-payment-intend')
 .post(authCheck,createPaymentController)
router.route('/payment-success')
 .post(authCheck,savePaymentController)
router.route('/order-history/:id')
 .get(authCheck,getOrderByIdController)
module.exports=router;