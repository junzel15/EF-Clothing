import React from "react";
import "./Home.css";
import product1Image from "../images/product1.png";
import bannerImage from "../images/banner.jpg";

const Home = () => {
  return (
    <div>
      <section className="home-banner">
        <img src={bannerImage} alt="Banner" />
        <div className="banner-content">
          <h1>Welcome to EF Clothing</h1>
          <button className="cta-button">Shop Now</button>
        </div>
      </section>

      <section className="home-content">
        <div className="featured-products">
          <div className="product-card">
            <img src={product1Image} alt="Product 1" /> <h3>Plain T-Shirts</h3>
            <p>3 in 1</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
