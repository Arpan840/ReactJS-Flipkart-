import React from 'react'
import { Carousel } from'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
import './stylesheet/Ads.css'

const Adds = () => {
   
  return (
   <div className='box2'>
    <Carousel infiniteLoop autoPlay showStatus={false} interval={2000} showThumbs={false}>
      <div >
      <Link to="/">  <img className='adsimg'  src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/5cd13ffba6852014.jpg?q=50" alt='item' /></Link>
      </div>
      <div >
      <Link  to="/"> <img className='adsimg'  src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/7838292c8d5d2dd6.jpg?q=50"  alt='item' /></Link>
      </div>
      <div >
       <Link  to="/"> <img className='adsimg'  src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/d6b8eb49acbc80a0.jpg?q=50"  alt='item' /></Link>
      </div>

    </Carousel>
    </div>
   
  )
   
  
}

export default Adds