import { quests } from "../data/quests";

export const subjects = [
  {
    id: "maths",
    name: "Maths Kingdom",
    subject: "Maths",
    icon: "🏰",
  },
  {
    id: "reading",
    name: "Reading Forest",
    subject: "Reading",
    icon: "🌳",
  },
  {
    id: "spelling",
    name: "Spelling Valley",
    subject: "Spelling",
    icon: "✏️",
  },
  {
    id: "science",
    name: "Science Space",
    subject: "Science",
    icon: "🚀",
  },
];

export function getSubjectProgress(profile) {
  return subjects.map((subject) => {
    const subjectQuests = quests.filter(
      (quest) => quest.subject === subject.subject
    );

    const completedCount = subjectQuests.filter((quest) =>
      profile.completedQuests.includes(quest.id)
    ).length;

    const totalCount = subjectQuests.length;

    const percentage =
      totalCount === 0
        ? 0
        : Math.round((completedCount / totalCount) * 100);

    return {
      ...subject,
      completedCount,
      totalCount,
      percentage,
    };
  });
}