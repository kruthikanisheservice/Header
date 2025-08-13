import React from "react";
import profile from "../assets/Propage.png";
import "./Login.css"; 

const Login = () => {
  return (
    <div className="login-btn">
      <img src={profile} alt="Profile Icon" className="login-icon" />
      <a href="#" className="login-text">Login</a>
    </div>
  );
};

export default Login;
