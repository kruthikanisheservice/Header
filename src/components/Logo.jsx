import logo from "../assets/LogoNish.jpg";
import "./Logo.css";
const Logo = () => {
  return (
    <div className="logo"
    style={{
      display:"flex",alignItems:"center",gap:"10px",
      
    }}>
      <img src={logo} style={{
        width:"30px",height:"30px",
        border:"1px solid black",borderRadius:"50%",
        
      }} />
    </div>
  );
};

export default Logo;
