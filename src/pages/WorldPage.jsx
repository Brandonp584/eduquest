import { useState } from "react";
import { useParams } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import { quests } from "../data/quests";
import QuestCard from "../components/QuestCard";

const yearLevels = [
  "Prep",
  "Year 1",
  "Year 2",
  "Year 3",
  "Year 4",
  "Year 5",
  "Year 6",
  "Year 7",
];

const worldDetails = {
  maths: {
    title: "Maths Kingdom",
    icon: "🏰",
    description: "Practise numbers, patterns, shapes, measuring and problem solving.",
  },
  reading: {
    title: "Reading Forest",
    icon: "🌳",
    description: "Build comprehension, story understanding, sounds and reading confidence.",
  },
  spelling: {
    title: "Spelling Valley",
    icon: "✏️",
    description: "Practise letters, sounds, word patterns and spelling skills.",
  },
  science: {
    title: "Science Space",
    icon: "🚀",
    description: "Explore living things, materials, Earth, space and simple investigations.",
  },
};

export default function WorldPage() {
  const { subject } = useParams();
  const [selectedYear, setSelectedYear] = useState("Prep");

  const world = worldDetails[subject] || {
    title: "Learning World",
    icon: "🌎",
    description: "Choose a year level and start learning.",
  };

  const worldQuests = quests.filter(
    (quest) =>
      quest.subject.toLowerCase() === subject.toLowerCase() &&
      quest.yearLevel === selectedYear
  );

  return (
    <AppLayout>
      <section className="world-page">
        <div className="world-page-hero">
          <span className="world-page-icon">{world.icon}</span>

          <div>
            <span className="eyebrow">Prep → Year 7</span>
            <h1>{world.title}</h1>
            <p>{world.description}</p>
          </div>
        </div>

        <div className="year-level-card">
          <h2>Choose Your Year Level 🎒</h2>

          <div className="year-tabs">
            {yearLevels.map((year) => (
              <button
                key={year}
                className={
                  selectedYear === year ? "year-tab active" : "year-tab"
                }
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        <section className="quests-section">
          <h2>{selectedYear} Quests</h2>

          {worldQuests.length === 0 ? (
            <div className="empty-state">
              <h2>No quests yet</h2>
              <p>
                {selectedYear} {world.title} quests are coming soon.
              </p>
            </div>
          ) : (
            <div className="quest-grid">
              {worldQuests.map((quest) => (
                <QuestCard key={quest.id} quest={quest} />
              ))}
            </div>
          )}
        </section>
      </section>
    </AppLayout>
  );
}