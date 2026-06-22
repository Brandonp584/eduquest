const year2Reading001 = {
  id: "year2-reading-001",
  yearLevel: "Year 2",
  subject: "Reading",
  title: "The Lost Map",
  difficulty: "Intermediate",
  xpReward: 50,
  coinReward: 15,

  curriculum: {
    source: "QCAA / Australian Curriculum v9.0",
    learningArea: "English",
    strand: "Literacy",
    code: "AC9E2LY05",
    focus:
      "Use comprehension strategies to build literal and inferred meaning from texts",
  },

  description:
    "Read story clues and answer questions about characters, events and meaning.",

  story:
    "In Reading Forest, Tilly the Turtle finds a torn map near the river. She must follow clues to find the hidden reading tree.",

  questions: [
    {
      question:
        "🐢 Tilly found a torn map near the river. What did she find?",
      options: ["A torn map", "A lunchbox", "A blue hat"],
      answer: "A torn map",
      topic: "Literal Comprehension",
    },
    {
      question:
        "The map had muddy footprints on it. What might this tell us?",
      options: [
        "Someone walked over it",
        "It was brand new",
        "It was in the sky",
      ],
      answer: "Someone walked over it",
      topic: "Inference",
    },
    {
      question:
        "Tilly followed the map to a giant tree. Where did the map lead her?",
      options: ["A giant tree", "A shop", "A swimming pool"],
      answer: "A giant tree",
      topic: "Story Events",
    },
    {
      question:
        "Tilly felt nervous but kept going. What does this tell us about Tilly?",
      options: ["She is brave", "She is lazy", "She is asleep"],
      answer: "She is brave",
      topic: "Character Traits",
    },
    {
      question:
        "What is the best title for this story?",
      options: ["The Lost Map", "The Flying Shoe", "The Empty Plate"],
      answer: "The Lost Map",
      topic: "Main Idea",
    },
  ],
};

export default year2Reading001;