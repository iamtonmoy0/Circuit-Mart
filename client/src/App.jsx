import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import './index.css'
import {  Toaster } from "react-hot-toast";
import {useDispatch} from 'react-redux'
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthProvider";
import Aos from "aos";
import { createOrUpdate } from "./utils/authFunction";

function App() {
  const {user}= useContext(AuthContext);
  const dispatch = useDispatch()
  if (user) {
    (async () => {
      try {
        const idTokenResult = await user.getIdTokenResult();
        // console.log(idTokenResult.token)
  // dispatch  state using firebase info
  createOrUpdate(idTokenResult.token)
  .then(res=>{
   // changing state using backend info
   dispatch({
     type:'LOGGED_IN_USER',
     payload:{
       name:res.data.data.name,
       email:res.data.data.email,
       role:res.data.data.role,
       _id:res.data.data._id,
       token:idTokenResult.token
     }
   });

  })
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
