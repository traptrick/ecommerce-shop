import React, { useState } from "react";
import "./Cards.css";
import favSelect from "../../assets/favselect.svg";
import { useDispatch, useSelector } from "react-redux";
import { addFav, favAlready } from "../../redux/actions/favoriteActions";
import { toast } from "react-toastify";

const Cards = ({ id, image, title, description, price, noFavBtn = false }) => {
  const inFav = useSelector((state) => state.fav.saved);
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
      <button>Add To Cart</button>
    </div>
  );
};

export default Cards;
