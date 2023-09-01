import { createBrowserRouter } from "react-router-dom";
import * as routePath from './routePath'

import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import App from "../App";
import Home from "../pages/HomePage/Home/Home";
import RegisterComplete from "../pages/Auth/Complete/RegisterComplete";
import ForgotPassword from "../pages/Auth/ForgotPassword/ForgotPassword";
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
				element:<Login/>
			},
			{
				path:routePath.REGISTER,
				element:<Register/>
			},
			{
				path:routePath.REGISTERCOMPLETED,
				element:<RegisterComplete/>
			},
			{
				path:routePath.RESETPASS,
				element:<ForgotPassword/>
			},
		]
	}
])
export default route;