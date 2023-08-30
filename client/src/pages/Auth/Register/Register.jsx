import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import {toast}from 'react-hot-toast'
import Aos from 'aos'
import { AuthContext } from "../../../context/AuthProvider";

const Register = () => {
	const [email,setEmail]=useState('');
	const formRef = useRef();
	const {registerWithEmail}=useContext(AuthContext)
	useEffect(()=>{
		Aos.init()
	},[])
// submit handler
	const handleSubmit=(e)=>{
		toast.loading('Sending request')
		e.preventDefault()
		const config ={
			url:'http://localhost:5173/register/complete',
			handleCodeInApp:true
		}
		toast.dismiss()
		registerWithEmail(email,config);
		toast.success(`Successfully link send to ${email}`)
		formRef.current.reset()
		
	}
	return (
		<>
			<Helmet>
				<title>Circuit-Mart| Register</title>
			</Helmet>
		<div className="flex pt-10 justify-center">
			<form ref={formRef} data-aos='fade-down' className="grid grid-cols-1" onSubmit={handleSubmit}>
			<p className="text-2xl text-left">Register</p>
			<input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="rounded  p-2 border-b-2 focus:border-b-2 focus:border-green-500 outline-none text-black  border-indigo-500 bg-gray-100 mt-2 w-[400px]" />
			<button className="btn py-3 bg-[tomato] rounded-full w-52 mx-auto mt-5 " type="submit">Register</button>
			</form>
		</div>
		</>
	);
}

export default Register;
