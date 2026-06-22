import { getSubjectProgress } from "./progress";
import { getTopicRecommendations } from "./topicRecommendations";

export function getRecommendations(profile) {
  const topicRecommendations = getTopicRecommendations(profile);

  if (topicRecommendations.length > 0) {
    return topicRecommendations.map((topic) => ({
      id: "maths",
      icon: topic.icon,
      title: topic.topic,
      reason: topic.reason,
      type: "topic",
    }));
  }

  const progress = getSubjectProgress(profile);

  const sortedSubjects = [...progress].sort(
    (a, b) => a.percentage - b.percentage
  );

  const lowestSubject = sortedSubjects[0];
  const secondLowestSubject = sortedSubjects[1];

  const recommendations = [];

  if (lowestSubject) {
    recommendations.push({
      id: lowestSubject.id,
      icon: lowestSubject.icon,
      title: lowestSubject.name,
      reason: `${lowestSubject.percentage}% complete — needs the most practice.`,
      type: "subject",
    });
  }

  if (secondLowestSubject) {
    recommendations.push({
      id: secondLowestSubject.id,
      icon: secondLowestSubject.icon,
      title: secondLowestSubject.name,
      reason: `${secondLowestSubject.percentage}% complete — keep improving.`,
      type: "subject",
    });
  }

  return recommendations;
}