import logo from "../assets/neutral.png";
import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <img style={{ width: "60px", height: "auto" }} src={logo}></img>
      <ul>
        <NavLink to={"/"}>
          <li>Home</li>
        </NavLink>
        <NavLink to={"/Products"}>
          <li>Products</li>
        </NavLink>

        <NavLink to={"/About"}>
          <li>About</li>
        </NavLink>
        <NavLink to={"/Contact"}>
          <li>Contact</li>
        </NavLink>
        <NavLink to={"/jobs"}>
          <li>Jobs</li>
        </NavLink>
      </ul>
      <button onClick={() => navigate("/About", { replace: true })}>
        Get Started
      </button>
    </div>
  );
};

export default Navbar;
