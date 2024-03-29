import React, { useState, useEffect } from "react";
import Cards from "../../components/cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import "./Favorite.css";
import { clrFav } from "../../redux/actions/favoriteActions";
import clearFavIcon from "../../assets/clearFav.svg";
import { Link } from "react-router-dom";

const Favorite = () => {
  const dispatch = useDispatch();
  const favList = useSelector((state) => state.fav.favList);
  const [noFavBtn, setNoFavBtn] = useState(false);
  useEffect(() => {
    setNoFavBtn(true);
  }, []);

  const clearFavFunc = () => {
    dispatch(clrFav());
  };

  return (
    <div className="mainFavClass">
      {favList.length != 0 ? (
        favList.map((product) => (
          <Cards
            id={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
            price={product.price}
            noFavBtn={noFavBtn}
          />
        ))
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2 style={{ padding: "2px 0 10px 0" }}>
            No Items In Favorite's Section!!! Go Add Some First.
          </h2>
          <Link to="/">
            <button
              style={{ cursor: "pointer", padding: "5px", borderRadius: "5px" }}
            >
              Go To Homepage
            </button>
          </Link>
        </div>
      )}
      <button className="clearFav" onClick={clearFavFunc}>
        <img src={clearFavIcon} alt="clear favorites" />
      </button>
    </div>
  );
};

export default Favorite;
