import { Link } from "react-router-dom";
import { quests } from "../data/quests";

export default function Home() {
  return (
    <main>
      <h1>EduQuest</h1>
      <p>Choose a learning adventure.</p>

      <div>
        {quests.map((quest) => (
          <div key={quest.id}>
            <h2>{quest.title}</h2>
            <p>{quest.subject}</p>
            <p>{quest.yearLevel}</p>

            <Link to={`/quest/${quest.id}`}>
              Start Quest
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}