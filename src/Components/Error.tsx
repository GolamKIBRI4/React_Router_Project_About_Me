import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError() as Error;
  const navigator=useNavigate()
  return (
    <div>
      <h3>An error occured</h3>
      <p>{error.message}</p>
      <button onClick={()=>{navigator('/')}}>Go back Home</button>
    </div>
  );
};

export default Error;
