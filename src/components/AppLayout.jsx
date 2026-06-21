import { Link } from "react-router-dom";

export default function AppLayout({ children }) {
  return (
    <main className="app-shell">
      <aside className="sidebar">
        <h1 className="logo">
          Edu<span>Quest</span>
        </h1>
        <p className="tagline">Learn • Play • Grow</p>

        <div className="avatar-card">
          <div className="avatar">🧙‍♂️</div>
          <h2>Explorer</h2>
          <p>Level 1</p>
        </div>

        <nav className="side-nav">
          <Link to="/">🏠 Home</Link>
          <Link to="/profile">👤 Profile</Link>
          <Link to="/">🏆 Achievements</Link>
        </nav>
      </aside>

      <section className="main-content">{children}</section>
    </main>
  );
}