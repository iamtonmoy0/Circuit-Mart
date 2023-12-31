import {BiGridAlt, BiSolidDashboard, BiUserPlus} from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import * as routePath from '../../routes/routePath';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';
import {FiLogOut} from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux';
import img  from '../../assets/logo.png'
import Search from '../Search/Search';
import { AiFillHeart, AiTwotoneShopping } from 'react-icons/ai';
import { BsFillCartCheckFill } from 'react-icons/bs';
import {  Badge } from 'antd';
import { RiFileHistoryLine } from 'react-icons/ri';
const Header = () => {

  const {logout}= useContext(AuthContext);
  const {user,cart} = useSelector(state=>({...state}))
  const navigate = useNavigate();
  const dispatch =useDispatch();
  // handle logout
  const handleLogout=()=>{
    logout()
    .then(()=>{
      toast.success('Logout successful');
      navigate('/')
      dispatch({type:'LOGOUT',payload:null})

    })
  }
	return (
	<>
	<header className="flex  flex-wrap sm:justify-start sm:flex-nowrap  w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
  <nav className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
    <div className="flex items-center justify-between">
      <a className="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand"><Link to={routePath.ROOT}><img src={img} className='h-12' alt="" /></Link></a>
      <div className="sm:hidden">
        <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
          <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
          <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
      </div>
    </div>
    <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
      <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
      <a  className=" mr-28 font-medium flex items-center text-blue-600 sm:py-6 dark:text-blue-500"  aria-current="page">
			<Search/>
		</a>
      
      <Link to={routePath.ROOT} className="font-medium flex items-center text-blue-600 sm:py-6 dark:text-blue-500" href="#" aria-current="page">
			<BiGridAlt/> Home
		</Link>
      
      <Link to={routePath.SHOP} className="font-medium text-md flex items-center text-green-600 sm:py-6 dark:text-blue-500" href="#" aria-current="page">
			<AiTwotoneShopping/> Shop
		</Link>
        
      <Link to={routePath.CART} className="font-medium flex items-center text-[tomato] sm:py-6 dark:text-blue-500" href="#" aria-current="page">
			<BsFillCartCheckFill/> Cart <Badge className='pb-4' count={cart.length}>
     
    </Badge>
		</Link>
        {/* <a className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="#">UserName</a> */}
        {/* <a className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="#">Work</a> */}
        
{ user && user.token ? 
        <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
          <button type="button" className="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500 ">
            {
              user?.name   
            }
            <svg className="ml-2 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
            </svg>
          </button>

          <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5">
            {
              user && user?.role==='admin' ?
              <>
            <Link to={routePath.WELCOME_AS_ADMIN} className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
             Admin Dashboard
            </Link>
            </>
            :
            <>
            <Link to={routePath.WELCOME_AS_USER} className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
            <BiSolidDashboard/>
            Dashboard
           </Link>
             <Link to={routePath.USER_WISHLIST}className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
              <AiFillHeart className='text-red-600'/>
              Wishlist
            </Link>

            <Link  to={routePath.WELCOME_AS_USER} className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
              <RiFileHistoryLine/>
              Order History
            </Link>
           </>
            }

          
            <a onClick={handleLogout} className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
              <FiLogOut/>
              Logout
            </a>
            
          </div>
        </div>
        :
        <>
		<Link to={routePath.REGISTER} className=" flex items-center font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="#">
			<BiUserPlus className='text-xl'/>

			Register
		</Link>
        <Link to={routePath.LOGIN} className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-l sm:border-gray-300 sm:my-6 sm:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500" href="#">
          <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
          </svg>
          Log in
        </Link>
        </>
}
      </div>
    </div>
  </nav>
</header>
	
	</>
	);
}

export default Header;
