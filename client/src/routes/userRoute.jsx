import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROOT } from "./routePath";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthProvider";

const UserRoute = ({children}) => {
	const navigate =useNavigate()
	const {user}=useContext(AuthContext)
	useEffect(()=>{
		if(!user) {
		toast.error('Invalid Route')
		navigate(ROOT)
	}
	},[user ,navigate]);

	return children
}

export default UserRoute;
// NOC:if user not not logged in  then he/she cant access some route