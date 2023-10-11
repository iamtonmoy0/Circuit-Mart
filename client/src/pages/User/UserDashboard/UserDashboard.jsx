import { Link, Outlet } from "react-router-dom";
import * as routePath from '../../../routes/routePath'
import Header from "../../../components/Header/Header";
import { Toaster } from "react-hot-toast";
import { RiFileHistoryLine } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";



const UserDashboard = () => {
  const {user} = useSelector(state=>({...state}))
	return (
		<>
    <Helmet>
      <title>Circuit-Mart | Dashboard</title>
    </Helmet>
		<Header/>
		{/* toaster */}
		<Toaster/>
		{/* Sidebar Toggle */}
  <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
    <div className="flex items-center py-4">
      {/* Navigation Toggle */}
      <button type="button" className="text-gray-500 hover:text-gray-600" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Toggle navigation">
        <span className="sr-only">Toggle Navigation</span>
        <svg className="w-5 h-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </button>
    
    </div>
  </div>
  {/* End Sidebar Toggle */}

  {/* Sidebar */}
  <div id="application-sidebar" className="hs-overlay mt-[69px] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700">
    <div className="px-6">
      {/* <a className="flex-none text-md  dark:text-white" href="#" aria-label="Brand">{user.name}</a> */}
    </div>

    <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
      <ul className="space-y-1.5">
        <Link to={routePath.WELCOME_AS_USER}>
          <a className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-900 dark:text-white" href="javascript:;">
          <RiFileHistoryLine/>
            Order History
          </a>
        </Link>     
        <li><Link to={routePath.USER_WISHLIST} className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
        <AiFillHeart className='text-red-600'/>
         Wishlist
        </Link></li>
        <li><Link to={routePath.USER_PASSWORD} className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
          <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
          </svg>
         Update Password
        </Link></li>
      </ul>
    </nav>
  </div>
  {/* End Sidebar */}

  {/* Content */}
  <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
    {/* Page Heading */}
	<Outlet/>
    
    {/* End Page Heading */}
  </div>
		</>
	);
}

export default UserDashboard;
