import React, { useState, useEffect } from "react";
import Cards from "../../components/cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { clrCart } from "../../redux/actions/cartActions";
import clearFavIcon from "../../assets/clearFav.svg";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart.cartList);
  const [noCartBtn, setNoCartBtn] = useState(false);
  const [enableQty, setEnableQty] = useState(false);
  useEffect(() => {
    setNoCartBtn(true);
    setEnableQty(true);
  }, []);

  const clrCartFunc = () => {
    dispatch(clrCart());
  };

  return (
    <div className="mainCartClass">
      {cartList.length != 0 ? (
        cartList.map((product) => (
          <Cards
            id={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
            price={product.price}
            noFavBtn={true}
            noCartBtn={noCartBtn}
            enableQty={enableQty}
          />
        ))
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2 style={{ padding: "2px 0 10px 0" }}>
            Your Cart Is Empty!!! Add Products From Home-Page
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
      <button className="clearCart" onClick={clrCartFunc}>
        <img src={clearFavIcon} alt="clear favorites" />
      </button>
    </div>
  );
};

export default Cart;
