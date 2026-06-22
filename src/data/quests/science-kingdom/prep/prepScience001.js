const prepScience001 = {
  id: "prep-science-001",
  yearLevel: "Prep",
  subject: "Science",
  title: "Living Things",
  difficulty: "Beginner",
  xpReward: 30,
  coinReward: 5,

  curriculum: {
    source: "QCAA / Australian Curriculum v9.0",
    learningArea: "Science",
    strand: "Biological Sciences",
    code: "AC9SFU01",
    focus: "Observe external features of plants and animals",
  },

  description: "Learn about plants, animals, and things that are living.",
  story:
    "The Science Space explorers found a garden planet. Help them spot living things.",

  questions: [
    {
      question: "Which one is a living thing?",
      options: ["Dog 🐶", "Rock 🪨", "Chair 🪑"],
      answer: "Dog 🐶",
      topic: "Living Things",
    },
    {
      question: "Which one needs water to grow?",
      options: ["Plant 🌱", "Toy 🚗", "Book 📘"],
      answer: "Plant 🌱",
      topic: "Living Things",
    },
    {
      question: "Which one is an animal?",
      options: ["Cat 🐱", "Table", "Pencil"],
      answer: "Cat 🐱",
      topic: "Living Things",
    },
  ],
};

export default prepScience001;