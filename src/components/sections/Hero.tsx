import { Crown, Award } from 'lucide-react';
import { CLUB_INFO } from '@/utils/constants';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 mb-4">
            <Crown className="text-slate-800" size={32} />
            <Award className="text-slate-800" size={32} />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 mb-4">
          {CLUB_INFO.name}
        </h1>
        <p className="text-xl text-slate-600">
          {CLUB_INFO.description}
        </p>
        <div className="mt-8 bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl max-w-2xl mx-auto border border-amber-200">
        <blockquote className="text-slate-700 italic text-lg">
            &ldquo;All that matters on the chessboard is good moves...&rdquo;
            <footer className="text-slate-500 mt-2">- Bobby Fischer</footer>
        </blockquote>
        </div>
      </div>
    </div>
  );
}