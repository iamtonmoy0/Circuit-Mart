import { createBrowserRouter } from "react-router-dom";
import * as routePath from './routePath'

import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import App from "../App";
import Home from "../pages/HomePage/Home/Home";
import RegisterComplete from "../pages/Auth/Complete/RegisterComplete";
import ForgotPassword from "../pages/Auth/ForgotPassword/ForgotPassword";
// import SecureRoute from "./secureRoute";
import History from '../pages/User/History/History'
import SecureRoute from "./secureRoute";
import Wishlist from "../pages/User/Wishlist/Wishlist";
import Password from "../pages/User/Password/Password";
import Welcome from "../pages/User/welcome";
import AdminPage from "../pages/Admin/AdminPage/AdminPage";
import AdminRoute from "./AdminRoute";
// import UserRoute from "./userRoute";

const route = createBrowserRouter([
	{
		path:routePath.ROOT,
		element:<App/>,
		children:[
			{
				path:routePath.ROOT,
				element:<Home/>

			},
			{
				path:routePath.LOGIN,
				element: <SecureRoute> <Login/> </SecureRoute> 
			},
			{
				path:routePath.REGISTER,
				element:<SecureRoute>  <Register/></SecureRoute> 
			},
			{
				path:routePath.REGISTER_COMPLETED,
				element:<SecureRoute>  <RegisterComplete/> </SecureRoute>  
			},
			{
				path:routePath.RESET_PASS,
				element: <ForgotPassword/> 
			},
			// {
			// 	path:routePath.WELCOME_AS_USER,
			// 	element: <History/>  
			// },
			// {
			// 	path:routePath.USER_PASSWORD,
			// 	element: <Password/>  
			// },
			// {
			// 	path:routePath.USER_WISHLIST,
			// 	element: <Wishlist/>  
			// },
		]
	},{
		path:routePath.WELCOME_AS_USER,
		element: <History/>,
		children:[
			{
				path:routePath.WELCOME_AS_USER,
				element:<Welcome/>
			},
			{
				path:routePath.USER_PASSWORD,
				element: <Password/>  
			},
			{
				path:routePath.USER_WISHLIST,
				element: <Wishlist/>  
			},
		]  
	},
	{
		path:routePath.WELCOME_AS_ADMIN,
		element: <AdminRoute> <AdminPage/></AdminRoute>
	}
])
export default route;