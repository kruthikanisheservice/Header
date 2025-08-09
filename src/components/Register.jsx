import React from "react";
import register from "../assets/Register.png";
const Register=()=>{
    return(
        
        <div style={{
            border:"1.5px solid black", 
        padding: "6px 12px",
        borderRadius: "5px",
        backgroundColor: "darkslategrey",
        cursor: "pointer",
        display:"flex",
          gap:"8px",
          alignItems:"center",
        }}>
        <img src={register}
        style={{
          width:'25px',
          height:'25px',
          marginLeft:'10px',
          // backgroundColor:"white"
        }}/>
        <a style={{
            color:"white"
        }}
        href="#" >Register</a>
        </div>
        
    );
}
export default Register;