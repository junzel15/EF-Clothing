import React from "react";
import {
  FaHome,
  FaShoppingCart,
  FaUser,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaMapMarker,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <ul>
            <li>
              <a href="/">
                <FaHome />
                Home
              </a>
            </li>
            <li>
              <a href="/products">
                <FaShoppingCart />
                Products
              </a>
            </li>
            <li>
              <a href="/about">
                <FaUser />
                About Us
              </a>
            </li>
            <li>
              <a href="/contact">
                <FaEnvelope />
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="social-icons">
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="contact-info">
        <div className="address">
          <FaMapMarker />
          <p>Pagadian City, Zambonga Del Sur, Philippines, 7016</p>
        </div>
        <div className="email">
          <FaEnvelope />
          <p>efclothing@gmail.com</p>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 EF Clothing. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
