import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const RootLayout = () => {
  return (
    <div className="app-layout">
      <div className="navBar">
        <Navbar />
      </div>
      
      <Outlet />
    </div>
  );
};

export default RootLayout;
 