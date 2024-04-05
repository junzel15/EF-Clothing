import React, { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaUserPlus,
  FaQuestionCircle,
  FaGoogle,
  FaFacebook,
  FaApple,
} from "react-icons/fa";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      "Login submitted with email:",
      email,
      "and password:",
      password
    );

    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">
            <FaEnvelope /> Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <FaLock /> Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="additional-options">
          <div className="forgot-password">
            <a href="#">
              <FaQuestionCircle /> Forgot Password?
            </a>
          </div>
          <div className="remember-me">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>
          </div>
          <div className="social-login-options">
            <button className="google-login">
              <FaGoogle /> Continue with Google
            </button>
            <button className="facebook-login">
              <FaFacebook /> Continue with Facebook
            </button>
            <button className="apple-login">
              <FaApple /> Continue with Apple ID
            </button>
          </div>
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="create-account">
        <p>
          Don't have an account?{" "}
          <a href="#">
            <FaUserPlus /> Create Account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
