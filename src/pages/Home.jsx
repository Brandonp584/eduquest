import { Link } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import { getProfile } from "../utils/profile";
import { getLevel } from "../utils/levels";
import { getRecommendations } from "../utils/recommendations";

export default function Home() {
  const profile = getProfile();
  const level = getLevel(profile.totalXp);
  const recommendations = getRecommendations(profile);
  const topRecommendation = recommendations[0];

  return (
    <AppLayout>
      <header className="hero home-hero">
        <div>
          <span className="eyebrow">Welcome back, learner ✨</span>
          <h2>Hi, Explorer! 👋</h2>
          <p>Choose a world, complete quests, earn coins, and unlock rewards.</p>

          <div className="hero-actions">
            <Link to="/profile" className="primary-btn">
              View Profile
            </Link>
          </div>
        </div>

        <div className="xp-card">
          <strong>⭐ {profile.totalXp} XP</strong>
          <span>🪙 {profile.coins} Coins</span>
          <span>{level}</span>
        </div>
      </header>

      <section className="home-dashboard">
        <div className="dashboard-stat">
          <span>📚</span>
          <strong>{profile.questsSolved}</strong>
          <p>Quests Completed</p>
        </div>

        <div className="dashboard-stat">
          <span>⭐</span>
          <strong>{profile.totalXp}</strong>
          <p>Total XP</p>
        </div>

        <div className="dashboard-stat">
          <span>🪙</span>
          <strong>{profile.coins}</strong>
          <p>Coins</p>
        </div>

        <div className="dashboard-stat">
          <span>🔥</span>
          <strong>{profile.streak || 0}</strong>
          <p>Daily Streak</p>
        </div>
      </section>

      <section className="world-heading">
        <h2>Choose Your Learning World 🌎</h2>
        <p>Pick a subject world and start your next adventure.</p>
      </section>

      {topRecommendation && (
        <section className="recommendation-banner">
          <div>
            <span className="eyebrow">
              Today's Recommended Adventure 🧠
            </span>

            <h2>
              {topRecommendation.icon} {topRecommendation.title}
            </h2>

            <p>{topRecommendation.reason}</p>
          </div>

          <Link
            to={`/world/${topRecommendation.id}`}
            className="primary-btn"
          >
            Start Recommended World
          </Link>
        </section>
      )}

      <section className="world-panel">
        <Link to="/world/maths" className="world-card maths-world">
          <span>🏰</span>
          <strong>Maths Kingdom</strong>
          <small>Prep → Year 7</small>
        </Link>

        <Link to="/world/reading" className="world-card reading-world">
          <span>🌳</span>
          <strong>Reading Forest</strong>
          <small>Prep → Year 7</small>
        </Link>

        <Link to="/world/spelling" className="world-card spelling-world">
          <span>✏️</span>
          <strong>Spelling Valley</strong>
          <small>Prep → Year 7</small>
        </Link>

        <Link to="/world/science" className="world-card science-world">
          <span>🚀</span>
          <strong>Science Space</strong>
          <small>Prep → Year 7</small>
        </Link>
      </section>
    </AppLayout>
  );
}