const express = require('express');
const router = express.Router();

const {authCheck}= require('../middlewares/auth.middleware');
const { createPaymentController } = require('../controllers/order.controller');

router.route('/create-payment-intend')
 .post(authCheck,createPaymentController)

module.exports=router;