const express = require('express');

const router  = express.Router();

router.route('/auth').get((req,res)=>{
	res.send('hey this is me')
})
module.exports=router;