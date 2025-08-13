import React from 'react'; 
import searchIcon from "../assets/search-icon.png";
import Setting from "../assets/setting.png";
import "./SearchBar.css";

const Search = () => {
  return (
    <div className="search-bar-container">
      <img
        src={searchIcon}
        alt="search"
        className="search-icon"
      />
      <input
        type="text"
        placeholder="Search Services"
        className="search-input"
      />
      <img
        src={Setting}
        alt="Filter"
        className="filter-icon"
      />
    </div>
  );
};

export default Search;
