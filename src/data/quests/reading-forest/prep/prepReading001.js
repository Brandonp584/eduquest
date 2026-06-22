const prepReading001 = {
  id: "prep-reading-001",
  yearLevel: "Prep",
  subject: "Reading",
  title: "Story Friends",
  difficulty: "Beginner",
  xpReward: 30,
  coinReward: 10,

  curriculum: {
    source: "QCAA / Australian Curriculum v9.0",
    learningArea: "English",
    strand: "Literature",
    code: "AC9EFLE02",
    focus:
      "Respond to stories and share feelings and thoughts about events and characters",
  },

  description:
    "Meet characters, remember story events, and talk about how characters feel.",

  story:
    "In Reading Forest, Poppy the Possum is looking for berries. Along the way, she meets kind forest friends who help her.",

  questions: [
    {
      question:
        "🌳 Poppy the Possum climbed a tree to look for berries. Who is the main character?",
      options: ["Poppy the Possum", "A fish", "A robot"],
      answer: "Poppy the Possum",
      topic: "Characters",
    },
    {
      question:
        "🍓 Poppy climbed the tree because she wanted to find...",
      options: ["Berries", "Shoes", "A spaceship"],
      answer: "Berries",
      topic: "Story Events",
    },
    {
      question:
        "🦉 Ollie the Owl helped Poppy find the berry path. Was Ollie being kind?",
      options: ["Yes", "No", "Maybe not"],
      answer: "Yes",
      topic: "Character Feelings",
    },
    {
      question:
        "😊 How might Poppy feel when her friends help her?",
      options: ["Happy", "Angry", "Scared"],
      answer: "Happy",
      topic: "Character Feelings",
    },
    {
      question:
        "📖 What happened first in the story?",
      options: [
        "Poppy climbed a tree",
        "Poppy flew to the moon",
        "Poppy went swimming",
      ],
      answer: "Poppy climbed a tree",
      topic: "Sequencing",
    },
  ],
};

export default prepReading001;