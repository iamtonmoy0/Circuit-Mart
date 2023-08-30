import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import './index.css'
import {  Toaster } from "react-hot-toast"
function App() {
  
  return (
    <>
    <Toaster/>
    <Header/>
    <Outlet/>
    </>
  )
}

export default App
