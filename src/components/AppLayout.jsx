import { Link } from "react-router-dom";
import { 
    getProfile,
    getLevel,
    getSelectedAvatar
} from "../utils/profile";

export default function AppLayout({ children }) {
  const profile = getProfile();
  const level = getLevel(profile.totalXp);
  const selectedAvatar = getSelectedAvatar();

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <h1 className="logo">
          Edu<span>Quest</span>
        </h1>
        <p className="tagline">Learn • Play • Grow</p>

        <div className="avatar-card">
          <div className="avatar">{selectedAvatar.icon}</div>
          <h2>{level}</h2>
          <p>{profile.totalXp} XP</p>
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