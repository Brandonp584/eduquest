export function getWeakTopics(profile) {
  const activityLog = profile.activityLog || [];
  const topicMistakes = {};

  activityLog.forEach((activity) => {
    if (!activity.questionResults) return;

    activity.questionResults.forEach((result) => {
      if (result.isCorrect) return;

      const topic = result.topic || "General";

      topicMistakes[topic] = (topicMistakes[topic] || 0) + 1;
    });
  });

  return Object.entries(topicMistakes)
    .map(([topic, mistakes]) => ({
      topic,
      mistakes,
    }))
    .sort((a, b) => b.mistakes - a.mistakes)
    .slice(0, 5);
}