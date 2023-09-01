import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, isSignInWithEmailLink, onAuthStateChanged, sendSignInLinkToEmail, signInWithEmailAndPassword, signInWithEmailLink }from 'firebase/auth'
import app  from "../lib/firebase.config";

export const AuthContext =createContext()
export const auth = getAuth(app);


const AuthProvider = ({children}) => {
	const [user,setUser] = useState();
	console.log(user)
	// register user
	const registerWithEmail = (email,config)=>{
		return sendSignInLinkToEmail(auth,email,config)
	}
	// sign in with email link
	const emailSignIn =(key)=>{
		return isSignInWithEmailLink(auth,key)
	}
	const createUser =(email,password)=>{
		return createUserWithEmailAndPassword(auth,email,password)
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
		auth,
		createUser,
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
