
import { Helmet } from 'react-helmet-async';
import { Link} from 'react-router-dom';
import img from '../../../assets/logo.png'
import * as routePath from '../../../routes/routePath';
import { Slider } from 'antd';
import {RiPriceTag3Line} from 'react-icons/ri';
import ShopHome from '../ShopHome/ShopHome';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const ShopPage = () => {
const [price,setPrice]=useState([0,0]);
const dispatch=useDispatch();
const [ok,setOk] = useState(false);

const handlePrice=(value)=>{
  dispatch({
    type:"SEARCH_QUERY",
    payload:{text:""},
  })
  setPrice(value)
  setTimeout(()=>{
  setOk(true)
},3000)
}
	console.log(price)
	return (
		<>
			<Helmet>
				<title>Circuit-Mart | Shop</title>
			</Helmet>
			{/* layout */}
			<div >
			<body className="bg-gray-50 dark:bg-slate-900">
  {/* ========== MAIN CONTENT ========== */}
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
      {/* End Navigation Toggle */}

    </div>
  </div>
  {/* End Sidebar Toggle */}

  {/* Sidebar */}
  <div id="application-sidebar" className=" hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700">
    <div className="px-6">
      <Link to={routePath.ROOT} className="flex-none text-xl font-semibold dark:text-white"  aria-label="Brand"><img src={img} alt="" className='h-12' /></Link>
    </div>
    
    <div className="pt-6 px-6">
    <p className='text-3xl text-gray-600'>Search/Filter</p>
    </div>
    
    <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
      <ul className="space-y-1.5">
        {/* slider */}
        <li>
          
          <p className='text-gray-600 text-sm flex gap-x-3.5'><RiPriceTag3Line className='text-red-900' /> Price</p>

      <Slider range tipFormatter={v=>` $${v}`} value={price} onChange={value=>handlePrice(value)} defaultValue={[0, 0]} max="5999"  />
        </li>

        
      </ul>
    </nav>
  </div>
  {/* End Sidebar */}

  {/* Content */}
  <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
    {/* Page Heading */}
    <ShopHome price={price} setPrice={setPrice} ok={ok} />
    {/* End Page Heading */}
  </div>
  {/* End Content */}
  {/* ========== END MAIN CONTENT ========== */}
</body>

			</div>
		</>
	);
}

export default ShopPage;
