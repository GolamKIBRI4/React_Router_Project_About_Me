import { Outlet } from "react-router-dom";
import Contact from "../pages/Contact";

const ContactLayout = () => {
  return (
    <div className="contact-container">
      <Contact />
      <Outlet />
    </div>
  );
};

export default ContactLayout;
