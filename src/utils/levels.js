export function getLevel(totalXp) {
  if (totalXp >= 500) return "Master Scholar";
  if (totalXp >= 250) return "Scholar";
  if (totalXp >= 100) return "Adventurer";

  return "Explorer";
}