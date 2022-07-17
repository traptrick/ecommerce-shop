import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import cart from "../../assets/cart.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__title">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          E-Commerce Shop
        </Link>
      </div>

      <div className="navbar__item">
        <Link to="/cart">
          <div className="cart">
            <img src={cart} alt="cart" width="26px" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
