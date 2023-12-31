import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../context/AuthProvider";
import toast from "react-hot-toast";
import {useNavigate} from 'react-router-dom';
import * as routePath from '../../../routes/routePath';



const RegisterComplete = () => {
	const {createUser} = useContext(AuthContext);
	const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {

	setEmail(localStorage.getItem("emailForRegistration"));
  }, []);
  
	// submit handler
	const handleSubmit= async(e)=>{
		e.preventDefault();
		if(!email || !password){
			toast.error('Valid Email and Password is required');
			return
		}else if(password.length < 6){
			toast.error('Password  should be minimum 6 character')
			return
		}
		createUser(email,password)
		.then(()=>{
        // remove user email fom local storage
        window.localStorage.removeItem("emailForRegistration");
		toast.success('Account created successfully');
		// TODO! might need a another dispatch for more security same as login but need to check the res in then function..-------<Login/>

		navigate(routePath.LOGIN)
		
		})
		.catch(error=>{
			toast.error(error)
		})

		// 	// get user id Token
		// 	// await user.updatePassword(password)
			// TODO:Redux Store
			// TODO:redirect user
		// }
	
	}
	
	

	return (
		<>
			<Helmet>
				<title>Circuit-Mart| Complete Registration</title>
			</Helmet>
		
		<div className="flex justify-center pt-10" >
		<form data-aos='fade-up' action="" className="grid grid-cols-1" onSubmit={handleSubmit}>
		<p className="text-xl font-sans text-left">Complete Registration</p>
		<input type="text" name="email" value={email} disabled className="  form-control p-2 border-b-2 focus:border-b-2 focus:border-green-500 outline-none text-black  border-indigo-500 bg-gray-100 mt-2 w-[400px]" />
		
		<input required type="password" name="password" placeholder="Enter Password" value={password} 
        onChange={(e) => setPassword(e.target.value)}  className="rounded mt-5  form-control p-2 border-b-2 focus:border-b-2 focus:border-green-500 outline-none text-black  border-blue-500 bg-gray-100  w-[400px]" />
			
			<button className="btn py-3 bg-purple-400 rounded-full w-52 mx-auto mt-5 " type="submit">Submit</button>
		</form>
		</div>
		
		</>
	);
}

export default RegisterComplete;
