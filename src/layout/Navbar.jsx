import React from 'react'
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
                   <button className =  'login-btn '>Log In </button>
                   <button className = 'sign-up-btn '>Sign Up</button>
               </div>
               <div className = 'd-md-none'>
               {['top'].map((placement, idx) => (
        <OffCanvass key={idx} placement={placement} name={placement} />
      ))}
               </div>
           </nav>
        </>
    )
}

export default Navbar
