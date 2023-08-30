import { createContext } from "react";
import {getAuth, sendSignInLinkToEmail }from 'firebase/auth'
import app  from "../lib/firebase.config";

export const AuthContext =createContext()
export const auth = getAuth(app)
const AuthProvider = ({children}) => {
	// register user
	const registerWithEmail = (email,config)=>{
		return sendSignInLinkToEmail(auth,email,config)
	}
	const authInfo ={
		auth,
		registerWithEmail,

	}
	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
