import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import navlogo from '../assets/Group 9283.svg';
import OffCanvass from '../lib/OffCanvass';


const Navbar = () => {
    return (
        <>
           <nav className = "container py-4 d-flex justify-content-between align-items-center">
               <div className = 'd-flex align-items-center gap-2'>
                   <img src= {navlogo} alt="nav-logo"/>
                   <h2 className = 'd-none d-lg-block'>Perfume House</h2>
               </div>
               <div className = 'd-none d-md-flex gap-4'>
                   <button className =  'login-btn'> <Link className = 'text-decoration-none login-btn' to = "/auth/signin">Log In</Link></button>
                   <button className = 'sign-up-btn'> <Link className = "text-decoration-none sign-up-btn" to = "/auth/signup">Sign Up</Link></button>
               </div>
               <div className = 'd-md-none'>
               {['top'].map((placement, idx) => (
        <OffCanvass key={idx} placement={placement} name={placement} />
      ))}
               </div>
           </nav>
           <Outlet/>
        </>
    )
}

export default Navbar
