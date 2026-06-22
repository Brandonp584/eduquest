import AppLayout from "../components/AppLayout";
import { getProfile } from "../utils/profile";
import { getLevel } from "../utils/levels";
import { getSubjectProgress } from "../utils/progress";
import { getCollectionStats } from "../utils/collections";

export default function ParentDashboard() {
  const profile = getProfile();
  const level = getLevel(profile.totalXp);
  const subjectProgress = getSubjectProgress(profile);
  const collectionStats = getCollectionStats(profile);

  return (
    <AppLayout>
      <section className="parent-page">
        <div className="parent-hero">
          <div>
            <span className="eyebrow">Parent View 👨‍👩‍👧</span>
            <h1>Learning Dashboard</h1>
            <p>
              A simple overview of student progress, rewards, and learning
              activity.
            </p>
          </div>
        </div>

        <div className="parent-summary-grid">
          <div className="parent-summary-card">
            <span>⭐</span>
            <strong>{profile.totalXp}</strong>
            <p>Total XP</p>
          </div>

          <div className="parent-summary-card">
            <span>🪙</span>
            <strong>{profile.coins}</strong>
            <p>Coins</p>
          </div>

          <div className="parent-summary-card">
            <span>📚</span>
            <strong>{profile.questsSolved}</strong>
            <p>Quests Solved</p>
          </div>

          <div className="parent-summary-card">
            <span>🎓</span>
            <strong>{level}</strong>
            <p>Current Level</p>
          </div>
        </div>

        <section className="parent-section">
          <h2>Learning Progress 📊</h2>

          <div className="subject-progress-grid">
            {subjectProgress.map((subject) => (
              <div key={subject.id} className="subject-progress-card">
                <span>{subject.icon}</span>

                <div>
                  <h3>{subject.name}</h3>
                  <p>
                    {subject.completedCount} / {subject.totalCount} quests
                    completed
                  </p>

                  <div className="subject-progress-bar">
                    <div
                      className="subject-progress-fill"
                      style={{ width: `${subject.percentage}%` }}
                    />
                  </div>

                  <strong>{subject.percentage}%</strong>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="parent-section">
          <h2>Collections & Motivation 🏅</h2>

          <div className="collection-grid">
            <div className="collection-card">
              <span>🐾</span>
              <h3>Pets Owned</h3>
              <strong>
                {collectionStats.petsOwned} / {collectionStats.totalPets}
              </strong>
            </div>

            <div className="collection-card">
              <span>🎨</span>
              <h3>Themes Owned</h3>
              <strong>
                {collectionStats.themesOwned} / {collectionStats.totalThemes}
              </strong>
            </div>

            <div className="collection-card">
              <span>🏆</span>
              <h3>Achievements</h3>
              <strong>
                {collectionStats.achievementsUnlocked} /{" "}
                {collectionStats.totalAchievements}
              </strong>
            </div>

            <div className="collection-card">
              <span>🌎</span>
              <h3>Worlds Completed</h3>
              <strong>
                {collectionStats.worldsCompleted} / {collectionStats.totalWorlds}
              </strong>
            </div>
          </div>
        </section>
      </section>
    </AppLayout>
  );
}