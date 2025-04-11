import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <h1>404| Page Not Found</h1>
      <br />
      <button
        className="btn"
        onClick={() => {
          navigate("/");
        }}
      >
        {" "}
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
