import React from "react";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

export default function Slider1() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const items = [
      {title: "name1", img: 'https://cdn.mofmo.jp/v3/640/imeditor_storage/1/article/149306699.jpg'},
      {title: "name2", img: 'https://pettimes.jp/wp-content/uploads/2020/01/bengal_howtokeep_e243877495-e1580459265840.jpeg'},
      {title: "name3", img: 'https://nyanpedia.com/wordpress/wp-content/uploads/2015/09/Fotolia_175866310_Subscription_Monthly_M-640x457.jpg'},
      {title: "name4", img: 'https://www.kagome.co.jp/library/vegeday/img/article/201707/img_6810_main.jpg'},
      {title: "name5", img: 'https://www.kagome.co.jp/library/vegeday/img/article/201704/img_6751_main.jpg'},
      {title: "name6", img: 'https://fytte.jp/news/wp-content/uploads/2020/04/img_6751_main.jpg'},
    ]

    return (
        <Slider {...settings}>
          {items && items.map(item => (
              <div>
                <img src={item.img} />
              </div>
          ))}
        </Slider>
    );
}