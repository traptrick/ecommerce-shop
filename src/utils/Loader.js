import React from "react";
import Walk from "../assets/Walk.gif";

const Loader = () => {
  const mystyle = {
    display: "flex",
    justifyContent: "center",
    padding: "1rem 0",
  };

  return (
    <div style={mystyle}>
      <img src={Walk} alt="Loading....." />
    </div>
  );
};

export default Loader;
