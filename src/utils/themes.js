import { getProfile, saveProfile } from "./profile";

export const themes = [
  {
    id: "default",
    name: "Default Theme",
    icon: "🌈",
    cost: 0,
    className: "theme-default",
  },
  {
    id: "castle",
    name: "Castle Theme",
    icon: "🏰",
    cost: 20,
    className: "theme-castle",
  },
  {
    id: "forest",
    name: "Forest Theme",
    icon: "🌳",
    cost: 30,
    className: "theme-forest",
  },
  {
    id: "space",
    name: "Space Theme",
    icon: "🚀",
    cost: 0,
    className: "theme-space",
  },
];

export function getSelectedTheme() {
  const profile = getProfile();

  return (
    themes.find((theme) => theme.id === profile.selectedTheme) ||
    themes[0]
  );
}

export function buyTheme(themeId) {
  const profile = getProfile();
  const theme = themes.find((theme) => theme.id === themeId);

  if (!theme) return profile;
  if (profile.ownedThemes.includes(themeId)) return profile;
  if (profile.coins < theme.cost) return profile;

  profile.coins -= theme.cost;
  profile.ownedThemes.push(themeId);
  profile.selectedTheme = themeId;

  saveProfile(profile);
  return profile;
}

export function updateTheme(themeId) {
  const profile = getProfile();

  if (!profile.ownedThemes.includes(themeId)) {
    return profile;
  }

  profile.selectedTheme = themeId;
  saveProfile(profile);

  return profile;
}