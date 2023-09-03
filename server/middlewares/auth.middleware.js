const admin = require('../lib/index');
const userModel = require('../models/user.model')

exports.authCheck=async(req,res,next)=>{
	try {
		const firebaseUser = await admin
		 .auth()
		 .verifyIdToken(req.headers.token)
		console.log('firebase user ' ,firebaseUser )
		req.user=firebaseUser
		next();
	} catch (error) {
		res.status(401).json({
			error:'Invalid or expired token',

		})
		
	}
}
exports.adminCheck=async(req,res,next)=>{
	const {email} = req.user;
	// checking the email
	const adminUser = await userModel.findOne({email}).exec()
	if(adminUser.role !== 'admin'){
		res.status(401).json({
			err:"Admin recourse.Access denied"
		})
	}else{
		next()
	}
}