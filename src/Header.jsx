import React, { useState } from "react";
import Logo from "./components/Logo";
import Search from "./components/SearchBar";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/profile";
import Lang from "./components/LangChnger";
import "./head.css";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header-container">
      <div className="header-row"> 
        <Logo /> 
        <div className="search-wrapper">
          <Search />
        </div>
        <div className="actions-wrapper">
          {!isLoggedIn ? (
            <>
              <Login onLogin={() => setIsLoggedIn(true)} />
              <Register />
            </>
          ) : (
            <Profile />
          )}
          <Lang />
        </div>
      </div>
    </div>
  );
};

export default Header;
