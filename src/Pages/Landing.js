import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';
import ShoppingCart from '../Components/ShoppingCart';
import myclothing from '../Components/myclothing.json';

function Landing() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [randomCards, setRandomCards] = useState([]);


  useEffect(() => {
    const randomcards = [];

  for (let i = 0; i < 1; i++) {
    const randomIndex = Math.floor(Math.random() * myclothing.length);
    const randomCard = myclothing[randomIndex];
    randomcards.push(randomCard);
  }

    setRandomCards(randomcards);
  }, []);

  const handleBuyButtonClick = item => {
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

  return (
    <div>
      <h1>Check out our items on sale</h1>
      {randomCards.map(item => (
        <Card key={item.id} gender={item.gender} product={item} onBuyButtonClick={handleBuyButtonClick} />
      ))}
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
      </div>
    </div>
  );
 }
 export default Landing;