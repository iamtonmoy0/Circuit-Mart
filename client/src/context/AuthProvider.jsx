import { createContext, useEffect, useState } from "react";
import {getAuth, onAuthStateChanged, sendSignInLinkToEmail, signInWithEmailLink }from 'firebase/auth'
import app  from "../lib/firebase.config";

export const AuthContext =createContext()
export const auth = getAuth(app);

const AuthProvider = ({children}) => {
	const [user,setUser] = useState();
	// register user
	const registerWithEmail = (email,config)=>{
		return sendSignInLinkToEmail(auth,email,config)
	}
	// sign in with email link
	const emailSignIn =(email,key)=>{
		return signInWithEmailLink(email,key)
	}

	useEffect(()=>{
		const unsubscribe =onAuthStateChanged(auth,currentUser=>{
			setUser(currentUser)
			
	
		});
		return ()=>{
			unsubscribe()
		}
		},[])
	const authInfo ={
		user,
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
