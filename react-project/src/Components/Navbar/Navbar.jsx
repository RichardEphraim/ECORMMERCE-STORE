import React from 'react'
import './Navbar.css'
import Logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
const Navbar = () => {
    return(
        <div className='navbar'> 
        <div className="nav-logo">
            <img src={Logo} alt="" />
            <p>SHOPPER</p>
        </div>
            <ul className="nav-menu">
                <li>SHOP</li>
                <li>MENU</li>
                <li>WOMEN</li>
                <li>KIDS</li>
            </ul>
            <div className="nav-login cart">
                <button> LOGIN</button>
                <img src={cart_icon} alt="" />
            </div>
        </div>
    )
}

export default Navbar