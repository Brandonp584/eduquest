import AppLayout from "../components/AppLayout";
import { getProfile } from "../utils/profile";
import { getLevel } from "../utils/levels";
import { getSubjectProgress } from "../utils/progress";
import { getCollectionStats } from "../utils/collections";
import { getLearningAnalytics } from "../utils/analytic";
import { getRecommendations } from "../utils/recommendations";
import { getWeeklyReport } from "../utils/weeklyReport";
import { getWeakTopics } from "../utils/weakTopics";

export default function ParentDashboard() {
  const profile = getProfile();
  const level = getLevel(profile.totalXp);
  const subjectProgress = getSubjectProgress(profile);
  const collectionStats = getCollectionStats(profile);
  const analytics = getLearningAnalytics(profile);
  const recommendations = getRecommendations(profile);
  const weeklyReport = getWeeklyReport(profile);
  const weakTopics = getWeakTopics(profile);

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
          <h2>Weekly Learning Report 📈</h2>

          <div className="weekly-report-grid">
            <div className="weekly-report-card">
              <span>📚</span>
              <strong>{weeklyReport.questsThisWeek}</strong>
              <p>Quests This Week</p>
            </div>

            <div className="weekly-report-card">
              <span>⭐</span>
              <strong>{weeklyReport.xpThisWeek}</strong>
              <p>XP This Week</p>
            </div>

            <div className="weekly-report-card">
              <span>🪙</span>
              <strong>{weeklyReport.coinsThisWeek}</strong>
              <p>Coins This Week</p>
            </div>
          </div>
        </section>

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
          <h2>Learning Analytics 📈</h2>

          <div className="analytics-grid">
            <div className="analytics-card">
              <span>💪</span>
              <h3>Strengths</h3>

              {analytics.strengths.length === 0 ? (
                <p>No strong subjects yet. Keep completing quests.</p>
              ) : (
                <ul>
                  {analytics.strengths.map((subject) => (
                    <li key={subject.id}>
                      {subject.icon} {subject.name} — {subject.percentage}%
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="analytics-card">
              <span>📚</span>
              <h3>Needs Practice</h3>

              {analytics.needsPractice.length === 0 ? (
                <p>No practice areas yet.</p>
              ) : (
                <ul>
                  {analytics.needsPractice.map((subject) => (
                    <li key={subject.id}>
                      {subject.icon} {subject.name} — {subject.percentage}%
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="analytics-card">
              <span>🏆</span>
              <h3>Best Subject</h3>

              {analytics.bestSubject ? (
                <p>
                  {analytics.bestSubject.icon} {analytics.bestSubject.name} —{" "}
                  {analytics.bestSubject.percentage}%
                </p>
              ) : (
                <p>No quests completed yet.</p>
              )}
            </div>

            <div className="analytics-card">
              <span>🎯</span>
              <h3>Focus Area</h3>

              {analytics.lowestSubject ? (
                <p>
                  {analytics.lowestSubject.icon} {analytics.lowestSubject.name} —{" "}
                  {analytics.lowestSubject.percentage}%
                </p>
              ) : (
                <p>No focus area yet.</p>
              )}
            </div>
          </div>
        </section>

        <section className="parent-section">
          <h2>Weak Topic Detection 🎯</h2>

          {weakTopics.length === 0 ? (
            <p>No weak topics detected yet. Complete more quests to build learning insights.</p>
          ) : (
            <div className="weak-topic-grid">
              {weakTopics.map((topic) => (
                <div key={topic.topic} className="weak-topic-card">
                  <span>🎯</span>
                  <h3>{topic.topic}</h3>
                  <p>{topic.mistakes} mistakes found</p>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="parent-section">
          <h2>Recommended Learning 🧠</h2>

          <div className="recommendation-grid">
            {recommendations.map((recommendations) => (
              <div 
                key={recommendations.id}
                className="recommendation-card"
              >
                <span>{recommendations.icon}</span>

                <h3>{recommendations.title}</h3>

                <p>{recommendations.reason}</p>
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