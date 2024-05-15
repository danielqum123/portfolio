import React from 'react'
import './navbar.css'
import logo from '../../assets/final-logo.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt=""></img>
        <ul className="nav-menu">
            <li>Home</li>
            <li>About me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar