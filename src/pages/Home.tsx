
const Home = () => {
  return  <div className="page-layout">
  <aside className="sidebar">
    {/* Example sidebar content */}
    <h3>Navigation</h3>
    <ul>
      <li>Link A</li>
      <li>Link B</li>
    </ul>
  </aside>

  <main className="main-content">
    {/* Example main content */}
    <h1>Welcome to Home</h1>
    <p>Here's the main content area.</p>
    <div style={{ height: "2000px" }}>Scroll me</div>
  </main>
</div>;
};

export default Home;
