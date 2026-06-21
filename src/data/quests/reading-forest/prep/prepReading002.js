const prepReading002 = {
  id: "prep-reading-002",
  yearLevel: "Prep",
  subject: "Reading",
  title: "Picture Clues",
  difficulty: "Beginner",
  xpReward: 30,
  coinReward: 5,

  curriculum: {
    source: "QCAA / Australian Curriculum v9.0",
    learningArea: "English",
    strand: "Literacy",
    code: "AC9EFLY05",
    focus: "Use comprehension strategies such as predicting and connecting to understand texts",
  },

  description: "Use pictures and clues to understand simple texts.",
  story:
    "The forest animals left picture clues on the path. Look carefully and choose what the clues tell you.",

  questions: [
    {
      question: "You see ☔ and clouds in a picture. What might happen?",
      options: ["It might rain", "It might snow", "It might be bedtime"],
      answer: "It might rain",
    },
    {
      question: "A picture shows a child holding a book. What are they likely doing?",
      options: ["Reading", "Swimming", "Cooking"],
      answer: "Reading",
    },
    {
      question: "A picture shows 🐶 with a ball. What might the dog want to do?",
      options: ["Play", "Sleep", "Hide"],
      answer: "Play",
    },
  ],
};

export default prepReading002;