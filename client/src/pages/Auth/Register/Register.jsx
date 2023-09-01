import { useContext,   useState } from "react";
import { Helmet } from "react-helmet-async";
import {toast}from 'react-hot-toast';
import { AuthContext } from "../../../context/AuthProvider";

const Register = () => {
	const [email,setEmail]=useState('');
	const {registerWithEmail}=useContext(AuthContext);
	
// submit handler
	const handleSubmit=(e)=>{
		toast.loading('Sending request')
		e.preventDefault();
		toast.loading('Please Wait!')
		const config ={
			url:import.meta.env.VITE_Register_Redirect_Link,
			handleCodeInApp:true
		}
		toast.dismiss()
		registerWithEmail(email,config)
		.then(()=>{
			toast.dismiss()
			toast.success(`Successfully link send to ${email}`);
			// save user email in local storage
			localStorage.setItem("emailForRegistration", email)
			setEmail('');

		})
		.catch(error=>{
			toast.error(error)
		})
		
	}
	return (
		<>
			<Helmet>
				<title>Circuit-Mart| Register</title>
			</Helmet>
		<div className="flex pt-10 justify-center">
			<form  data-aos='fade-down' className="grid grid-cols-1" onSubmit={(e)=>handleSubmit(e)}>
			<p className="text-2xl text-left">Register</p>
			<input type="text" required name="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="rounded  p-2 border-b-2 focus:border-b-2 focus:border-green-500 outline-none text-black  border-indigo-500 bg-gray-100 mt-2 w-[400px]" />
			<button className="btn py-3 bg-[tomato] rounded-full w-52 mx-auto mt-5 " type="submit">Register</button>
			</form>
		</div>
		</>
	);
}

export default Register;
