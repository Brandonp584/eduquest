import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuestPage from "./pages/QuestPage";
import Results from "./pages/Results";
import Profile from "./pages/Profile";
import WorldPage from "./pages/WorldPage";
import Shop from "./pages/Shop";
import ParentDashboard from "./pages/ParentDashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quest/:id" element={<QuestPage />} />
      <Route path="/results" element={<Results />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/world/:subject" element={<WorldPage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/parent" element={<ParentDashboard />} />
    </Routes>
  );
}