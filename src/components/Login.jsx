import React from "react";
import profile from "../assets/Propage.png";
const Login=()=>{
    return(
        
        <div style={{
            border:"1.5px solid black", 
        padding: "6px 12px",
        borderRadius: "5px",
        backgroundColor: "white",
        cursor: "pointer",
        marginRight:"0px",
        display:"flex",
        alignItems:"center",
        gap:"8px"

       
        }}>
        <img src={profile}
        style={{
          width:'20px',
          height:'20px',
          marginLeft:'0px',
          gap:"8px",
          
        }}/>
        <a href="#" style={{
                color:"black"
        }} >Login</a>
        </div>
        
    );
}
export default Login;