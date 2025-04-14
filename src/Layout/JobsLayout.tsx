import { Outlet } from "react-router-dom";

const JobsLayout = () => {
  return (
    <div className="page-layout">
      <aside className="sidebar">
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
  );
};

export default JobsLayout;
