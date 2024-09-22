import React from "react";
import products from "../Product.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ratingImg from '/src/assets/Star 1.svg';

const Product = () => {
  console.log(products);
  return (
    <>
      <main className ="d-flex flex-wrap justify-content-between gap-4 pt-2"> 
        {products.map((product) => {
            const {image,id,title,price,discountPrice,rating,rateCount} = product;
          return (
            <>
              <Card key = {id} className = "card-container" >
                <Card.Img variant="top" src= {image} className = "w-100 card-img" />
                <Card.Body>
                  <Card.Title className = "card-title">{title}</Card.Title>
                  <div className = "d-flex gap-1">
                      <div>
                          <img src= {ratingImg} alt="rating-img"/>
                          <img src= {ratingImg} alt="rating-img"/>
                          <img src= {ratingImg} alt="rating-img"/>
                          <img src= {ratingImg} alt="rating-img"/>
                          <img src= {ratingImg} alt="rating-img"/>
                      </div>
                      <div className = "d-flex gap-2 pt-2 ">
                          <p className = "rating">{rating}</p>
                          <p className = "rate">({(rateCount)})</p>
                      </div>
                  </div>
                  <Card.Text className = "d-flex gap-2 card-price">
                    N{price}
                    <span className = "text-decoration-line-through card-discount-price"> N{discountPrice}</span>
                  </Card.Text>
                  <button className = "w-100 add-to-cart-btn">Add to cart</button>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </main>
    </>
  );
};

export default Product;
