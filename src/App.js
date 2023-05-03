import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Landing from "./Pages/Landing";
import Product from "./Pages/Product";
import Checkout from "./Pages/Checkout";
import ShoppingCart from "./Components/ShoppingCart";
import Card from "./Components/Card";
import { useNavigate } from "react-router-dom";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleBuyButtonClick = (item) => {
    setCartItems([...cartItems, item]);
    setShowCart(true);
  };



  const handleCartCloseClick = () => {
    setShowCart(false);
  };

  const handleClearCartClick = () => {
    setCartItems([]);
  };



  
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.Price,
    0
  );

  const location = useLocation();
  const navigate = useNavigate(); // Call useNavigate to get the navigate function

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Landing" element={<Landing />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Checkout" element={<Checkout items={cartItems} totalPrice={totalPrice}/> } />
        </Routes>
      </div>

      <div className="app">
        <Card onBuyButtonClick={handleBuyButtonClick} />
        {showCart && (
          <ShoppingCart
            items={cartItems}
            totalPrice={totalPrice}
            onCheckout={() => navigate("/Checkout")} // Use navigate to go to Checkout
            onClose={handleCartCloseClick}
            onClearCart={handleClearCartClick}
          />
        )}
      </div>
    </>
  );
}

export default App;