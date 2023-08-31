import { createContext } from "react";
import {getAuth, sendSignInLinkToEmail, signInWithEmailLink }from 'firebase/auth'
import app  from "../lib/firebase.config";

export const AuthContext =createContext()
export const auth = getAuth(app)
const AuthProvider = ({children}) => {
	// register user
	const registerWithEmail = (email,config)=>{
		return sendSignInLinkToEmail(auth,email,config)
	}
	// sign in with email link
	const emailSignIn =(email,key)=>{
		return signInWithEmailLink(email,key)
	}
	const authInfo ={
		auth,
		registerWithEmail,
		emailSignIn,
		

	}
	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
