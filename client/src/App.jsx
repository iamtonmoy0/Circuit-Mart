import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import './index.css'
import {  Toaster } from "react-hot-toast";
import {useDispatch} from 'react-redux'
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthProvider";
import Aos from "aos";
function App() {
  const {user}= useContext(AuthContext);
  const dispatch = useDispatch()
  if (user) {
    (async () => {
      try {
        const idTokenResult = await user.getIdTokenResult();
  // dispatch  state using firebase info
        dispatch({ type: 'LOGGED_IN_USER', payload:{ 
          email:user.email,
          token:idTokenResult.token 
        }});
      } catch (error) {
        console.error('Error getting ID token:', error);
      }
    })();
  }
  // aos
  useEffect(()=>{
		Aos.init()
	},[])
  
  return (
    <>
    <Toaster/>
    <Header/>
    <Outlet/>
    </>
  )
}

export default App
