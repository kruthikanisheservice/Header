
const Logo = () => {
  return (
    <div style={{
      display:"flex",alignItems:"center",gap:"10px"
    }}>
      <div
        style={{
          backgroundColor: "darkcyan",borderRadius: "50%",width: "35px",height: "35px"
        }}
      ></div>
      <div
        style={{
          fontWeight: 'bold',color: 'black',
        }}
      >
        Logo
      </div>
    </div>
  );
};

export default Logo;
