import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import products from "../Product.json";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import tickcircle from '../assets/tick-circle.svg'




function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
              <div className = "px-2">
                 <img src= {tickcircle} alt="tick-circle-image" className = "bord"/>
              </div>
          </Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
            <section className = "px-2">
               <h1 className = "order-h1">Order Confirmed</h1>
               <p className = "order-p">We hope you enjoy your order</p>
               <div className = "pt-3"> 
                  {products.map((Cart)=> {
                     const {image,id,title,price} = Cart;
                     return (
                 <div key = {id} className = "d-flex  justify-content-between align-items-center my-3 ">
                     <div className = "d-flex align-items-center gap-3   cart-space">
                      <div className = "imagess">
                         <img src= {image} alt="frank-img" className = "imgs"/>
                      </div>
                      <div>
                         <p className = "ralph">{title}</p>
                         <p className = "prices">2x <span className = "span-color"> N{price}</span></p>
                      </div> 
                     </div>
                      <div>
                          <p className = "count">N6,000</p>
                      </div>
                </div>
                     )
                  })} 
               </div>
               <div className = "d-flex justify-content-between align-items-center py-3">
                  <p className = "texts">Order Total</p>
                  <p className = "textss">N36,000</p>
              </div>
               <Link to = "/"><button className = 'btn-order w-100 my-2' >Start New Order</button></Link>
            </section>
        </Modal.Body>
      </Modal>
    );
  }
  




const Cart = () => {
    console.log(products);

    const [modalShow, setModalShow] = React.useState(false);


    return (
        <>
        <main className = "cart container p-4  ">
            <h2 className = 'preview py-1'>My Cart Preview</h2>
            <div className = "cart-flex flex-md-w">
            {products.map((time) =>{
                const {image,id,title,price} = time;
            return(
                <>
                  <div key = {id} className = "parent my-4 ">
                      <div className = "d-flex gap-3 justify-content-center align-items-center Gaps " >
                        <div className = 'images'>
                          <img src= {image} alt="image" className = "img"/>
                        </div>
                        <div className = "words">
                          <p className = "prev">{title}</p>
                           <div className = "d-flex gap-2 move">
                              <button className = "btns">-</button>
                              <p className = "number">1</p>
                              <button className = "btnss">+</button>
                          </div> 
                          {/* <span><button className = "btns">-</button> 1 <button className = "btns">+</button></span> */}
                          <div className = "d-flex justify-content-between  price">
                              <p>N{price}</p>
                              <button>Remove</button>
                          </div>
                       </div>
                      </div>
                  </div>
                </>
            )
            })}
            </div>
            <div className = "my-2 py-2">
                <div className = "prices d-flex justify-content-between">
                    <p>Sub Total</p>
                    <h1>18,000</h1>
                </div>
                <div className = "prices d-flex justify-content-between"> 
                    <p>Delivery</p>
                    <h1>2,000</h1>
                </div>
                <div className = 'prices d-flex justify-content-between'>
                    <p>Total</p>
                    <h1>20,000</h1>
                </div>
            </div>
            <button className = "order-btn" onClick={() => setModalShow(true) } >Confirm Order</button>
            <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </main> 

        </>
    )
}

export default Cart
