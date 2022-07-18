import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Loader from "./utils/Loader";
import { Route, Routes } from "react-router-dom";
import Homepage from "./screens/homepage/Homepage";
import Favorite from "./screens/favorite/Favorite";
import CheckOut from "./screens/checkout/CheckOut";
import AccountDetails from "./screens/myaccount/AccountDetails";
import Cart from "./screens/cart/Cart";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const [products, setProducts] = useState([]);
  const apiCall = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    if (result) {
      setProducts(result.data);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      apiCall();
    }, 500);
  }, []);

  return (
    <div className="App">
      {products.length == 0 ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Homepage products={products} />} />
            <Route path="/favorites" element={<Favorite />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/myaccount" element={<AccountDetails />} />
          </Routes>
          <ToastContainer autoClose={1200} position="bottom-right" />
        </>
      )}
    </div>
  );
}

export default App;
