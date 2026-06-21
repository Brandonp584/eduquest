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

      <section className="world-panel">
        <Link to="/world/maths" className="world-card maths-world">
          <span>🏰</span>
          <strong>Maths Kingdom</strong>
        </Link>

        <Link to="/world/reading" className="world-card reading-world">
          <span>🌳</span>
          <strong>Reading Forest</strong>
        </Link>

        <Link to="/world/spelling" className="world-card spelling-world">
          <span>✏️</span>
          <strong>Spelling Valley</strong>
        </Link>

        <Link to="/world/science" className="world-card science-world">
          <span>🚀</span>
          <strong>Science Space</strong>
        </Link>
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