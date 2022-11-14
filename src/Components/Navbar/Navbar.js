import React from 'react';
import "./Navbar.css";
import "./NavbarMobile.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faMagnifyingGlass, faHeart } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div className="navbar">
           <div className='small-navbar'>

            <a href='##'>Track Your Order</a>
            <a href='##'>Login</a>
            <a href='##'>Sign up</a>

           </div>
           <div className='main-navbar'>
                <h2>Book Spot</h2>
                <div className='searchbox-container'>
               
                    <input className='search-box' type="search" placeholder='Search...'></input>
            
                    <button className='search-btn'><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon></button>
                    
                   
                </div>
                <div className='main-nav-anchor'>
                <a href='##' className='notification'><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon> Wishlist</a>
                    <a href='##'>Offers</a>
                    <a href='##' className='notification'><FontAwesomeIcon icon={faBell}></FontAwesomeIcon></a>
                </div>

           </div>

            
        </div>
    );
};

export default Navbar;