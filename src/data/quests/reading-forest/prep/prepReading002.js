const prepReading002 = {
  id: "prep-reading-002",
  yearLevel: "Prep",
  subject: "Reading",
  title: "Picture Clues",
  difficulty: "Beginner",
  xpReward: 30,
  coinReward: 10,

  curriculum: {
    source: "QCAA / Australian Curriculum v9.0",
    learningArea: "English",
    strand: "Literacy",
    code: "AC9EFLY05",
    focus:
      "Use comprehension strategies such as predicting and connecting to understand texts",
  },

  description:
    "Use pictures and clues to predict what might happen in a simple text.",

  story:
    "The Reading Forest path is covered in picture clues. Ranger Ruby needs help working out what each clue means.",

  questions: [
    {
      question:
        "☔ Ranger Ruby sees dark clouds and an umbrella. What might happen next?",
      options: ["It might rain", "It might snow", "It might be bedtime"],
      answer: "It might rain",
      topic: "Prediction",
    },
    {
      question:
        "📘 A picture shows a child holding a book. What is the child likely doing?",
      options: ["Reading", "Swimming", "Cooking"],
      answer: "Reading",
      topic: "Picture Clues",
    },
    {
      question:
        "🐶 A dog is looking at a ball. What might the dog want to do?",
      options: ["Play", "Sleep", "Hide"],
      answer: "Play",
      topic: "Prediction",
    },
    {
      question:
        "🍽️ A picture shows a plate, spoon, and food. What might happen soon?",
      options: ["Eating", "Flying", "Painting"],
      answer: "Eating",
      topic: "Picture Clues",
    },
    {
      question:
        "🌞 A picture shows the sun and a hat. What might someone need?",
      options: ["A sun hat", "A raincoat", "A blanket"],
      answer: "A sun hat",
      topic: "Making Connections",
    },
  ],
};

export default prepReading002;