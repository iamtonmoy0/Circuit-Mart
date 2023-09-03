import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROOT } from "./routePath";
import toast from "react-hot-toast";
// import RedirectWithCountdown from "../components/RedirectWithCountdown";
import NavigateRedirect from "../pages/NavigateLoader/NavigateRedirect";

const SecureRoute = ({ children }) => {
//   const navigate = useNavigate();
  const { user } = useSelector((state) => ({ ...state }));



  return user && user.token ? (
    <NavigateRedirect path={ROOT} />
  ) : (
    children
  );
};

export default SecureRoute;


//   useEffect(() => {
//     if (user && user.token) {
//       // Display a toast message for unauthorized access
//       toast.error('Unauthorized Route');
//     }
//   }, [user]);






// import { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { ROOT } from "./routePath";
// import toast from "react-hot-toast";
// import NavigateRedirect from "../pages/NavigateLoader/NavigateLoader";

// const SecureRoute = ({children}) => {
// 	const navigate =useNavigate()
// 	const {user} = useSelector(state=>({...state}))
// 	useEffect(()=>{
// 		if(user && user.token ) {
// 		toast.error('Unauthorized Route')
// 		// navigate(ROOT)
// 		return <NavigateRedirect path={ROOT} /> 
// 		}
// 	},[user ,navigate]);

// 	return children
// }

// export default SecureRoute;
// NOC: if user logged in then he will not able to access login and register route .this will redirect to home route 