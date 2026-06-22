const prepScience002 = {
  id: "prep-science-002",
  yearLevel: "Prep",
  subject: "Science",
  title: "Weather Watch",
  difficulty: "Beginner",
  xpReward: 30,
  coinReward: 5,

  curriculum: {
    source: "QCAA / Australian Curriculum v9.0",
    learningArea: "Science",
    strand: "Earth and Space Sciences",
    code: "AC9SFU02",
    focus: "Describe daily and seasonal changes in the environment",
  },

  description: "Observe weather and choose what you might see outside.",
  story:
    "The Science Space weather station needs help reading the sky. Can you choose the right weather clues?",

  questions: [
    {
      question: "What might you see on a rainy day?",
      options: ["Rain drops 🌧️", "Snowman ⛄", "Campfire 🔥"],
      answer: "Rain drops 🌧️",
      topic: "Weather",
    },
    {
      question: "What do we often see in the sky during the day?",
      options: ["Sun ☀️", "Torch 🔦", "Pillow"],
      answer: "Sun ☀️",
      topic: "Weather",
    },
    {
      question: "What can move when the wind blows?",
      options: ["Leaves 🍃", "A wall", "A mountain"],
      answer: "Leaves 🍃",
      topic: "Weather",
    },
  ],
};

export default prepScience002;