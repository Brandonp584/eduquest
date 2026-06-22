export function getStartOfWeek() {
  const now = new Date();
  const day = now.getDay();
  const diff = now.getDate() - day + (day === 0 ? -6 : 1);

  const startOfWeek = new Date(now.setDate(diff));
  startOfWeek.setHours(0, 0, 0, 0);

  return startOfWeek;
}

export function getWeeklyReport(profile) {
  const activityLog = profile.activityLog || [];
  const startOfWeek = getStartOfWeek();

  const weeklyQuestActivities = activityLog.filter((activity) => {
    return (
      activity.type === "quest-completed" &&
      new Date(activity.date) >= startOfWeek
    );
  });

  const xpThisWeek = weeklyQuestActivities.reduce(
    (total, activity) => total + (activity.xpReward || 0),
    0
  );

  const coinsThisWeek = weeklyQuestActivities.reduce(
    (total, activity) => total + (activity.coinReward || 0),
    0
  );

  return {
    questsThisWeek: weeklyQuestActivities.length,
    xpThisWeek,
    coinsThisWeek,
  };
}