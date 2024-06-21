import React, { useContext, useRef,  } from 'react'
import './Navbar.css'
import Logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Shopcontext } from '../../Context/Shopcontext'
import nav_dropdown from '../Assets/navmenu.png'
const Navbar = () => {
    
        const [menu,setMenu] = useState("shop ")
        const {getTotalCartitems} = useContext(Shopcontext)
        const menuRef = useRef()

            const dropDown_toggle = (e) =>{
                menuRef.current.classList.toggle('nav-menu-visible');
                e.target.classList.toggle('open');
            }

    return(
        <div className='navbar'> 
        <div className="nav-logo">
            <img src={Logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <div className='dropdown-icon'>
        <img className='nav-dropdown' onClick={dropDown_toggle} src={nav_dropdown} alt="" />

        </div>
            <ul ref= {menuRef} className="nav-menu">
                <li onClick={()=> {setMenu("shop")}}><Link style={{textDecoration : 'none'}} to='/' >SHOP</Link>{menu=="shop"?<hr/>:<></>}</li>
                <li onClick={()=> {setMenu("mens")}}><Link style={{textDecoration : 'none'}}  to='/mens'>MEN</Link>{menu=="mens"?<hr/>:<></>}</li>
                <li onClick={()=> {setMenu("womens")}}><Link style={{textDecoration : 'none'}}  to='/womens'>WOMEN</Link>{menu=="womens"?<hr/>:<></>}</li>
                <li onClick={()=> {setMenu("kids")}}><Link style={{textDecoration : 'none'}}  to='/kids'>KIDS</Link>{menu=="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/Login'> <button> LOGIN</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count"> {getTotalCartitems()} </div>
            </div>
        </div>
    )
}

export default Navbar