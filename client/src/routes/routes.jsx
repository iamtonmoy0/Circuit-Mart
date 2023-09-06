import { createBrowserRouter } from "react-router-dom";
import * as routePath from './routePath'

import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import App from "../App";
import Home from "../pages/HomePage/Home/Home";
import RegisterComplete from "../pages/Auth/Complete/RegisterComplete";
import ForgotPassword from "../pages/Auth/ForgotPassword/ForgotPassword";
// import SecureRoute from "./secureRoute";
import History from '../pages/User/UserDashboard/UserDashboard'
import SecureRoute from "./secureRoute";
import Wishlist from "../pages/User/Wishlist/Wishlist";
import Password from "../pages/User/Password/Password";
import Welcome from "../pages/User/welcome";
import AdminPage from "../pages/Admin/AdminDashboard/AdminDashboard";
import AdminRoute from "./AdminRoute";
import AdminHome from "../pages/Admin/AdminHome/AdminHome";
import CreateCategory from "../pages/Admin/CreateCategory/CreateCategory";
import UpdateCategory from "../pages/Admin/UpdateCategory/UpdateCategory";
import SubCategory from "../pages/Admin/SubCategory/SubCategory";
import UpdateSubCategory from "../pages/Admin/UpdateSubCategory/UpdateSubCategory";
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
				element:<SecureRoute> <ForgotPassword/> </SecureRoute> 
			}
			
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
		element: <AdminRoute> <AdminPage/></AdminRoute>,
		children:[
			{
				path:routePath.WELCOME_AS_ADMIN,
				element:<AdminHome/>
			},
			{
				path:routePath.CATEGORY,
				element:<CreateCategory/>
			},
			{
				path:`${routePath.UPDATE_CATEGORY}/:slug`,
				element:<UpdateCategory/>
			},
			{
				path:routePath.SUB_CATEGORY,
				element:<SubCategory/>
			},
			{
				path:`${routePath.UPDATE_SUB_CATEGORY}/:slug`,
				element:<UpdateSubCategory/>
			},
		]
	},
])
export default route;