import { getSubjectProgress } from "./progress";

export function getLearningAnalytics(profile) {
  const subjectProgress = getSubjectProgress(profile);

  const activeSubjects = subjectProgress.filter(
    (subject) => subject.totalCount > 0
  );

  const strengths = activeSubjects.filter(
    (subject) => subject.percentage >= 70
  );

  const needsPractice = activeSubjects.filter(
    (subject) => subject.percentage > 0 && subject.percentage < 70
  );

  const notStarted = subjectProgress.filter(
    (subject) => subject.totalCount === 0 || subject.percentage === 0
  );

  const bestSubject =
    activeSubjects.length === 0
      ? null
      : [...activeSubjects].sort((a, b) => b.percentage - a.percentage)[0];

  const lowestSubject =
    activeSubjects.length === 0
      ? null
      : [...activeSubjects].sort((a, b) => a.percentage - b.percentage)[0];

  return {
    strengths,
    needsPractice,
    notStarted,
    bestSubject,
    lowestSubject,
  };
}