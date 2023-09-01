import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROOT } from "./routePath";

const SecureRoute = ({children}) => {
	const navigate =useNavigate()
	const {user} = useSelector(state=>({...state}))
	useEffect(()=>{
		if(user && user.token) return navigate(ROOT)
	},[user ]);

	return children
}

export default SecureRoute;
