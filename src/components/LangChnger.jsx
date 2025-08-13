import React, { useState, useEffect, useRef } from "react";
import "./LangChang.css";

const Lang = ({ style }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("English");
  const dropdownRef = useRef(null);

  const options = ["English", "Hindi", "Kannada", "Telugu", "Urdu"];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="lang-container" style={style}>
      
      <div
        className="lang-selected"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected}
        <span className="lang-arrow">{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <div className="lang-dropdown">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className={`lang-option ${
                option === selected ? "selected" : ""
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Lang;
