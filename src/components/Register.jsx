import React from "react";
import register from "../assets/Register.png";
import "./Register.css"; 

const Register = () => {
  return (
    <div className="register-btn">
      <img src={register} alt="Register Icon" className="register-icon" />
      <a href="#" className="register-text">Register</a>
    </div>
  );
};

export default Register;
