
import  { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { currentAdmin } from '../utils/authFunction';
// import { useNavigate } from 'react-router-dom';
import { ROOT } from './routePath';
import toast from 'react-hot-toast';
import NavigateRedirect from '../pages/NavigateLoader/NavigateRedirect';

const AdminRoute = ({children}) => {
	// const navigate =useNavigate()
	const {user} = useSelector(state=>({...state}))
	const [isAdmin ,setIsAdmin] = useState(false);
	useEffect(()=>{
		if(user && user.token){
					currentAdmin(user.token)
					.then((res)=>{
						// console.log('current admin :',res)
						setIsAdmin(true)
					})
					.catch((err)=>{
						toast.error('Unauthorized Access',err)
						setIsAdmin(false)
						// console.log(err)
						// navigate(ROOT)
					})
				}
	},[user ]);
return !isAdmin ?(
    <NavigateRedirect path={ROOT} />
  ) : (
    children
  );
};

export default AdminRoute;


