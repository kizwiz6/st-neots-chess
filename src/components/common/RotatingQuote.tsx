'use client';

import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { chessQuotes } from '@/data/quotes';

export default function RotatingQuote() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setQuoteIndex((current) => (current + 1) % chessQuotes.length);
        setIsVisible(true);
      }, 500);
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const currentQuote = chessQuotes[quoteIndex];

  return (
    <div className="mt-8 bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl max-w-2xl mx-auto border border-amber-200 hover:shadow-2xl transition-all duration-300">
      <div
        className={`transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="relative">
          <Quote className="absolute -top-4 -left-4 text-amber-200 h-8 w-8" />
          <blockquote className="text-slate-700 italic text-lg pl-6">
            &ldquo;{currentQuote.text}&rdquo;
            <footer className="text-slate-500 mt-2 flex items-center justify-end">
              <span>- {currentQuote.author}</span>
              <span className="ml-2 text-xs px-2 py-1 bg-amber-100 rounded-full">
                {currentQuote.category}
              </span>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}