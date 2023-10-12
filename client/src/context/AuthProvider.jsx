import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, isSignInWithEmailLink, onAuthStateChanged, sendPasswordResetEmail, sendSignInLinkToEmail, signInWithEmailAndPassword, signInWithEmailLink, signInWithPopup, signOut, updatePassword }from 'firebase/auth'
import app  from "../lib/firebase.config";
import { currentUser } from "../utils/authFunction";
import { useDispatch } from "react-redux";

export const AuthContext =createContext()
export const auth = getAuth(app);
const googleProvider =new GoogleAuthProvider();


const AuthProvider = ({children}) => {
	const [user,setUser] = useState();
	const dispatch = useDispatch()
	// console.log(user)
	// register user
	const registerWithEmail = (email,config)=>{
		return sendSignInLinkToEmail(auth,email,config)
	}
	// sign in with email link
	const emailSignIn =(key)=>{
		return isSignInWithEmailLink(auth,key)
	}
	// create user
	const createUser =(email,password)=>{
		return createUserWithEmailAndPassword(auth,email,password)
	}
	// login with email and password
	const loginWithEmail =(email,password)=>{
		return signInWithEmailAndPassword(auth,email,password)
	}
	// sign in with google
	const googleSignIn =()=>{
		return signInWithPopup(auth,googleProvider);
	}
	// password reset
    const passwordResetLink = (email,config)=>{
		return sendPasswordResetEmail(auth,email,config)
	}
// update password
    const passwordUpdate=(password)=>{
		return updatePassword(auth.currentUser,password)
	}
	// sign out
	const logout = ()=>{
		return signOut(auth)
	}
// auth observer
	useEffect(()=>{
		const unsubscribe =onAuthStateChanged(auth,currentUser=>{
			setUser(currentUser)
		
	
		});
		return ()=>{
			unsubscribe()
		}
		},[setUser])
// dispatch
// TODO: need some improvement
		if(user) {
		(async () => {
			try {
				const idTokenResult = await user.getIdTokenResult();
				console.log(idTokenResult.token)
		// dispatch  state using firebase info
		currentUser(idTokenResult.token)
		.then(res=>{
			// console.log(res)
		// changing state using backend info
		dispatch({
			type:'LOGGED_IN_USER',
			payload:{
			name:res.data.data.name,
			email:res.data.data.email,
			role:res.data.data.role,
			_id:res.data.data._id,
			token:idTokenResult.token
			}
		});
		
		})
		} catch (error) {
				console.error('Error getting ID token:', error);
			}
			})();
		}

	const authInfo ={
		auth,
		createUser,
		user,
		logout,
		passwordResetLink,
		registerWithEmail,
		loginWithEmail,
		emailSignIn,
		googleSignIn,
		passwordUpdate,


	}
	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
