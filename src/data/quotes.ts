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
    }
  ];