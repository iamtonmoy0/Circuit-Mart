const admin = require('../lib/index');

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