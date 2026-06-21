import { Link } from "react-router-dom";

export default function QuestCard({ quest }) {
  return (
    <article className="quest-card">
      <div className="quest-image">
        <span className="quest-emoji">🐨</span>

        <div className="quest-tags">
          <span className="tag year">{quest.yearLevel}</span>
          <span className="tag subject">{quest.subject}</span>
        </div>
      </div>

      <div className="quest-content">
        <h3>{quest.title}</h3>
        <p>{quest.description}</p>

        <div className="quest-footer">
          <span className="xp">⭐ {quest.xpReward} XP</span>

          <Link className="start-btn" to={`/quest/${quest.id}`}>
            Start Quest →
          </Link>
        </div>
      </div>
    </article>
  );
}