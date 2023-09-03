import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROOT } from "./routePath";
import toast from "react-hot-toast";

const SecureRoute = ({children}) => {
	const navigate =useNavigate()
	const {user} = useSelector(state=>({...state}))
	useEffect(()=>{
		if(user && user.token ) {
		toast.error('Unauthorized Route')
		navigate(ROOT) 	}
	},[user ,navigate]);

	return children
}

export default SecureRoute;
// NOC: if user logged in then he will not able to access login and register route .this will redirect to home route 