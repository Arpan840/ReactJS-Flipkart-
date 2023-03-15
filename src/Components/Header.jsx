import React from 'react'
import { Link } from 'react-router-dom'
import "./stylesheet/Navbar.css" 
import {} from "@react-icons/all-files/fa/FaBeer";
import {FaCartPlus,FaSearch } from 'react-icons/fa';
const Header = ({changebg,mode}) => {
 
  return (
    <div>
        <nav>
            <ul>
                <div className='logo'>
                <li><Link to="/"><img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="logo" /></Link></li>
                <li>Explore<span style={{color:'yellow'}}>plus <img className='plus' src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png' alt='plus'></img></span></li>
                </div>
                <li className='list1'><input type="search" placeholder='search for products,brands and more'/><button id='bots'><FaSearch size={12}></FaSearch></button></li>
                <li className='list'><Link to="/Login"><button className='btn'>Login</button></Link></li>
                <li className='list'><Link className='link' to="/" >Become a seller</Link></li>
                <li className='list'>More<select >
               
 
                 
 
</select></li>
<li className='cart'><FaCartPlus size={20}></FaCartPlus> Cart</li>
<li className='mode'><button onClick={changebg}>{mode}</button></li>
               

                
            </ul>
        </nav>
    </div>
  )
}

export default Header