import { useEffect, useState } from "react";
import { getProductBySlug } from "../../../functions/productFunctions";
import { useParams } from "react-router-dom";
import {useSelector} from 'react-redux';
import toast from "react-hot-toast";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { BsFillCartPlusFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
// react tab
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ViewProduct = () => {

	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	const {user} = useSelector(state=>({...state}))
	const [product,setProduct]=useState({})
	const {slug} = useParams()

useEffect(()=>{
loadProduct()
},[])
const loadProduct =()=>{
	toast.loading('Loading!')
	getProductBySlug(slug)
	.then(res=>{
		toast.dismiss()
		setProduct(res.data.data)
	}).catch(err=>{
		toast.dismiss();
		toast.error(err.message)
	})
}
	return (
		<div>
			<div className="grid lg:grid-cols-2 md:grid-cols-1 gap-0 h-[700px]">
				<div className=''>
				{/* slide */}
				<Swiper
        style={{
          '--swiper-navigation-color': '#c4baba',
          '--swiper-pagination-color': '#c4baba',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 h-[200px] "
      >
{
	product.images && product.images.map(img=> <SwiperSlide key={img}>
		<img src={img}   />
	</SwiperSlide>
)
}   
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper border border-gray-300  " 
      >
        {
			product.images && product.images.map(img=><SwiperSlide key={img} >
				<img src={img} />
			</SwiperSlide>)
		}
       
      </Swiper>

				</div>
				{/* data */}
				<div>
				<p className="text-3xl rounded font-semibold bg-blue-400 text-center py-6">{product.title}</p>
				{/* ratings of product */}
				<p className="text-center">{product.rating || 'no rating yet'} </p>
			<div className="bg-gray-100  py-8">
				<div className="mx-8 pt-5 py-3">
					<div className=" flex justify-between">
						<p>Price </p>
						<p>$ {product.price}</p>

					</div>
					<div className="  pt-2 flex justify-between ">
						<p>Category </p>
						<p className="text-blue-500">{product.category ? product.category.name : 'Unknown Category'}</p>

					</div>
					<div className=" pt-2 flex justify-between">
						<p>Sub Category </p>
						<p className="text-blue-500">{product.subs ? product.subs.name : 'Unknown Category'}</p>


					</div>
					<div className=" pt-2 flex justify-between">
						<p>Shipping </p>
						<p> {product.shipping}</p>

					</div>
					<div className=" pt-2 flex justify-between">
						<p>Color </p>
						<p> {product.color}</p>

					</div>
					<div className=" pt-2 flex justify-between">
						<p>Brand</p>
						<p > {product.brand}</p>

					</div>
					<div className=" pt-2 flex justify-between">
						<p>Available</p>
						<p > {product.quantity}</p>

					</div>
					<div className=" pt-2 flex justify-between">
						<p>Sold</p>
						<p > {product.sold}</p>

					</div>

				</div>
				{/* action bar */}
				<div className='flex justify-evenly pt-10'>
				<div className="flex flex-col items-center">
				<BsFillCartPlusFill className="text-2xl text-green-700" />
				<p>Add to cart</p>
				</div>
					
				<div className="flex flex-col items-center">
				<MdFavorite className="text-2xl text-red-700" />
				<p>Add to wishlist</p>
				</div>
					
					
				<div className="flex flex-col items-center">
				<AiFillStar className="text-2xl text-yellow-500" />
				<p>{user.email?  'Rate Now ' : "Login To Leave A Rating "}</p>
				</div>
					
					
				</div>
			</div>
			{/* coupon! */}
			<div className='bg-[#337CCF] h-[132px]'>
				<p className="text-center text-4xl">Coupon section</p>
			</div>
				</div>
			</div>
			{/* react tab */}
			<div className="mb-20">
		<Tabs>
    <TabList>
      <Tab>Description</Tab>
      <Tab>Reviews</Tab>
    </TabList>

    <TabPanel className='px-6'>
      <h2>
		<p>{product.description}</p>
	  </h2>
    </TabPanel>
    <TabPanel>
      <h2>This will be the comment section</h2>
    </TabPanel>
  </Tabs>
		</div>
		</div>
	);
}

export default ViewProduct;