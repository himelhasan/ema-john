import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";

const Product = ({ addToCart, product }) => {
  // const { addToCart, product } = props;
  const { name, img, seller, price, ratings } = product;
  return (
    <div className="product">
      <img src={img} alt={name} />
      <div className="product-info">
        <h2 className="product-title">{name}</h2>
        <h3 className="product-price">Price: & {price}</h3>
        <p className="product-manufacturer">{seller}</p>
        <p className="product-manufacturer">{ratings}</p>
      </div>
      <button className="btn" onClick={() => addToCart(product)}>
        <p className="btn-text">Add to Cart</p>
        <FontAwesomeIcon icon={faCartPlus} />
      </button>
    </div>
  );
};

export default Product;
