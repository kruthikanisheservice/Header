import React from "react";
import profileIcon from "../assets/Propage.png";
const Profile = () => {
  return (
    <div
      style={{
        border: "1.5px solid black",
        padding: "6px 12px",
        borderRadius: "5px",
        backgroundColor: "darkslategrey",
        cursor: "pointer",
        display: "flex",
        gap: "8px",
        alignItems: "center",
      }}
    >
      <img
        src={profileIcon}
        style={{
          width: "25px",
          height: "25px",
          marginLeft: "10px",
          borderRadius:"50%"
        }}
        alt="Profile"
      />
        Profile
    </div>
  );
};

export default Profile;
