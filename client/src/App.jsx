import { Outlet, useLocation } from "react-router-dom"
import Header from "./components/Header/Header"
import './index.css'
import {  Toaster } from "react-hot-toast";
import {  useEffect } from "react";
import Aos from "aos";

function App() {
	const location = useLocation();

  useEffect(()=>{
    Aos.init()
    window.scrollTo(0, 0); // Scroll to top on route change
	},[location])
  
  return (
    <>
    <Toaster/>
    <Header/>
    <Outlet/>
    </>
  )
}

export default App
