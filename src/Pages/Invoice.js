import React from "react";

function Invoice(props) {
  const { formData } = props;

  return (
    <div>
      <h2>Form Data</h2>
      <p>Payment Method: {formData.paymentMethod}</p>
      <p>Shipping Method: {formData.shippingMethod}</p>
      <p>Billing Address: {formData.billingAddress}</p>
      <p>Shipping Address: {formData.shippingAddress}</p>
      <p>Card Number: {formData.cardNumber}</p>
      <p>Card Name: {formData.cardName}</p>
      <p>Card Expiration: {formData.cardExpiration}</p>
      <p>Card CVV: {formData.cardCvv}</p>
    </div>
  );
}

export default Invoice;
