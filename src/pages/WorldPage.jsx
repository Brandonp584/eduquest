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

export default function WorldPage() {
  const { subject } = useParams();
  const [selectedYear, setSelectedYear] = useState("Prep");

  const subjectName =
    subject.charAt(0).toUpperCase() + subject.slice(1);

  const worldQuests = quests.filter(
    (quest) =>
      quest.subject.toLowerCase() === subject.toLowerCase() &&
      quest.yearLevel === selectedYear
  );

  return (
    <AppLayout>
      <section className="quests-section">
        <h1>{subjectName} World 🌎</h1>
        <p>Choose a year level and start learning.</p>

        <div className="year-tabs">
          {yearLevels.map((year) => (
            <button
              key={year}
              className={
                selectedYear === year
                  ? "year-tab active"
                  : "year-tab"
              }
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </button>
          ))}
        </div>

        {worldQuests.length === 0 ? (
          <div className="empty-state">
            <h2>No quests yet</h2>
            <p>
              {selectedYear} {subjectName} quests are coming soon.
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
    </AppLayout>
  );
}