const userModel = require('../models/user.model')
// create or update user
exports.createOrUpdateUserServices=async(data)=>{
const {name,email,picture}= data;
const user = await userModel.findOneAndUpdate({email},{name,picture})
 if(user){
	console.log('updated user',user)
	return user;
 }else{
	const newUser = await userModel.create({name: email.split("@")[0],email,picture})
	console.log('new user created' ,newUser)
	return newUser;
 }

}
// current user 
exports.currentUserServices=async(data)=>{
	const {email}=data;
	const user = await userModel.findOne({email:email})
	return user;

}
// if user is admin
