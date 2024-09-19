import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import menuIcon from '../assets/ci_hamburger-lg.svg';
import{Link} from 'react-router-dom'


const OffCanvass = ({ name, ...props }) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <>
         <div onClick = {handleShow}>
             <img src= {menuIcon} alt="menu-icon"/>
         </div>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Body>
            <div className = "d-flex flex-column container mt-3 gap-3">
             <button className =  'login-btn w-100 '><Link className = 'text-decoration-none login-btn' to = "/auth/signin">Log In</Link></button>
             <button className = 'sign-up-btn w-100 '><Link className = "text-decoration-none sign-up-btn" to = "/auth/signup">Sign Up</Link></button>
            </div>
        </Offcanvas.Body>
      </Offcanvas>
        </>
    )
}

export default OffCanvass
