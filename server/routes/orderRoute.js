const express = require('express');
const router = express.Router();

const {authCheck}= require('../middlewares/auth.middleware');
const { createPaymentController, savePaymentController } = require('../controllers/order.controller');

router.route('/create-payment-intend')
 .post(authCheck,createPaymentController)
router.route('/payment-success')
 .post(authCheck,savePaymentController)
module.exports=router;