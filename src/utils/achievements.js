import { getSubjectProgress } from "./progress";

export function getAchievements(profile) {
  const subjectProgress = getSubjectProgress(profile);

  const mathsProgress =
    subjectProgress.find((subject) => subject.id === "maths")?.percentage || 0;

  const readingProgress =
    subjectProgress.find((subject) => subject.id === "reading")?.percentage || 0;

  const spellingProgress =
    subjectProgress.find((subject) => subject.id === "spelling")?.percentage || 0;

  const scienceProgress =
    subjectProgress.find((subject) => subject.id === "science")?.percentage || 0;

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
      id: "ten-quests",
      title: "Seasoned Explorer",
      description: "Complete 10 quests.",
      icon: "🧭",
      unlocked: profile.questsSolved >= 10,
    },
    {
      id: "twenty-five-quests",
      title: "Learning Hero",
      description: "Complete 25 quests.",
      icon: "🏆",
      unlocked: profile.questsSolved >= 25,
    },
    {
      id: "fifty-quests",
      title: "Quest Master",
      description: "Complete 50 quests.",
      icon: "👑",
      unlocked: profile.questsSolved >= 50,
    },

    {
      id: "hundred-xp",
      title: "XP Collector",
      description: "Earn 100 XP.",
      icon: "⭐",
      unlocked: profile.totalXp >= 100,
    },
    {
      id: "two-fifty-xp",
      title: "XP Champion",
      description: "Earn 250 XP.",
      icon: "🌠",
      unlocked: profile.totalXp >= 250,
    },
    {
      id: "five-hundred-xp",
      title: "Master Scholar",
      description: "Earn 500 XP.",
      icon: "🎓",
      unlocked: profile.totalXp >= 500,
    },
    {
      id: "one-thousand-xp",
      title: "EduQuest Legend",
      description: "Earn 1000 XP.",
      icon: "👑",
      unlocked: profile.totalXp >= 1000,
    },

    {
      id: "fifty-coins",
      title: "Coin Collector",
      description: "Own 50 coins.",
      icon: "🪙",
      unlocked: profile.coins >= 50,
    },
    {
      id: "hundred-coins",
      title: "Treasure Hunter",
      description: "Own 100 coins.",
      icon: "💰",
      unlocked: profile.coins >= 100,
    },
    {
      id: "two-hundred-coins",
      title: "Coin King",
      description: "Own 200 coins.",
      icon: "🏦",
      unlocked: profile.coins >= 200,
    },

    {
      id: "first-pet",
      title: "Pet Pal",
      description: "Own your first pet.",
      icon: "🐾",
      unlocked: profile.ownedPets?.length >= 1,
    },
    {
      id: "three-pets",
      title: "Animal Friend",
      description: "Own 3 pets.",
      icon: "🐶",
      unlocked: profile.ownedPets?.length >= 3,
    },
    {
      id: "all-pets",
      title: "Pet Collector",
      description: "Own every pet.",
      icon: "🦊",
      unlocked: profile.ownedPets?.length >= 5,
    },

    {
      id: "first-theme",
      title: "Stylist",
      description: "Unlock your first theme.",
      icon: "🎨",
      unlocked: profile.ownedThemes?.length >= 2,
    },
    {
      id: "all-themes",
      title: "Theme Master",
      description: "Unlock every theme.",
      icon: "🌈",
      unlocked: profile.ownedThemes?.length >= 4,
    },

    {
      id: "maths-master",
      title: "Maths Master",
      description: "Complete every Maths quest.",
      icon: "🏰",
      unlocked: mathsProgress === 100,
    },
    {
      id: "reading-hero",
      title: "Reading Hero",
      description: "Complete every Reading quest.",
      icon: "🌳",
      unlocked: readingProgress === 100,
    },
    {
      id: "spelling-star",
      title: "Spelling Star",
      description: "Complete every Spelling quest.",
      icon: "✏️",
      unlocked: spellingProgress === 100,
    },
    {
      id: "science-commander",
      title: "Science Commander",
      description: "Complete every Science quest.",
      icon: "🚀",
      unlocked: scienceProgress === 100,
    },

    {
      id: "daily-reward",
      title: "Daily Learner",
      description: "Claim your first daily reward.",
      icon: "🔥",
      unlocked: profile.lastDailyReward !== null,
    },
    {
      id: "completionist",
      title: "Completionist",
      description: "Complete 100 quests.",
      icon: "💎",
      unlocked: profile.questsSolved >= 100,
    },
  ];
}