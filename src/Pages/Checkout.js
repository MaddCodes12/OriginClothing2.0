import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../Components/Checkout.css';
import '../Components/popup.css';


const Checkout = (props) => {
  const { state } = useLocation();
const { items, totalPrice } = state || {};
  
  const [paymentMethod, setPaymentMethod] = useState('');
  const [shippingMethod, setShippingMethod] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardExpiration, setCardExpiration] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const subtotal = totalPrice;
  const taxRate = 0.06;
  const taxAmount = subtotal * taxRate;
  const total = subtotal + taxAmount;
 
  if (!items || items.length === 0) {
    return <p>Your cart is empty.</p>;
  }


  function handleSubmit(event) {
    event.preventDefault();
    // Store user data
    setShowPopup(true);
  }

  function handlePaymentMethodChange (event){
    setPaymentMethod(event.target.value);
  };

  function handleShippingMethodChange  (event){
    setShippingMethod(event.target.value);
  };

  function handleBillingAddressChange (event){
    setBillingAddress(event.target.value);
  };

function handleShippingAddressChange (event){
    setShippingAddress(event.target.value);
  };

  function handleCardNumberChange (event){
    setCardNumber(event.target.value);
  };

  function handleCardNameChange (event){
    setCardName(event.target.value);
  };

  function handleCardExpirationChange (event){
    setCardExpiration(event.target.value);
  };

  function handleCardCvvChange  (event) {
    setCardCvv(event.target.value);
  };
  
  
  return (
    <>
    <div className="checkout-container">
        <h2>Your Cart</h2>
        <ul>
          {items.map((cartItems) => (
            <li key={cartItems.Category}>
              <img
                className="cart-image"
                src={cartItems.image}
                alt={cartItems.Category}
              />
              {cartItems.Category} ${cartItems.Price}
            </li>
           
          ))}
        </ul>
            
        <p>Total with Tax ${total.toFixed(2)}</p>
          </div>
         


    <div className="checkout-container">
      <h2>Checkout</h2>
      
      <form onSubmit={handleSubmit}> 
        <div className="form-group">
          <label htmlFor="payment-method">Payment method:</label>
          <select
            id="payment-method"
            name="payment-method"
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
            required
          >
            <option value="">Select a payment method</option>
            <option value="credit-card">Credit card</option>
          </select>
        </div>
  
        <div className="form-group">
          <label htmlFor="shipping-method">Shipping method:</label>
          <select
            id="shipping-method"
            name="shipping-method"
            value={shippingMethod}
            onChange={handleShippingMethodChange}
            required
          >
            <option value="">Select a shipping method</option>
            <option value="standard">Standard</option>
            <option value="express">Express</option>
          </select>
        </div>
  
        <div className="form-group">
          <label htmlFor="billing-address">Billing address:</label>
          <input
            id="billing-address"
            name="billing-address"
            type="text"
            value={billingAddress}
            onChange={handleBillingAddressChange}
            required
          />
        </div>
  
        <div className="form-group">
          <label htmlFor="shipping-address">Shipping address:</label>
          <input
            id="shipping-address"
            name="shipping-address"
            type="text"
            value={shippingAddress}
            onChange={handleShippingAddressChange}
            required
          />
        </div>
  
        <div className="form-group">
          <label htmlFor="card-number">Card number:</label>
          <input
            id="card-number"
            name="card-number"
            type="text"
            value={cardNumber}
            onChange={handleCardNumberChange}
            required
          />
        </div>
  
        <div className="form-group">
          <label htmlFor="card-name">Card name:</label>
          <input
            id="card-name"
            name="card-name"
            type="text"
            value={cardName}
            onChange={handleCardNameChange}
            required
          />
        </div>
  
        <div className="form-group">
          <label htmlFor="card-expiration">Card expiration:</label>
          <input
            id="card-expiration"
            name="card-expiration"
            type="text"
            value={cardExpiration}
            onChange={handleCardExpirationChange}
            required
          />
        </div>
  
        <div className="form-group">
          <label htmlFor="card-cvv">Card CVV:</label>
          <input
            id="card-cvv"
            name="card-cvv"
            type="text"
            value={cardCvv}
            onChange={handleCardCvvChange}
            required
          />
        </div>
  
        <button type="submit">Place order</button>
        {showPopup && (
        <div className="popup">
          <h2>Thank you for your order</h2>
          <p2>Here's the information we received from you:</p2>
          <p><span>Payment Method: </span> {paymentMethod}</p>
          <p><span>Shipping Method: </span> {shippingMethod}</p>
          <p><span>Billing Address: </span>{billingAddress}</p> 
          <p><span>Shipping Address: </span> {shippingAddress}</p>
          <p><span>Card Number: </span> {cardNumber} </p>
          <p><span>Card Expiration: </span> {cardExpiration}</p>
          <p><span>Card CVV: </span> {cardCvv}</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
        )}
      </form>
    </div>
    </>
  );
}


export default Checkout;