import { createBrowserRouter } from "react-router-dom";
import * as routePath from './routePath'

import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import App from "../App";
import Home from "../pages/HomePage/Home/Home";
import RegisterComplete from "../pages/Auth/Complete/RegisterComplete";
import ForgotPassword from "../pages/Auth/ForgotPassword/ForgotPassword";
import SecureRoute from "./secureRoute";
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
				element:<SecureRoute> <Login/> </SecureRoute> 
			},
			{
				path:routePath.REGISTER,
				element: <SecureRoute>  <Register/></SecureRoute>
			},
			{
				path:routePath.REGISTERCOMPLETED,
				element:<SecureRoute> <RegisterComplete/> </SecureRoute> 
			},
			{
				path:routePath.RESETPASS,
				element:<ForgotPassword/>
			},
		]
	}
])
export default route;