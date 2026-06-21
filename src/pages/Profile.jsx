import AppLayout from "../components/AppLayout";
import { getProfile, getLevel } from "../utils/profile";

export default function Profile() {
  const profile = getProfile();
  const level = getLevel(profile.totalXp);

  const nextLevelXp =
    profile.totalXp >= 500 ? 500 :
    profile.totalXp >= 250 ? 500 :
    profile.totalXp >= 100 ? 250 :
    100;

  const progressPercent = Math.min(
    Math.round((profile.totalXp / nextLevelXp) * 100),
    100
  );

  return (
    <AppLayout>
      <section className="quests-section">
        <h1>Student Profile 👤</h1>
        <p>Your EduQuest learning progress.</p>

        <div className="profile-card">
          <div className="avatar">🧙‍♂️</div>

          <h2>{level}</h2>
          <p>⭐ {profile.totalXp} XP</p>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <p>
            Progress to next level: {progressPercent}%
          </p>
        </div>

        <div className="profile-stats">
          <div>
            <h3>{profile.questsSolved}</h3>
            <p>Quests Solved</p>
          </div>

          <div>
            <h3>{profile.completedQuests.length}</h3>
            <p>Completed Quests</p>
          </div>

          <div>
            <h3>{profile.totalXp}</h3>
            <p>Total XP</p>
          </div>
        </div>

        <h2>Achievements 🏆</h2>

        <div className="achievement-grid">
          <div className={profile.questsSolved >= 1 ? "achievement unlocked" : "achievement"}>
            <span>🌟</span>
            <h3>First Quest</h3>
            <p>Complete your first quest.</p>
          </div>

          <div className={profile.totalXp >= 100 ? "achievement unlocked" : "achievement"}>
            <span>🧭</span>
            <h3>Adventurer</h3>
            <p>Earn 100 XP.</p>
          </div>

          <div className={profile.totalXp >= 250 ? "achievement unlocked" : "achievement"}>
            <span>📚</span>
            <h3>Scholar</h3>
            <p>Earn 250 XP.</p>
          </div>
        </div>

        <h2>Completed Quests ✅</h2>

        {profile.completedQuests.length === 0 ? (
          <p>No quests completed yet.</p>
        ) : (
          <ul>
            {profile.completedQuests.map((questId) => (
              <li key={questId}>{questId}</li>
            ))}
          </ul>
        )}
      </section>
    </AppLayout>
  );
}