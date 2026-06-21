import { Link } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import QuestCard from "../components/QuestCard";
import { quests } from "../data/quests";
import { getProfile } from "../utils/profile";
import { getLevel } from "../utils/levels";

export default function Home() {
  const profile = getProfile();
  const level = getLevel(profile.totalXp);

  return (
    <AppLayout>
      <header className="hero">
        <div>
          <h2>Hi, Explorer! 👋</h2>
          <p>Choose your next learning adventure.</p>
        </div>

        <div className="xp-card">
          <strong>⭐ {profile.totalXp} XP</strong>
          <span>🪙 {profile.coins} Coins</span>
          <span>{level}</span>
        </div>
      </header>

      <section className="map-panel">
        <div className="map-path">
          <span className="map-icon castle-icon">🏰</span>
          <span className="map-icon tree-icon">🌳</span>
          <span className="map-icon mountain-icon">⛰️</span>
          <span className="map-icon rocket-icon">🚀</span>

          <Link to="/world/maths" className="map-node maths">
            Maths Kingdom
          </Link>

          <Link to="/world/reading" className="map-node reading">
            Reading Forest
          </Link>

          <Link to="/world/spelling" className="map-node spelling">
            Spelling Valley
          </Link>

          <Link to="/world/science" className="map-node science">
            Science Space
          </Link>
        </div>
      </section>

      <section className="quests-section">
        <h2>Available Quests ✨</h2>

        <div className="quest-grid">
          {quests.map((quest) => (
            <QuestCard key={quest.id} quest={quest} />
          ))}
        </div>
      </section>
    </AppLayout>
  );
}