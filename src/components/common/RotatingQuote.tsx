'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { chessQuotes, ChessQuote } from '@/data/quotes';
import { Quote } from 'lucide-react';

export default function RotatingQuote() {
  const [currentQuote, setCurrentQuote] = useState<ChessQuote>(chessQuotes[0]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentQuote((prev) => {
          const currentIndex = chessQuotes.indexOf(prev);
          const nextIndex = (currentIndex + 1) % chessQuotes.length;
          return chessQuotes[nextIndex];
        });
        setIsVisible(true);
      }, 500); // Wait for fade out before changing quote
    }, 10000); // Change quote every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl max-w-2xl mx-auto border border-amber-200 hover:shadow-2xl transition-all duration-300">
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key={currentQuote.text}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}