import React from 'react'
import frank from '../assets/Frank Oliver.png'
import elegance from '../assets/Elegance.png'
import ralph from '../assets/Ralph lauren.png'
import { Link } from 'react-router-dom'
import tickcircle from '../assets/tick-circle.svg'


const Order = () => {
    return (
        <>
          <main className = "container class">
              <section className = "py-3 section">
               <div>
                 <img src= {tickcircle} alt="tick-circle-image" className = "bord"/>
               </div>
               <div className = "order py-1">
                 <h1>Order Confirmed</h1>
                 <p>We hope you enjoy your order</p>
               </div>
               <div className = "d-flex align-items-center my-3 Parent">
                  <div className = "imagess">
                      <img src= {ralph} alt="frank-img" className = "imgs"/>
                  </div>
                  <div className = " d-flex justify-content-between align-items-center wordss">
                      <div>
                         <p className = "ralph">Ralph Lauren Perfume</p>
                         <p className = "prices">2x <span className = "span-color"> N3,000</span></p>
                      </div>
                      <div>
                          <p className = "count">N6,000</p>
                      </div>
                  </div>
              </div>

              <div className = "d-flex align-items-center my-3 ">
                  <div className = "imagess">
                      <img src= {frank} alt="frank-img" className = "imgs"/>
                  </div>
                  <div className = " d-flex justify-content-between align-items-center wordss">
                      <div>
                         <p className = "ralph">Frank Oliver Oud Touch</p>
                         <p className = "prices">3x <span className = "span-color"> N3,000</span></p>
                      </div>
                      <div>
                          <p className = "count">N9,000</p>
                      </div>
                  </div>
              </div>

              <div className = "d-flex align-items-center my-3 ">
                  <div className = "imagess">
                      <img src= {elegance} alt="frank-img" className = "imgs"/>
                  </div>
                  <div className = " d-flex justify-content-between align-items-center wordss">
                      <div>
                         <p className = "ralph">Elegance Essence</p>
                         <p className = "prices">2x <span className = "span-color"> N3,000</span></p>
                      </div>
                      <div>
                          <p className = "count">N6,000</p>
                      </div>
                  </div>
              </div>

              {/* total order */}
              <div className = "d-flex justify-content-between align-items-center py-3">
                  <p className = "texts">Order Total</p>
                  <p className = "textss">N21,000</p>
              </div>

              <Link to = "/"><button className = 'btn-order w-100 my-2' >Start New Order</button></Link>
             </section>
          </main> 
        </>
    )
}

export default Order
