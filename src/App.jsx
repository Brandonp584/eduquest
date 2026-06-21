import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuestPage from "./pages/QuestPage";
import Results from "./pages/Results";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quest/:id" element={<QuestPage />} />
      <Route path="/results" element={<Results />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}