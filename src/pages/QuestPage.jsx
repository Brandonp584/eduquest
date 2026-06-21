import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { quests } from "../data/quests";

export default function QuestPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [answers, setAnswers] = useState({});

  const quest = quests.find((q) => q.id === id);

  if (!quest) {
    return (
      <main>
        <h1>Quest Not Found</h1>
      </main>
    );
  }

  function selectAnswer(questionIndex, answer) {
    setAnswers((prev) => ({
      ...prev,
      [questionIndex]: answer,
    }));
  }

  function submitQuest() {
    let score = 0;

    quest.questions.forEach((question, index) => {
      if (answers[index] === question.answer) {
        score++;
      }
    });

    navigate("/results", {
      state: {
        questId: quest.id,
        title: quest.title,
        score,
        total: quest.questions.length,
        xpReward: quest.xpReward,
      },
    });
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
            <button
              key={option}
              onClick={() => selectAnswer(index, option)}
              style={{
                fontWeight: answers[index] === option ? "bold" : "normal",
              }}
            >
              {option}
            </button>
          ))}
        </div>
      ))}

      <button onClick={submitQuest}>Submit Quest</button>
    </main>
  );
}