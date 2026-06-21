import { useParams } from "react-router-dom";
import { quests } from "../data/quests";

export default function QuestPage() {
  const { id } = useParams();

  const quest = quests.find((q) => q.id === id);

  if (!quest) {
    return (
      <main>
        <h1>Quest Not Found</h1>
      </main>
    );
  }

  return (
    <main>
      <h1>{quest.title}</h1>

      <p>
        {quest.yearLevel} • {quest.subject}
      </p>

      <p>{quest.description}</p>

      <p>{quest.story}</p>

      <h2>Questions</h2>

      {quest.questions.map((question, index) => (
        <div key={index}>
          <p>{question.question}</p>

          {question.options.map((option) => (
            <button key={option}>
              {option}
            </button>
          ))}
        </div>
      ))}
    </main>
  );
}