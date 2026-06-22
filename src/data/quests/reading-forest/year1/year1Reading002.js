const year1Reading002 = {
  id: "year1-reading-002",
  yearLevel: "Year 1",
  subject: "Reading",
  title: "Sentence Detectives",
  difficulty: "Beginner",
  xpReward: 40,
  coinReward: 12,

  curriculum: {
    source: "QCAA / Australian Curriculum v9.0",
    learningArea: "English",
    strand: "Language",
    code: "AC9E1LA06",
    focus: "Understand that sentences are key units for expressing ideas",
  },

  description: "Choose the sentence that makes sense.",
  story:
    "The Reading Forest sentence scrolls have been mixed up. Help the sentence detectives fix them.",

  questions: [
    {
      question: "Which sentence makes sense?",
      options: ["The dog ran fast.", "Fast ran dog the.", "Dog the fast ran."],
      answer: "The dog ran fast.",
      topic: "Sentence Meaning",
    },
    {
      question: "Which sentence tells a complete idea?",
      options: ["The bird sings.", "Bird the.", "Sings the."],
      answer: "The bird sings.",
      topic: "Sentence Meaning",
    },
    {
      question: "Which sentence starts with a capital letter?",
      options: ["The cat sleeps.", "the cat sleeps.", "cat sleeps The."],
      answer: "The cat sleeps.",
      topic: "Sentence Structure",
    },
    {
      question: "Which sentence ends correctly?",
      options: ["I like apples.", "I like apples", "i like apples"],
      answer: "I like apples.",
      topic: "Punctuation",
    },
    {
      question: "Which sentence sounds right?",
      options: ["The frog jumps.", "Jumps frog the.", "The jumps frog."],
      answer: "The frog jumps.",
      topic: "Sentence Meaning",
    },
  ],
};

export default year1Reading002;