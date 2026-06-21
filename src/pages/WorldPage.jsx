import { useParams } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import { quests } from "../data/quests";
import QuestCard from "../components/QuestCard";

export default function WorldPage() {
  const { subject } = useParams();

  const worldQuests = quests.filter(
    (quest) =>
      quest.subject.toLowerCase() === subject.toLowerCase()
  );

  return (
    <AppLayout>
      <section className="quests-section">
        <h1>{subject} World 🌎</h1>

        <div className="quest-grid">
          {worldQuests.map((quest) => (
            <QuestCard
              key={quest.id}
              quest={quest}
            />
          ))}
        </div>
      </section>
    </AppLayout>
  );
}