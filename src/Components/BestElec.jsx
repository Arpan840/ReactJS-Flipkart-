import React from 'react'
import "./stylesheet/Bestelect.css"
import pimg from "./Assets/projector.webp" ;
import tv from "./Assets/tv.webp";
import printer from "./Assets/printer.webp"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import moniter from './Assets/moniter.webp';
import printer2 from './Assets/printer2.jpeg'
import powerbank from './Assets/powerbank.webp'



const BestElec = () => {
  let eItems = [
    { image:pimg, name: "Projecter", price: "From 9999", brand: "ZEBRONIC" },
    { image:tv , name: "Monitor", price: "From 8279", brand: "LG" },
    { image: printer, name: "Printers", price: "From 3999", brand: "HP" },
    { image:'https://images.philips.com/is/image/philipsconsumer/54ee392d9c834e929f06ae7b00ed09c7?$jpglarge$&wid=1250', name: "Best Shavers", price: "From 1649", brand: "PHILIPS" },
    { image: moniter, name: "Moniter", price: "From 6599", brand: "acer" },
    { image: printer2, name: "Printer", price: "From 8000", brand: "Brother" },
    { image: powerbank, name: "Premium Power Bank", price: "Shop Now", brand: "MI Realme and more" },
    { image:'https://yellowsheep.in/wp-content/uploads/2021/03/Floral-Mobile-Cover-FL7.jpg', name: "Designer Case Cover", price: "Just 169", brand: "MI Realme and More" },
    
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  return (
    <div className='bbox'>
    <Carousel responsive={responsive}>
        <div className="ebox1"><p><h2>Best of Electronics</h2></p><button className='viewbtn'>View All</button>
            </div>
            {
        
        eItems.map((i)=>{
          return(
            <Carousel responsive={responsive}>
              <div className='carbox'><img className='pimg' src={i.image} alt="eitem" /><p className='p1'>{i.name}</p><p className='p2'> {i.price}</p><p className='p3'> {i.brand}</p>
            </div>
            </Carousel>
          )
        })
       }
  
</Carousel>;
      
</div>
  )
}

export default BestElec