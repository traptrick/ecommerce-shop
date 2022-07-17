import React from "react";
import Cards from "../../components/cards/Cards";
import "./Homepage.css";

const Homepage = ({ products }) => {
  return (
    <div className="mainDiv">
      {products &&
        products.map((product) => (
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

export default Homepage;
