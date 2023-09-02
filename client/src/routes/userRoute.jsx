import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROOT } from "./routePath";
import toast from "react-hot-toast";

const UserRoute = ({children}) => {
	const navigate =useNavigate()
	const {user} = useSelector(state=>({...state}))
	useEffect(()=>{
		if(!user.email) {
		toast.error('Invalid Route')
		navigate(ROOT)
	}
	},[user ,navigate]);

	return children
}

export default UserRoute;