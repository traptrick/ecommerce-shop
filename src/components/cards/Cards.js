import React from "react";
import "./Cards.css";
import favSelect from "../../assets/favselect.svg";
import { useDispatch } from "react-redux";
import { addFav } from "../../redux/actions/favoriteActions";

const Cards = ({ id, image, title, description, price }) => {
  const dispatch = useDispatch();

  const favHandler = () => {
    const favData = {
      id,
      title,
      description,
      image,
      price,
    };
    dispatch(addFav(favData));
  };

  return (
    <div className="singleItem">
      <img src={favSelect} alt="favButton" className="favBtn" />
      <img src={image} alt={title} className="itemImage" />
      <p className="title">{title.substring(0, 80)}</p>
      <p className="desc">{description.substring(0, 140)}</p>
      <p className="price">price: ${price}</p>
      <br />
      <button onClick={favHandler}>Add To Cart</button>
    </div>
  );
};

export default Cards;
