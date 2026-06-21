import { Link, useLocation } from "react-router-dom";

export default function Results() {
  const location = useLocation();
  const result = location.state;

  if (!result) {
    return (
      <main>
        <h1>No Results Found</h1>
        <p>Please complete a quest first.</p>
        <Link to="/">Back to Home</Link>
      </main>
    );
  }

  const percentage = Math.round((result.score / result.total) * 100);

  return (
    <main>
      <h1>Quest Complete!</h1>

      <h2>{result.title}</h2>

      <p>
        Score: {result.score} / {result.total}
      </p>

      <p>Accuracy: {percentage}%</p>

      <p>XP Earned: {result.xpReward}</p>

      {percentage === 100 ? (
        <p>Excellent work! You solved every question.</p>
      ) : (
        <p>Great effort! Keep practising and try again.</p>
      )}

      <Link to="/">Choose Another Quest</Link>
      <br />
      <Link to="/profile">View Profile</Link>
    </main>
  );
}