import React, { useState } from "react";
import myClothing from "../Components/myclothing.json";
import Card from "../Components/Card";
import ShoppingCart from "../Components/ShoppingCart";
import "../Components/Card.css";

function Product() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleBuyButtonClick = (item) => {
    setCartItems([...cartItems, item]);
    setShowCart(true);
  };

  const handleCheckout = () => {
    setCartItems([]);
  };

  function handleCartCloseClick() {
    setShowCart(false);
  }

  const handleClearCartClick = () => {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.Price, 0);

  const menClothing = myClothing.filter((product) => product.gender === "men");
  const womenClothing = myClothing.filter((product) => product.gender === "women");

  const menProductCards = menClothing.map((product) => (
    <div className="col-sm-4 mb-3" key={product.id}>
      <Card gender="men" product={product} onBuyButtonClick={handleBuyButtonClick} />
    </div>
  ));

  const womenProductCards = womenClothing.map((product) => (
    <div className="col-sm-4 mb-3" key={product.id}>
      <Card gender="women" product={product} onBuyButtonClick={handleBuyButtonClick} />
    </div>
  ));

  return (
    <div className="product">
      {showCart && (
        <ShoppingCart
          items={cartItems}
          totalPrice={totalPrice}
          onCheckout={handleCheckout}
          onClose={handleCartCloseClick}
          onClearCart={handleClearCartClick}
        />
      )}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="manheader">Men's Clothing</h2>
            <div className="row">{menProductCards.slice(0, 1)}</div>
          </div>
          <div className="col-md-6">
            <h2 className="womanheader">Women's Clothing</h2>
            <div className="row">{womenProductCards.slice(0, 1)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;