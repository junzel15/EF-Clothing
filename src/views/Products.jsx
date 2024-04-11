import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import tshirtImage from "../images/tshirt.png";
import jeansImage from "../images/tshirt2.png";
import sneakersImage from "../images/tshirt3.png";
import "./Products.css";

const Products = () => {
  const initialProducts = [
    { id: 1, name: "T-Shirt", price: 20, image: tshirtImage },
    { id: 2, name: "T-Shirt", price: 30, image: jeansImage },
    { id: 3, name: "T-Shirt", price: 50, image: sneakersImage },
  ];

  const [products] = useState(initialProducts);

  return (
    <div className="products-container">
      <h1>Clothing Products</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button>
              <FaShoppingCart /> Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
