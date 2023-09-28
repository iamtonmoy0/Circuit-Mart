import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

const img = ['https://i.ibb.co/MDrDwy7/axon-1200x630-og.jpg',
'https://i.ibb.co/9WfSL3T/FWn-Mixq-Wu-Xy6mk-Yg2w-UYg-Q.jpg',
'https://i.ibb.co/0cgfbhB/razer.webp',
'https://i.ibb.co/9hRV6Wr/talon-unleash-apm-0-0.jpg',
'https://i.ibb.co/kqSsngV/the-dell-black-friday-in-july-sale-on-dell-and-alienware-gam-8c5k-1280.webp']
const Slider = () => {

	return (
		<Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
       {img.map(i=>
	    <SwiperSlide key={i}>
          <img src={i} />
        </SwiperSlide>
       )}
      </Swiper>
    
	);
}

export default Slider;
