
import  { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { currentAdmin } from '../utils/authFunction';
import { useNavigate } from 'react-router-dom';
import { ROOT } from './routePath';
import toast from 'react-hot-toast';

const AdminRoute = ({children}) => {
	const navigate =useNavigate()
	const {user} = useSelector(state=>({...state}))
	// const [isAdmin ,setIsAdmin] = useState(false);
	useEffect(()=>{
		if(user && user.token){
					currentAdmin(user.token)
					.then((res)=>{
						// console.log('current admin :',res)
						// setIsAdmin(true)
					})
					.catch((err)=>{
						toast.error('Unauthorized Access',err)
						// console.log(err)
						// setIsAdmin(false)
						navigate(ROOT)
					})
				}
	},[user ,navigate]);
return children
}

export default AdminRoute;


