﻿/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        chessfade: {
          '0%': { opacity: '0.04' },
          '50%': { opacity: '0.08' },
          '100%': { opacity: '0.04' }
        },
        fadeIn: {
          'from': { 
            opacity: '0',
            transform: 'translateY(10px)'
          },
          'to': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        'chess-fade': 'chessfade 4s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
