import React from 'react'
import { Link } from 'react-router-dom';
import products from "../Product.json";



const Cart = () => {
    console.log(products);

    return (
        <>
        <main className = "cart container p-4 ">
            <h2 className = 'preview py-1'>My Cart Preview</h2>
            {products.map((product) =>{
                const {image,id,title,price} = product;
            return(
                <>
                  <div key = {id} className = "d-flex  justify-content-between parent my-4 ">
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
            <Link className = "order-btn" to = "/auth/order" ><button className = "order-btn">Confirm Order</button></Link>
        </main> 
        </>
    )
}

export default Cart
