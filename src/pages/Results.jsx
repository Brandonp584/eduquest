import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import { addQuestResult, getProfile, getLevel } from "../utils/profile";

export default function Results() {
  const location = useLocation();
  const result = location.state;

  useEffect(() => {
    if (result) {
      addQuestResult(result.questId, result.xpReward, result.coinReward || 5);
    }
  }, [result]);

  if (!result) {
    return (
      <AppLayout>
        <section className="quests-section">
          <h1>No Results Found</h1>
          <p>Please complete a quest first.</p>
          <Link className="start-btn" to="/">
            Back to Home
          </Link>
        </section>
      </AppLayout>
    );
  }

  const profile = getProfile();
  const level = getLevel(profile.totalXp);
  const percentage = Math.round((result.score / result.total) * 100);

  return (
    <AppLayout>
      <section className="quests-section">
        <h1>Quest Complete! 🎉</h1>

        <h2>{result.title}</h2>

        <p>
          Score: {result.score} / {result.total}
        </p>

        <p>Accuracy: {percentage}%</p>
        <p>XP Earned: {result.xpReward}</p>
        <p>Coins Earned: 🪙 {result.coinReward || 5}</p>

        <h3>Student Progress</h3>
        <p>Level: {level}</p>
        <p>Total XP: {profile.totalXp}</p>
        <p>Quests Solved: {profile.questsSolved}</p>

        <Link className="start-btn" to="/">
          Choose Another Quest
        </Link>
      </section>
    </AppLayout>
  );
}