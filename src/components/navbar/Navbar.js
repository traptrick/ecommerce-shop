import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import cart from "../../assets/cart.png";
import Favorites from "../../assets/favorites.svg";
import Account from "../../assets/account.svg";
import { useSelector } from "react-redux";

const Navbar = () => {
  const favList = useSelector((state) => state.fav.favList);
  const cartList = useSelector((state) => state.cart.cartList);
  let path = window.location.href;
  return (
    <div className="navbar">
      <div className="navbar__title">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          E-Commerce Shop
        </Link>
      </div>

      <div className="navbar__item">
        <Link to="/favorites">
          <div style={{ position: "relative" }}>
            <img
              src={Favorites}
              alt="favorites"
              width="26px"
              className="options"
            />
            {favList.length === 0 ? (
              ""
            ) : (
              <span class="fav-badge">{favList.length}</span>
            )}
          </div>
        </Link>
        <Link to="/myaccount">
          <img src={Account} alt="account" width="26px" className="options" />
        </Link>

        <Link to="/cart">
          <div className="options">
            <div style={{ position: "relative" }}>
              <img src={cart} alt="cart" width="26px" />
              {cartList.length === 0 ? (
                ""
              ) : (
                <span class="cart-badge">{cartList.length}</span>
              )}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
