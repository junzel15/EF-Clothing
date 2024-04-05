import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaShoppingCart,
  FaUser,
  FaEnvelope,
  FaSignInAlt,
} from "react-icons/fa";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="logo">
        <Link to="/">EF Clothing</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">
            <FaHome />
            Home
          </Link>
        </li>
        <li>
          <Link to="/products">
            <FaShoppingCart />
            Products
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FaUser />
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <FaEnvelope />
            Contact
          </Link>
        </li>
      </ul>

      <div className="login-bar">
        <Link to="/login">
          <FaSignInAlt />
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
