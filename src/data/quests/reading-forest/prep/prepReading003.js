const prepReading003 = {
  id: "prep-reading-003",
  yearLevel: "Prep",
  subject: "Reading",
  title: "Rhyme Time",
  difficulty: "Beginner",
  xpReward: 30,
  coinReward: 10,

  curriculum: {
    source: "QCAA / Australian Curriculum v9.0",
    learningArea: "English",
    strand: "Language",
    code: "AC9EFLA08",
    focus:
      "Recognise and generate rhyming words, alliteration patterns, syllables and sounds",
  },

  description:
    "Listen for words that sound the same at the end and choose rhyming pairs.",

  story:
    "The birds in Reading Forest are singing a rhyming song. Help them find words that sound alike so the song works.",

  questions: [
    {
      question:
        "🐱 The bird sings: cat, hat. Do cat and hat rhyme?",
      options: ["Yes", "No", "Only sometimes"],
      answer: "Yes",
      topic: "Rhyming Words",
    },
    {
      question:
        "Which word rhymes with bee? 🐝",
      options: ["Tree", "Book", "Fish"],
      answer: "Tree",
      topic: "Rhyming Words",
    },
    {
      question:
        "Which words rhyme?",
      options: ["Log and dog", "Cat and cup", "Moon and map"],
      answer: "Log and dog",
      topic: "Rhyming Words",
    },
    {
      question:
        "🎵 The bird needs a rhyme for sun. Which word sounds best?",
      options: ["Run", "Fish", "Hat"],
      answer: "Run",
      topic: "Rhyming Words",
    },
    {
      question:
        "Which pair does NOT rhyme?",
      options: ["Bee and tree", "Cat and hat", "Dog and sun"],
      answer: "Dog and sun",
      topic: "Rhyming Words",
    },
  ],
};

export default prepReading003;