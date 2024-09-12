import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex-center'> 
<NavLink to="/register" className={"nav_link"}>REGISTER</NavLink>
<NavLink to="/login" className={"nav_link"}>LOGIN</NavLink>
<NavLink to="/cart" className={"nav_link"}>CART</NavLink>
<NavLink to="/logout" className={"nav_link"}>LOGOUT</NavLink>
    </nav>
     
  )
}

export default Navbar
