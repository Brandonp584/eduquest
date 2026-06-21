import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import { addQuestResult, getProfile } from "../utils/profile";
import { getLevel } from "../utils/levels";

export default function Results() {
  const location = useLocation();
  const result = location.state;

  useEffect(() => {
    if (result) {
      addQuestResult(
        result.questId,
        result.xpReward,
        result.coinReward || 5
      );
    }
  }, [result]);

  if (!result) {
    return (
      <AppLayout>
        <section className="quests-section">
          <h1>No Results Found</h1>
          <p>Please complete a quest first.</p>

          <Link className="primary-btn" to="/">
            Back Home
          </Link>
        </section>
      </AppLayout>
    );
  }

  const profile = getProfile();
  const level = getLevel(profile.totalXp);

  const percentage = Math.round(
    (result.score / result.total) * 100
  );

  let badge = "⭐";
  let title = "Great Job!";
  let message = "Keep learning and growing.";

  if (percentage === 100) {
    badge = "🏆";
    title = "Perfect Score!";
    message =
      "Amazing work! You answered every question correctly.";
  } else if (percentage >= 70) {
    badge = "🌟";
    title = "Fantastic Effort!";
    message =
      "You did really well and earned lots of rewards.";
  }

  return (
    <AppLayout>
      <section className="results-page">
        <div className="results-hero">
          <div className="results-badge">
            {badge}
          </div>

          <h1>{title}</h1>

          <p className="results-message">
            {message}
          </p>
        </div>

        <div className="results-stats">
          <div className="result-card">
            <span>📚</span>
            <strong>
              {result.score}/{result.total}
            </strong>
            <p>Score</p>
          </div>

          <div className="result-card">
            <span>🎯</span>
            <strong>{percentage}%</strong>
            <p>Accuracy</p>
          </div>

          <div className="result-card">
            <span>⭐</span>
            <strong>{result.xpReward}</strong>
            <p>XP Earned</p>
          </div>

          <div className="result-card">
            <span>🪙</span>
            <strong>
              {result.coinReward || 5}
            </strong>
            <p>Coins Earned</p>
          </div>
        </div>

        <div className="results-profile">
          <h2>Student Progress 👤</h2>

          <p>
            <strong>Level:</strong> {level}
          </p>

          <p>
            <strong>Total XP:</strong>{" "}
            {profile.totalXp}
          </p>

          <p>
            <strong>Quests Solved:</strong>{" "}
            {profile.questsSolved}
          </p>
        </div>

        <div className="results-actions">
          <Link
            className="primary-btn"
            to={`/quest/${result.questId}`}
          >
            Retry Quest
          </Link>

          <Link
            className="primary-btn"
            to="/"
          >
            Choose Another Quest
          </Link>
        </div>
      </section>
    </AppLayout>
  );
}