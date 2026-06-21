import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <h1>EduQuest</h1>
      <p>Choose a learning adventure.</p>

      <nav>
        <Link to="/quest/prep-maths-001">Start First Quest</Link>
        <Link to="/profile">View Profile</Link>
      </nav>
    </main>
  );
}