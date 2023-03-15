import React from 'react'
import "./stylesheet/Bestelect.css"
import toy from "./Assets/toys.webp"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const BeautiFoodToys = () => {
    let eItems = [
        { image:toy, name: "Remote Control Toy", price: "Up to 80% off", brand: "BUY NOW" },
        { image:"data:image/jpeg;base64,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", name: "Remote Control Toy", price: "Up to 80% off", brand: "BUY NOW" },
        { image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/8169sLzD-jL._SL1500_.jpg", name: "Remote Control Toy", price: "Up to 80% off", brand: "BUY NOW" },
        { image:"data:image/jpeg;base64,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", name: "Remote Control Toy", price: "Up to 80% off", brand: "BUY NOW" },
        { image:"data:image/jpeg;base64,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", name: "Remote Control Toy", price: "Up to 80% off", brand: "BUY NOW" },
        { image:"https://m.media-amazon.com/images/I/81cKYVxqZhL._SX355_.jpg", name: "Remote Control Toy", price: "Up to 80% off", brand: "BUY NOW" },
        { image:"https://cdn.shopify.com/s/files/1/0657/6821/products/guitarra-electrica-cort-cr200-bk-les-paul-audiomasmusica-168601-MLA20388247259_082015-F_grande_4fdd394e-be8e-461f-aec3-51a470bda311.jpg?v=1639962121", name: "Remote Control Toy", price: "Up to 80% off", brand: "BUY NOW" },
        { image:"https://www.caschamusic.com/images/files/products/0000258/pics/HH-5050U-Main.png", name: "Remote Control Toy", price: "Up to 80% off", brand: "BUY NOW" },
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
        <div className="ebox2"><p><h2>Beauty, Food, Toys & more</h2></p>p<button className='viewbtn'>View All</button>
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

export default BeautiFoodToys