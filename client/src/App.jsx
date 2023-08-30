import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import './index.css'
function App() {
//why switch is not working in route?
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default App
