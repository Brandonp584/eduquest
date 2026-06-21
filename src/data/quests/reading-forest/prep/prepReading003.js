const prepReading003 = {
  id: "prep-reading-003",
  yearLevel: "Prep",
  subject: "Reading",
  title: "Rhyme Time",
  difficulty: "Beginner",
  xpReward: 30,
  coinReward: 5,

  curriculum: {
    source: "QCAA / Australian Curriculum v9.0",
    learningArea: "English",
    strand: "Language",
    code: "AC9EFLA08",
    focus: "Recognise and generate rhyming words, alliteration patterns, syllables and sounds",
  },

  description: "Practise hearing words that sound the same at the end.",
  story:
    "The birds in Reading Forest are singing rhyming words. Help them find words that sound alike.",

  questions: [
    {
      question: "Which word rhymes with cat?",
      options: ["Hat", "Dog", "Sun"],
      answer: "Hat",
    },
    {
      question: "Which word rhymes with bee?",
      options: ["Tree", "Book", "Fish"],
      answer: "Tree",
    },
    {
      question: "Which words rhyme?",
      options: ["Log and dog", "Cat and cup", "Moon and map"],
      answer: "Log and dog",
    },
  ],
};

export default prepReading003;