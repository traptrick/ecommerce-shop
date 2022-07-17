import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Loader from "./utils/Loader";
import { Route, Routes } from "react-router-dom";
import Homepage from "./screens/Homepage";
import Cart from "./screens/Cart";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const apiCall = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    if (result) {
      setProducts(result.data);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Homepage products={products} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
