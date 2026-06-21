const PROFILE_KEY = "eduQuestProfile";

export const avatars = [
  { id: "wizard", name: "Wizard", icon: "🧙‍♂️", requiredXp: 0 },
  { id: "astronaut", name: "Astronaut", icon: "🚀", requiredXp: 0 },
  { id: "explorer", name: "Explorer", icon: "🗺️", requiredXp: 50 },
  { id: "dragon", name: "Dragon Rider", icon: "🐉", requiredXp: 100 },
  { id: "unicorn", name: "Unicorn Rider", icon: "🦄", requiredXp: 250 },
  { id: "royal", name: "Royal Scholar", icon: "👑", requiredXp: 500 }
];

export function getProfile() {
  const savedProfile = localStorage.getItem(PROFILE_KEY);

  if (savedProfile) {
    const profile = JSON.parse(savedProfile);

    return {
      selectedAvatar: "wizard",
      ...profile,
    };
  }

  return {
    totalXp: 0,
    questsSolved: 0,
    completedQuests: [],
    selectedAvatar: "wizard",
  };
}

export function saveProfile(profile) {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
}

export function updateAvatar(avatarId) {
  const profile = getProfile();
  const avatar = avatars.find((avatar) => avatar.id === avatarId);

  if (!avatar) {
    return profile;
  }

  if (profile.totalXp < avatar.requiredXp) {
    return profile;
  }

  profile.selectedAvatar = avatarId;
  saveProfile(profile);

  return profile;
}

export function getSelectedAvatar() {
  const profile = getProfile();

  return (
    avatars.find((avatar) => avatar.id === profile.selectedAvatar) ||
    avatars[0]
  );
}

export function addQuestResult(questId, xpReward) {
  const profile = getProfile();

  if (profile.completedQuests.includes(questId)) {
    return profile;
  }

  profile.totalXp += xpReward;
  profile.questsSolved += 1;
  profile.completedQuests.push(questId);

  saveProfile(profile);

  return profile;
}

export function getLevel(totalXp) {
  if (totalXp >= 500) return "Master Scholar";
  if (totalXp >= 250) return "Scholar";
  if (totalXp >= 100) return "Adventurer";

  return "Explorer";
}