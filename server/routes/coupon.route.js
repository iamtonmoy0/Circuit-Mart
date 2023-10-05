const express=require('express');
const router = express.Router();
// middleware
const {authCheck,adminCheck} = require('../middlewares/auth.middleware');
// controllers
const { createCouponController, getCouponsController, deleteCouponController } = require('../controllers/coupon.controller');


router.route('/coupon')
 .post(authCheck,adminCheck,createCouponController)
router.route('/coupons')
 .get(getCouponsController)
router.route('/coupon/couponId')
 .delete(authCheck,adminCheck,deleteCouponController)



module.exports= router;


