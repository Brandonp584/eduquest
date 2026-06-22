import { getWeakTopics } from "./weakTopics";

export function getTopicRecommendations(profile) {
  const weakTopics = getWeakTopics(profile);

  return weakTopics.slice(0, 3).map((topic) => ({
    id: topic.topic.toLowerCase().replaceAll(" ", "-"),
    topic: topic.topic,
    mistakes: topic.mistakes,
    icon: "🎯",
    reason: `You have missed ${topic.mistakes} question${
      topic.mistakes === 1 ? "" : "s"
    } about ${topic.topic}.`,
  }));
}