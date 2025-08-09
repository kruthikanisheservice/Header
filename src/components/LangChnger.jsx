import React from "react";

const Lang = ({style}) => {
  return (
    <div style={{
      border: "1px solid black",
      padding: "6px 12px",
      borderRadius: "5px",
      backgroundColor: "white",
      display: "flex",
      alignItems: "center",
      height: "36px",
      boxSizing: "border-box"
    }}>
      <select
        style={{
          backgroundColor: 'white',
          color: 'black',
          border: 'none', 
          borderRadius: '5px',
          padding: "6px 12px",
          fontSize: '14px',
          outline: 'none',
          cursor: 'pointer'
        }}
      >
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
        <option value="Kannada">Kannada</option>
        <option value="Telugu">Telugu</option>
        <option value="Urdu">Urdu</option>
      </select>
    </div>
  );
}

export default Lang;
