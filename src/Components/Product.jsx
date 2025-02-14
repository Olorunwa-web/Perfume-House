import React, {useState} from "react";
import products from "../Product.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ratingImg from '/src/assets/Star 1.svg';
import mark from '../assets/Vector.svg'






const Product = () => {
  console.log(products);

  const [clicked, setClicked] = useState([]);

  const addToCart = (product) => {
    setClicked([...clicked, product]); 
  };

  const addedToCart = (productId) => {
    setClicked(clicked.filter((product) => product.id !== productId))
  }

  const isProductClicked = (productId) => {
    return clicked.some((product) => product.id === productId)
  };

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
                     {isProductClicked(product.id) ? (
                       <button onClick = {() => addedToCart(product.id)} className = 'w-100 added-to-cart'><img src= {mark} alt=""  className = 'added-image'/> Added to Cart</button>
                     ):(
                       <button onClick = {() =>addToCart(product)} className = 'w-100 add-to-cart-btn'>Add to Cart</button>
                     )}
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
