import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // to get data from the api / json file
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // add to cart event handler
  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart}></Product>
        ))}
      </div>

      {/* cart container */}
      <div className="cart-container">
        <h2>
          <b>Cart Summary</b>
        </h2>
        Cart Total Item: {cart.length}
        <div className="cartInfo">
          <div className="image"></div>
          <div className="text"></div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
