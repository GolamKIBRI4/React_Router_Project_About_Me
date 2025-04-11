import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError() as Error;
  const navigator=useNavigate()
  return (
    <div  style={{display:"flex", flexDirection:"column" ,alignItems:"center"}}>
      <h3>An error occured</h3>
      <p>{error.name}</p>
      <button className="btn" onClick={()=>{navigator('/')}} >Go back Home</button>
    </div>
  );
};

export default Error;
