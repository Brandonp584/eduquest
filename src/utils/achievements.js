export function getAchievements(profile) {
  return [
    {
      id: "first-quest",
      title: "First Steps",
      description: "Complete your first quest.",
      icon: "🌟",
      unlocked: profile.questsSolved >= 1,
    },
    {
      id: "five-quests",
      title: "Quest Adventurer",
      description: "Complete 5 quests.",
      icon: "🗺️",
      unlocked: profile.questsSolved >= 5,
    },
    {
      id: "hundred-xp",
      title: "XP Collector",
      description: "Earn 100 XP.",
      icon: "⭐",
      unlocked: profile.totalXp >= 100,
    },
    {
      id: "master-scholar",
      title: "Master Scholar",
      description: "Reach Master Scholar level.",
      icon: "👑",
      unlocked: profile.totalXp >= 500,
    },
  ];
}