export interface ChessQuote {
  text: string;
  author: string;
  category: 'strategy' | 'wisdom' | 'art' | 'life' | 'passion';
}

export const chessQuotes: ChessQuote[] = [
  // Strategy & Tactics
  {
    text: "A strong player requires strong willpower and the ability to accept responsibility for his moves.",
    author: "Bent Larsen",
    category: "strategy"
  },
  {
    text: "The most powerful weapon in chess is to have the next move.",
    author: "David Bronstein",
    category: "strategy"
  },
  {
    text: "The art of chess is not about avoiding risk, but about knowing when to take it.",
    author: "Garry Kasparov",
    category: "strategy"
  },
  {
    text: "When you see a good move, look for a better one.",
    author: "Emanuel Lasker",
    category: "strategy"
  },
  {
    text: "To play for a draw, at any rate with White, is to some degree a crime against chess.",
    author: "Mikhail Tal",
    category: "strategy"
  },
  {
    text: "Capture the center, and the game will capture itself.",
    author: "Aaron Nimzowitsch",
    category: "strategy"
  },

  // Wisdom
  {
    text: "Chess is the touchstone of the intellect.",
    author: "Johann Wolfgang von Goethe",
    category: "wisdom"
  },
  {
    text: "Chess is a fairy tale of 1,001 blunders.",
    author: "Savielly Tartakower",
    category: "wisdom"
  },
  {
    text: "Every chess master was once a beginner.",
    author: "Irving Chernev",
    category: "wisdom"
  },
  {
    text: "Chess makes men wiser and clear-sighted.",
    author: "Vladimir Kramnik",
    category: "wisdom"
  },
  {
    text: "Chess is the gymnasium of the mind.",
    author: "Blaise Pascal",
    category: "wisdom"
  },
  {
    text: "Chess is beautiful enough to waste your life for.",
    author: "Hans Ree",
    category: "wisdom"
  },

  // Art & Beauty
  {
    text: "Chess is infinite: you can always improve.",
    author: "Vladimir Kramnik",
    category: "art"
  },
  {
    text: "Chess is not only knowledge and logic but also imagination.",
    author: "David Bronstein",
    category: "art"
  },
  {
    text: "Chess is an art expressing the science of logic.",
    author: "Mikhail Botvinnik",
    category: "art"
  },
  {
    text: "Chess is beautiful because it has the power to make us happy.",
    author: "Siegbert Tarrasch",
    category: "art"
  },
  {
    text: "Chess is imagination with rules.",
    author: "Anatoly Karpov",
    category: "art"
  },
  {
    text: "The beauty of chess is it can be whatever you want it to be.",
    author: "Magnus Carlsen",
    category: "art"
  },

  // Life Lessons
  {
    text: "In life, as in chess, it is always better to have a plan.",
    author: "Tevis Wetzell",
    category: "life"
  },
  {
    text: "There is no luck in chess, only good or bad moves.",
    author: "Emanuel Lasker",
    category: "life"
  },
  {
    text: "Life is like chess, you must think before you move.",
    author: "Magnus Carlsen",
    category: "life"
  },
  {
    text: "Chess is life in miniature. Chess is struggle, chess is battles.",
    author: "Garry Kasparov",
    category: "life"
  },
  {
    text: "You learn more from your defeats than from your victories.",
    author: "Viswanathan Anand",
    category: "life"
  },
  {
    text: "Chess is a constant struggle between your aversion to thinking and your desire to win.",
    author: "Jan Timman",
    category: "life"
  },

  // Passion
  {
    text: "The joy of chess is in the challenge, the pursuit of perfection, and the thrill of discovery.",
    author: "Judit Polgar",
    category: "passion"
  },
  {
    text: "Chess is my passion. It is what I live for.",
    author: "Bobby Fischer",
    category: "passion"
  },
  {
    text: "Chess is everything: art, science, and sport.",
    author: "Anatoly Karpov",
    category: "passion"
  },
  {
    text: "I am convinced, the way one plays chess always reflects the player's personality.",
    author: "Vladimir Kramnik",
    category: "passion"
  },
  {
    text: "Chess is a sea in which a gnat may drink and an elephant may bathe.",
    author: "Indian Proverb",
    category: "passion"
  },
  {
    text: "Chess is the most exciting game in the world. It's also the most beautiful.",
    author: "Garry Kasparov",
    category: "passion"
  }
];