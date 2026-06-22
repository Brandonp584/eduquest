import { getProfile, saveProfile } from "./profile";

const CHEST_COST = 20;

const rewards = [
  {
    id: "xp-10",
    label: "+10 XP",
    rarity: "Common",
    type: "xp",
    amount: 10,
    icon: "⭐",
  },
  {
    id: "coins-15",
    label: "+15 Coins",
    rarity: "Common",
    type: "coins",
    amount: 15,
    icon: "🪙",
  },
  {
    id: "xp-50",
    label: "+50 XP",
    rarity: "Rare",
    type: "xp",
    amount: 50,
    icon: "🌟",
  },
  {
    id: "coins-75",
    label: "+75 Coins",
    rarity: "Rare",
    type: "coins",
    amount: 75,
    icon: "💰",
  },
  {
    id: "bonus-coins",
    label: "+150 Coins",
    rarity: "Epic",
    type: "coins",
    amount: 150,
    icon: "🏆",
  },
  {
    id: "bonus-xp",
    label: "+100 XP",
    rarity: "Epic",
    type: "xp",
    amount: 100,
    icon: "🚀",
  },
  {
    id: "legendary",
    label: "+250 Coins",
    rarity: "Legendary",
    type: "coins",
    amount: 250,
    icon: "👑",
  },
];

function getRandomReward() {
  const roll = Math.random() * 100;

  if (roll <= 5) {
    return rewards.find((reward) => reward.rarity === "Legendary");
  }

  if (roll <= 15) {
    const epicRewards = rewards.filter((reward) => reward.rarity === "Epic");
    return epicRewards[Math.floor(Math.random() * epicRewards.length)];
  }

  if (roll <= 40) {
    const rareRewards = rewards.filter((reward) => reward.rarity === "Rare");
    return rareRewards[Math.floor(Math.random() * rareRewards.length)];
  }

  const commonRewards = rewards.filter((reward) => reward.rarity === "Common");
  return commonRewards[Math.floor(Math.random() * commonRewards.length)];
}

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

  const reward = getRandomReward();

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