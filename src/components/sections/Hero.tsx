'use client';

import { Crown, Award } from 'lucide-react';
import RotatingQuote from '@/components/common/RotatingQuote';
import { CLUB_INFO } from '@/utils/constants';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="opacity-0 animate-fade-in">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Crown className="text-slate-800" size={32} />
            <Award className="text-slate-800" size={32} />
          </div>
        </div>

        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 mb-4">
            {CLUB_INFO.name}
          </h1>
        </div>

        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <p className="text-xl text-slate-600">
            {CLUB_INFO.description}
          </p>
        </div>

        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <RotatingQuote />
        </div>
      </div>
    </div>
  );
}