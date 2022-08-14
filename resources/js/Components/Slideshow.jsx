import Carousel from 'react-material-ui-carousel';

//省略

// export default function Slideshow(){ これが基本型
//   return(
//      <>
//        <Carousel>
//           <div><img src="https://cdn.mofmo.jp/v3/640/imeditor_storage/1/article/149306699.jpg"/></div>
//           <div><img src="https://pettimes.jp/wp-content/uploads/2020/01/bengal_howtokeep_e243877495-e1580459265840.jpeg"/></div>
//           <div><img src="https://nyanpedia.com/wordpress/wp-content/uploads/2015/09/Fotolia_175866310_Subscription_Monthly_M-640x457.jpg"/></div>
//           <div><img src="https://www.kagome.co.jp/library/vegeday/img/article/201707/img_6810_main.jpg"/></div>
//           <div><img src="https://www.kagome.co.jp/library/vegeday/img/article/201704/img_6751_main.jpg"/></div>
//           <div><img src="https://fytte.jp/news/wp-content/uploads/2020/04/img_6751_main.jpg"/></div>
//        </Carousel>
//      </>
//   )
// }

export default function Slideshow(){

  const items = [
    {title: "name1", img: 'https://cdn.mofmo.jp/v3/640/imeditor_storage/1/article/149306699.jpg'},
    {title: "name2", img: 'https://pettimes.jp/wp-content/uploads/2020/01/bengal_howtokeep_e243877495-e1580459265840.jpeg'},
    {title: "name3", img: 'https://nyanpedia.com/wordpress/wp-content/uploads/2015/09/Fotolia_175866310_Subscription_Monthly_M-640x457.jpg'},
    {title: "name4", img: 'https://www.kagome.co.jp/library/vegeday/img/article/201707/img_6810_main.jpg'},
    {title: "name5", img: 'https://www.kagome.co.jp/library/vegeday/img/article/201704/img_6751_main.jpg'},
    {title: "name6", img: 'https://fytte.jp/news/wp-content/uploads/2020/04/img_6751_main.jpg'},
  ]


  return(
     <>
       <Carousel
        indicatorIconButtonProps={{
          style: {
              padding: '0 7px',
          }
        }}
        indicatorContainerProps={{ //写真の上下のmargin
          style: {
            margin: "7px 0px 30px 0px"
          }
        }}

        indicators={{
          style:{
            padding:"100px",
        }}}

        animation="slide"
        interval={5000}
            
        navButtonsWrapperProps={{
          style: {
              marginTop: "55px",
          }
        }}

        navButtonsProps={{
          style: {
            color: "rgb(0,0,0,1)",
            background: "rgb(255,255,255,0)",
          }
        }}>
          {items && items.map(item => (
              <div>
                <img className="w-[600px] h-[400px] object-contain flex justify-center" src={item.img} />
              </div>
          ))}
       </Carousel>
     </>
  )
}