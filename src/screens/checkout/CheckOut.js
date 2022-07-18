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
              <input type="text" name="f-name" />
            </div>
            <div>
              <label for="l-name">Last Name</label>
              <input type="text" name="l-name" />
            </div>
          </div>
          <div class="street">
            <label for="name">Street</label>
            <input type="text" name="address" />
          </div>
          <div class="address-info">
            <div>
              <label for="city">City</label>
              <input type="text" name="city" />
            </div>
            <div>
              <label for="state">State</label>
              <input type="text" name="state" />
            </div>
            <div>
              <label for="zip">Pin</label>
              <input type="text" name="zip" />
            </div>
          </div>
          <h1>
            <i class="far fa-credit-card"></i> Payment Information
          </h1>
          <div class="cc-num">
            <label for="card-num">Credit/Debit Card No.</label>
            <input type="text" name="card-num" />
          </div>
          <div class="cc-info">
            <div>
              <label for="card-num">Exp</label>
              <input type="text" name="expire" />
            </div>
            <div>
              <label for="card-num">CVV</label>
              <input type="text" name="security" />
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
