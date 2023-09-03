const express = require('express');
const router  = express.Router();


// controllers
const { createOrUpdateUserController, currentUserController } = require('../controllers/auth.controller');

//middleware
const {authCheck, adminCheck} =require('../middlewares/auth.middleware')
const demo =(req,res,next)=>{
	console.log('i am working')
	next()
}
router.route('/auth')
 .post(authCheck,createOrUpdateUserController)

router.route('/current-user').post(authCheck,currentUserController)
// router.route('/current-admin').post(authCheck,adminCheck)

// router.route('/check').get(demo,(req,res)=>{
// 	res.send('hello')
// })
module.exports=router;