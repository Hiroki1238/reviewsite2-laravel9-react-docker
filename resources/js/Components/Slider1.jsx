import React, { useRef, useState } from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { display } from "@mui/system";

const items = [
  {title: "name1", img: 'https://cdn.mofmo.jp/v3/640/imeditor_storage/1/article/149306699.jpg'},
  {title: "name2", img: 'https://pettimes.jp/wp-content/uploads/2020/01/bengal_howtokeep_e243877495-e1580459265840.jpeg'},
  {title: "name3", img: 'https://nyanpedia.com/wordpress/wp-content/uploads/2015/09/Fotolia_175866310_Subscription_Monthly_M-640x457.jpg'},
  {title: "name4", img: 'https://www.kagome.co.jp/library/vegeday/img/article/201707/img_6810_main.jpg'},
  {title: "name5", img: 'https://www.kagome.co.jp/library/vegeday/img/article/201704/img_6751_main.jpg'},
  {title: "name6", img: 'https://fytte.jp/news/wp-content/uploads/2020/04/img_6751_main.jpg'},
]

export default function Slider1() {
  return (
    <div className="py-3">
      <Swiper

    modules={[Autoplay, Pagination, Navigation]}
    pagination={{
      clickable: true
    }}
    navigation={true}

        speed={7000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
        slidesPerView={3}
        spaceBetween={30}
       
       
        className="mySwiper"
      >

        {items && items.map(item => (
              <SwiperSlide><img className="mb-12 shadow-lg shadow-gray-400 rounded-2xl object-contain flex justify-center" src={item.img} /></SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}