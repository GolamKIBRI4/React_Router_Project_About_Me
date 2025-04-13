import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const RootLayout = () => {
  return (
    <div className="app-layout">
      <div className="navBar">
        <Navbar />
      </div>

      <div className="content-container">
        <aside className="sidebar">
          {/* You can put static or route-aware sidebar content here */}
          <p>Sidebar</p>
          <p>More items...</p>
          <p>Sidebar</p>
          <p>More items...</p>
          <p>Sidebar</p>
          <p>More items...</p>
          <p>Sidebar</p>
          <p>More items...</p>
          <p>Sidebar</p>
          <p>More items...</p>
          <p>Sidebar</p>
          <p>More items...</p>
          <p>Sidebar</p>
          <p>More items...</p>
          <p>Sidebar</p>
          <p>More items...</p>v<p>Sidebar</p>
          <p>More items...</p>
          <p>Sidebar</p>
          <p>More items...</p>v<p>Sidebar</p>
          <p>More items...</p> <p>Sidebar</p>
          <p>More items...</p>
          <p>Sidebar</p>
          <p>More items...</p>v
        </aside>

        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
