import { pets } from "./pets";
import { themes } from "./themes";
import { getAchievements } from "./achievements";
import { getSubjectProgress } from "./progress";

export function getCollectionStats(profile) {
  const achievements = getAchievements(profile);
  const unlockedAchievements = achievements.filter(
    (achievement) => achievement.unlocked
  );

  const subjectProgress = getSubjectProgress(profile);
  const completedWorlds = subjectProgress.filter(
    (subject) => subject.percentage === 100
  );

  return {
    petsOwned: profile.ownedPets?.length || 0,
    totalPets: pets.length,

    themesOwned: profile.ownedThemes?.length || 0,
    totalThemes: themes.length,

    achievementsUnlocked: unlockedAchievements.length,
    totalAchievements: achievements.length,

    worldsCompleted: completedWorlds.length,
    totalWorlds: subjectProgress.length,
  };
}