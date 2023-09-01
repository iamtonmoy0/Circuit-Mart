const express = require('express');

const router  = express.Router();

router.route('/user').get((req,res)=>{
	res.send('hey this is user routes')
})
module.exports=router;