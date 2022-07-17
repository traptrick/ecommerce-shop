import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import cart from "../../assets/cart.png";
import Favorites from "../../assets/favorites.svg";
import Account from "../../assets/account.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__title">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          E-Commerce Shop
        </Link>
      </div>

      <div className="navbar__item">
        <Link to="/favorites">
          <img
            src={Favorites}
            alt="favorites"
            width="26px"
            className="options"
          />
        </Link>
        <Link to="/myaccount">
          <img src={Account} alt="account" width="26px" className="options" />
        </Link>

        <Link to="/cart">
          <div className="options">
            <img src={cart} alt="cart" width="26px" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
