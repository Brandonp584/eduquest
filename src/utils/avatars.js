import { getProfile, saveProfile } from "./profile";

export const avatars = [
  { id: "wizard", name: "Wizard", icon: "🧙‍♂️", requiredXp: 0 },
  { id: "astronaut", name: "Astronaut", icon: "🚀", requiredXp: 0 },
  { id: "explorer", name: "Explorer", icon: "🗺️", requiredXp: 50 },
  { id: "dragon", name: "Dragon Rider", icon: "🐉", requiredXp: 100 },
  { id: "unicorn", name: "Unicorn Rider", icon: "🦄", requiredXp: 250 },
  { id: "royal", name: "Royal Scholar", icon: "👑", requiredXp: 500 },
];

export function getSelectedAvatar() {
  const profile = getProfile();

  return (
    avatars.find((avatar) => avatar.id === profile.selectedAvatar) ||
    avatars[0]
  );
}

export function updateAvatar(avatarId) {
  const profile = getProfile();
  const avatar = avatars.find((avatar) => avatar.id === avatarId);

  if (!avatar) return profile;
  if (profile.totalXp < avatar.requiredXp) return profile;

  profile.selectedAvatar = avatarId;
  saveProfile(profile);

  return profile;
}