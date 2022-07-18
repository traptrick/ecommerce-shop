import React from "react";
import { useNavigate } from "react-router-dom";
import "./CheckOut.css";

const CheckOut = () => {
  let navigate = useNavigate();

  const onPurchaseHandler = (e) => {
    e.preventDefault();
    alert("Order Placed! Arriving Soon.");
  };
  const backToCart = (e) => {
    e.preventDefault();
    navigate("/cart");
  };
  return (
    <div class="wrapper">
      <div class="container">
        <form onSubmit={(e) => onPurchaseHandler(e)}>
          <h1>
            <i class="fas fa-shipping-fast"></i>
            Shipping Details
          </h1>
          <div class="name">
            <div>
              <label for="f-name">First Name</label>
              <input type="text" name="f-name" required />
            </div>
            <div>
              <label for="l-name">Last Name</label>
              <input type="text" name="l-name" required />
            </div>
          </div>
          <div class="street">
            <label for="name">Street</label>
            <input type="text" name="address" required />
          </div>
          <div class="address-info">
            <div>
              <label for="city">City</label>
              <input type="text" name="city" required />
            </div>
            <div>
              <label for="state">State</label>
              <input type="text" name="state" required />
            </div>
            <div>
              <label for="zip">Pin</label>
              <input type="text" name="zip" required />
            </div>
          </div>
          <h1>
            <i class="far fa-credit-card"></i> Payment Information
          </h1>
          <div class="cc-num">
            <label for="card-num">Credit/Debit Card No.</label>
            <input type="text" name="card-num" required />
          </div>
          <div class="cc-info">
            <div>
              <label for="card-num">Exp</label>
              <input type="text" name="expire" required />
            </div>
            <div>
              <label for="card-num">CVV</label>
              <input type="text" name="security" required />
            </div>
          </div>
          <div class="btns">
            <button type="submit">Purchase</button>
            <button onClick={(e) => backToCart(e)}>Back to cart</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
