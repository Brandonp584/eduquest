import { getProfile, saveProfile } from "./profile";

const CHEST_COST = 20;

const rewards = [
  {
    id: "xp-10",
    label: "+10 XP",
    type: "xp",
    amount: 10,
    icon: "⭐",
  },
  {
    id: "xp-20",
    label: "+20 XP",
    type: "xp",
    amount: 20,
    icon: "🌟",
  },
  {
    id: "coins-15",
    label: "+15 Coins",
    type: "coins",
    amount: 15,
    icon: "🪙",
  },
  {
    id: "coins-30",
    label: "+30 Coins",
    type: "coins",
    amount: 30,
    icon: "💰",
  },
];

export function getChestCost() {
  return CHEST_COST;
}

export function canOpenChest() {
  const profile = getProfile();
  return profile.coins >= CHEST_COST;
}

export function openMysteryChest() {
  const profile = getProfile();

  if (profile.coins < CHEST_COST) {
    return {
      success: false,
      message: "Not enough coins.",
      reward: null,
      profile,
    };
  }

  const reward = rewards[Math.floor(Math.random() * rewards.length)];

  profile.coins -= CHEST_COST;

  if (reward.type === "xp") {
    profile.totalXp += reward.amount;
  }

  if (reward.type === "coins") {
    profile.coins += reward.amount;
  }

  saveProfile(profile);

  return {
    success: true,
    message: `You won ${reward.label}!`,
    reward,
    profile,
  };
}