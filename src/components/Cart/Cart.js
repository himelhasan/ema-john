import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>
        <b>Cart Summary</b>
      </h2>
      Cart Total Item: {cart.length}
      <div className="cartInfo">
        <div className="image"></div>
        <div className="text"></div>
      </div>
    </div>
  );
};

export default Cart;
