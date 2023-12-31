const express = require('express');
const router = express.Router();

// auth middleware
const authMiddleware = require('../middlewares/auth.middleware');
// controllers
const reviewsController = require('../controllers/reviews.controller')
router.route('/review')
.post(authMiddleware.authCheck,reviewsController.createReviewController)
router.route('/review/:id')
 .get(reviewsController.getReviewsByProductIdController)
module.exports=router;