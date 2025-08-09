import React from 'react'; 
import searchIcon from "../assets/search-icon.png";
import Setting from "../assets/setting.png";

const Search = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '0px',
        border: '1px solid #ccc',
          borderRadius: '10px',
          padding: '5px 10px',
          width: '250px',
          height:"25px",
          alignItems:"center",
          flex:"0.5",
          backgroundColor:"lightgrey"

      }}
    >
      
        <img
          src={searchIcon}
          alt="search"
          style={{ width: '20px', height: '20px', marginRight: '10px' }}
        />
        <input
          type="text"
          placeholder="Search Services"
          style={{
            border: 'none',
            outline: 'none',
            width: '100%',
            fontSize: '14px',
            backgroundColor:"transparent",
            color:'black',
          }}
        />
        <img
        src={Setting}
        alt="Filter"
        style={{
          width:'20px',
          height:'20px',
          marginLeft:'10px'
        }}/>
      </div>

  );
};

export default Search;
