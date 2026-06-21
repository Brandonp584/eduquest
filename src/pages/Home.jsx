import AppLayout from "../components/AppLayout";
import QuestCard from "../components/QuestCard";
import { quests } from "../data/quests";

export default function Home() {
  return (
    <AppLayout>
      <header className="hero">
        <div>
          <h2>Hi, Explorer! 👋</h2>
          <p>Choose your next learning adventure.</p>
        </div>

        <div className="xp-card">
          <strong>⭐ 0 XP</strong>
          <span>Level 1 Explorer</span>
        </div>
      </header>

      <section className="map-panel">
        <div className="map-path">
          <span className="map-node maths">Maths Kingdom</span>
          <span className="map-node reading">Reading Forest</span>
          <span className="map-node spelling">Spelling Valley</span>
          <span className="map-node science">Science Space</span>
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