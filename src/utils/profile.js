const PROFILE_KEY = "eduQuestProfile";

export function getProfile() {
  const savedProfile = localStorage.getItem(PROFILE_KEY);

  if (savedProfile) {
    const profile = JSON.parse(savedProfile);

    return {
      totalXp: 0,
      coins: 0,
      questsSolved: 0,
      completedQuests: [],
      selectedAvatar: "wizard",
      selectedPet: "puppy",
      ownedPets: ["puppy"],

      selectedTheme: "default",
      ownedThemes: ["default"],

      lastDailyReward: null,
      ...profile,
    };
  }

  return {
    totalXp: 0,
    coins: 0,
    questsSolved: 0,
    completedQuests: [],
    selectedAvatar: "wizard",
    selectedPet: "puppy",
    ownedPets: ["puppy"],

    selectedTheme: "default",
    ownedThemes: ["default"],

    lastDailyReward: null,
  };
}

export function saveProfile(profile) {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
}

export function addQuestResult(questId, xpReward, coinReward = 5) {
  const profile = getProfile();

  if (profile.completedQuests.includes(questId)) {
    return profile;
  }

  profile.totalXp += xpReward;
  profile.coins += coinReward;
  profile.questsSolved += 1;
  profile.completedQuests.push(questId);

  saveProfile(profile);

  return profile;
}