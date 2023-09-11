const express = require('express');
const router  = express.Router();

// controller
const cloudController = require('../controllers/cloud.controller')
// middleware
const authMiddleware = require('../middlewares/auth.middleware')


router.route('/upload-images')
 .post(authMiddleware.authCheck,authMiddleware.adminCheck,cloudController.uploadDataController)







module.exports=router;