import React, { useState } from "react";
import "./Cards.css";
import favSelect from "../../assets/favselect.svg";
import { useDispatch, useSelector } from "react-redux";
import { addFav, favAlready } from "../../redux/actions/favoriteActions";
import { toast } from "react-toastify";
import { addToCart, alreadyInCart } from "../../redux/actions/cartActions";

const Cards = ({
  id,
  image,
  title,
  description,
  price,
  noFavBtn = false,
  noCartBtn = false,
  enableQty = false,
}) => {
  const inFav = useSelector((state) => state.fav.saved);
  const inCart = useSelector((state) => state.cart.inCart);
  const dispatch = useDispatch();

  const favHandler = () => {
    const favData = {
      id,
      title,
      description,
      image,
      price,
    };

    dispatch(addFav(favData)).then(
      () =>
        !inFav.includes(id) &&
        toast.dark("Product Added To Your Favorites List!"),
      dispatch(favAlready(id))
    );
  };

  const addToCartHandler = () => {
    const cartData = {
      id,
      title,
      description,
      image,
      price,
    };

    dispatch(addToCart(cartData)).then(
      () => !inCart.includes(id) && toast.dark("Hurrah! Added To Cart"),
      dispatch(alreadyInCart(id))
    );
  };

  return (
    <div className="singleItem">
      {!noFavBtn && (
        <img
          src={favSelect}
          alt="favButton"
          className="favBtn"
          style={{
            background: inFav.includes(id) ? "#36FC72" : "none",
            borderRadius: inFav.includes(id) ? "50%" : "0px",
          }}
          onClick={favHandler}
        />
      )}
      <img src={image} alt={title} className="itemImage" />
      <p className="title">{title.substring(0, 80)}</p>
      <p className="desc">{description.substring(0, 140)}</p>
      <p className="price">price: ${price}</p>
      <br />
      {enableQty && (
        <div className="enableQtyClass">
          <label className="quantity-widget">
            <input
              className="quantity-widget__range"
              type="range"
              value="1"
              min="1"
              max="5"
              step="1"
            />

            <span className="quantity-widget__text">1</span>
            <span
              aria-hidden="true"
              className="quantity-widget__sign quantity-widget__sign--minus"
            >
              -
            </span>
            <span
              aria-hidden="true"
              className="quantity-widget__sign quantity-widget__sign--plus"
            >
              +
            </span>
          </label>
        </div>
      )}
      {!noCartBtn && <button onClick={addToCartHandler}>Add To Cart</button>}
    </div>
  );
};

export default Cards;
