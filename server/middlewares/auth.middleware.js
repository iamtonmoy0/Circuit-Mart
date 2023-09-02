const admin = require('../lib/index');

exports.authCheck=(req,res,next)=>{
	console.log(req.headers) //token
	next();
}