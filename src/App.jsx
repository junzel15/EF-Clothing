import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import Home from "./views/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./App.css";
import Login from "./components/Login";
import Contact from "./views/Contact";
import About from "./views/About";
import Products from "./views/Products";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
            exact={route.exact}
          />
        ))}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
