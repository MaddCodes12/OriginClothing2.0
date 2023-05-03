import React from "react";
import '../Components/Shoppingcart.css';
import { CustomLink } from "./CustomLink";
import { useNavigate } from "react-router-dom";

function ShoppingCart(props) {
  const navigate = useNavigate();
  const { items, totalPrice } = props; // destructure the props
  const formattedPrice = totalPrice.toFixed(2);

  function handleClick() {
    navigate('/Checkout', { state: { items, totalPrice } });
    props.onCheckout();
  }

  return ( 
    <div className="shopping-cart">
      <h2>Your Shopping Cart</h2>
      {items && items.length > 0 ? (
        <ul>
          {items.map((cartitem) => (
            <li key={cartitem.id}>
              <img className="cart-image" src={cartitem.image} alt={cartitem.Category} />
              {cartitem.Category} ${cartitem.Price}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <p>Total: ${formattedPrice}</p>
      <button onClick={handleClick}><CustomLink to ="/Checkout" className ="checkout-link"></CustomLink>Checkout</button>
      <button onClick={props.onClose}>Close</button>
      <button onClick={props.onClearCart}>Clear Cart</button>
    </div>
  );
}

export default ShoppingCart;