
import React, { useState } from "react";
import Logo from "./components/Logo";
import Search from "./components/SearchBar";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/profile"; 
import Lang from "./components/LangChnger";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "10px 20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        zIndex: 1000,
        flexWrap: "wrap",
      }}
    >
     
      <div style={{ flex: "0 0 auto" }}>
        <Logo />
      </div>


      <div
        style={{
          flex: "1",
          display: "flex",
          justifyContent: "center",
          minWidth: "200px",
          margin: "10px 0",
        }}
      >
        <Search />
      </div>

 
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "flex-start",
          marginRight: "40px",
          flexShrink: "7",
        }}
        id="android-view"
      >
        {!isLoggedIn ? (
          <>
            <Login onLogin={() => setIsLoggedIn(true)} /> 
            <Register />
          </>
        ) : (
          <Profile />
        )}
        <Lang style={{ marginLeft: "-5px" }} />
      </div>
    </div>
  );
};

export default Header;
