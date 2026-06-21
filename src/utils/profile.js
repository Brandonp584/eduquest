const PROFILE_KEY = "eduQuestProfile";

export function getProfile() {
  const savedProfile = localStorage.getItem(PROFILE_KEY);

  if (savedProfile) {
    return JSON.parse(savedProfile);
  }

  return {
    totalXp: 0,
    questsSolved: 0,
    completedQuests: [],
  };
}

export function saveProfile(profile) {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
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