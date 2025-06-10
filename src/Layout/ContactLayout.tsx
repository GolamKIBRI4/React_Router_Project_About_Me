import { Outlet } from "react-router-dom";
import Contact from "../pages/Contact";

const ContactLayout = () => {
  return (
    <div className="page-layout">
      <aside className="sidebar">
      <Contact />
      </aside>
      <main className="main-content">
      <Outlet />
      </main>  
    </div>
  );
};

export default ContactLayout;
