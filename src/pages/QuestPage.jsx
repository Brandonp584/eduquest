import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import { quests } from "../data/quests";

export default function QuestPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const quest = quests.find((q) => q.id === id);

  if (!quest) {
    return (
      <AppLayout>
        <section className="quests-section">
          <h1>Quest Not Found</h1>
          <Link className="primary-btn" to="/">
            Back Home
          </Link>
        </section>
      </AppLayout>
    );
  }

  const question = quest.questions[currentQuestion];
  const totalQuestions = quest.questions.length;
  const answeredCurrentQuestion = answers[currentQuestion];
  const progressPercent = Math.round(
    ((currentQuestion + 1) / totalQuestions) * 100
  );

  function selectAnswer(answer) {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: answer,
    }));
  }

  function goNext() {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  }

  function goBack() {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  }

  function submitQuest() {
    let score = 0;

    const questionResults = quest.questions.map(
      (question, index) => {
        const selectedAnswer = answers[index];

        const isCorrect =
          selectedAnswer === question.answer;

        if (isCorrect) {
          score++;
        }

        return {
          question: question.question,
          selectedAnswer,
          correctAnswer: question.answer,
          isCorrect,
          topic: question.topic || quest.subject,
        };
      }
    );

    navigate("/results", {
      state: {
        questId: quest.id,
        title: quest.title,
        score,
        total: totalQuestions,
        xpReward: quest.xpReward,
        coinReward: quest.coinReward || 5,
        questionResults,
      },
    });
  }

  return (
    <AppLayout>
      <section className="quest-page">
        <div className="quest-hero">
          <div>
            <span className="eyebrow">
              {quest.yearLevel} • {quest.subject} • {quest.difficulty}
            </span>
            <h1>{quest.title}</h1>
            <p>{quest.description}</p>
          </div>

          <div className="quest-reward-card">
            <strong>Reward</strong>
            <span>⭐ {quest.xpReward} XP</span>
            <span>🪙 {quest.coinReward || 5} Coins</span>
          </div>
        </div>

        <div className="quest-info-grid">
          <article className="quest-info-card">
            <h2>📚 Learning Goal</h2>
            <p>{quest.curriculum?.focus}</p>
            <small>
              {quest.curriculum?.source} • {quest.curriculum?.learningArea}
            </small>
          </article>

          <article className="quest-info-card">
            <h2>📖 Story Adventure</h2>
            <p>{quest.story}</p>
          </article>
        </div>

        <article className="question-card">
          <div className="question-header">
            <div>
              <span className="question-count">
                Question {currentQuestion + 1} of {totalQuestions}
              </span>
              <h2>{question.question}</h2>
            </div>

            <strong>
              Progress: {currentQuestion + 1}/{totalQuestions}
            </strong>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="answer-grid">
            {question.options.map((option) => (
              <button
                key={option}
                className={
                  answeredCurrentQuestion === option
                    ? "answer-option selected"
                    : "answer-option"
                }
                onClick={() => selectAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="quest-actions">
            <button
              className="secondary-btn"
              onClick={goBack}
              disabled={currentQuestion === 0}
            >
              Back
            </button>

            {currentQuestion < totalQuestions - 1 ? (
              <button
                className="quest-btn"
                onClick={goNext}
                disabled={!answeredCurrentQuestion}
              >
                Next Question
              </button>
            ) : (
              <button
                className="quest-btn"
                onClick={submitQuest}
                disabled={!answeredCurrentQuestion}
              >
                Submit Quest
              </button>
            )}
          </div>
        </article>
      </section>
    </AppLayout>
  );
}