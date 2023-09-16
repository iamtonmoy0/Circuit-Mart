import { useEffect, useState } from "react";
import { getProductBySlug } from "../../../functions/productFunctions";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const ViewProduct = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
console.log(product)
	return (
		<div>
			{JSON.stringify(product)}

			<div className="grid grid-cols-2 gap-0">
				<div className='h-[200px]'>
				{/* slide */}
				<Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={product.images} />
        </SwiperSlide>
         </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide className="h-32">
          <img src={product.images} />
        </SwiperSlide>
       
      </Swiper>
				</div>
				{/* data */}
				<div>
				<p className="text-3xl rounded font-semibold bg-blue-400 text-center py-6">{product.title}</p>
				<p>{product.rating || 'no rating yet'} </p>
				<div className="bg-gray-200 mt-5">
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
				</div>
				</div>

			</div>
		</div>
	);
}

export default ViewProduct;
