import React from "react";
import Cards from "../../components/cards/Cards";
import { useSelector } from "react-redux";
import "./Favorite.css";
import { useNavigate } from "react-router-dom";

const Favorite = () => {
  const navigate = useNavigate();
  const favList = useSelector((state) => state.fav.favList);
  return (
    <div className="mainFavClass">
      {favList.length != 0 &&
        favList.map((product) => (
          <Cards
            id={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
            price={product.price}
          />
        ))}
    </div>
  );
};

export default Favorite;
