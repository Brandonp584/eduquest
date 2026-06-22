import { getSubjectProgress } from "./progress";

export function getRecommendations(profile) {
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
    });
  }

  if (secondLowestSubject) {
    recommendations.push({
      id: secondLowestSubject.id,
      icon: secondLowestSubject.icon,
      title: secondLowestSubject.name,
      reason: `${secondLowestSubject.percentage}% complete — keep improving.`,
    });
  }

  return recommendations;
}