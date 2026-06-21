import { getProfile, saveProfile } from "./profile";

export function getTodayKey() {
  return new Date().toISOString().split("T")[0];
}

export function canClaimDailyReward() {
  const profile = getProfile();
  const today = getTodayKey();

  return profile.lastDailyReward !== today;
}

export function claimDailyReward() {
  const profile = getProfile();
  const today = getTodayKey();

  if (profile.lastDailyReward === today) {
    return profile;
  }

  profile.coins += 10;
  profile.lastDailyReward = today;

  saveProfile(profile);

  return profile;
}