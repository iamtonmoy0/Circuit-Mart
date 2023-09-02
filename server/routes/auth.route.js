const express = require('express');
const router  = express.Router();


// controllers
const { createOrUpdateUserController } = require('../controllers/auth.controller');

//middleware
const {authCheck} =require('../middlewares/auth.middleware')
const demo =(req,res,next)=>{
	console.log('i am working')
	next()
}
router.route('/auth')
 .post(authCheck,createOrUpdateUserController)

router.route('/check').get(demo,(req,res)=>{
	res.send('hello')
})
module.exports=router;