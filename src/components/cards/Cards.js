import React from "react";
import "./Cards.css";
import favSelect from "../../assets/favselect.svg";

const Cards = ({ image, title, description, price }) => {
  return (
    <div className="singleItem">
      <img src={favSelect} alt="favButton" className="favBtn" />
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
