const userModel = require('../models/user.model')
// create or update user
exports.createOrUpdateUserServices=async(data)=>{
const {name,email,picture}= data;
const user = await userModel.findOneAndUpdate({email},{name,picture})
 if(user){
	console.log('updated user',user)
	return user;
 }else{
	const newUser = await userModel.create({name,email,picture})
	console.log('new user created' ,newUser)
	return newUser;
 }

}