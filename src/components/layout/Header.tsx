'use client';

import { Menu, X, Crown } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-slate-900/90 backdrop-blur-sm z-50 border-b border-amber-200/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Crown className="text-amber-400" size={24} />
            <span className="text-white font-bold">St Neots Chess Club</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-amber-400 transition-colors">
              Home
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-amber-400 transition-colors">
              Contact
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-400 hover:text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/90 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-300 hover:text-amber-400"
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-300 hover:text-amber-400"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}