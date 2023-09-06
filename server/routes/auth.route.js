const express = require('express');
const router  = express.Router();


// controllers
const authController = require('../controllers/auth.controller');

//middleware
const {authCheck, adminCheck} =require('../middlewares/auth.middleware')
const demo =(req,res,next)=>{
	console.log('i am working')
	next()
}
router.route('/auth').post(authCheck,authController.createOrUpdateUserController)
router.route('/current-user').post(authCheck,authController.currentUserController)
router.route('/current-admin').post(authCheck,adminCheck,authController.currentUserController)

module.exports=router;