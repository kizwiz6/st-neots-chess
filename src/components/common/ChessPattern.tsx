'use client';

export default function ChessPattern() {
  return (
    <div className="fixed inset-0 z-0 opacity-[0.02] pointer-events-none">
      <div className="absolute inset-0 grid grid-cols-8 h-screen w-screen">
        {Array.from({ length: 64 }).map((_, i) => {
          const row = Math.floor(i / 8);
          const isEven = (row + i) % 2 === 0;
          return (
            <div
              key={i}
              className={`aspect-square ${isEven ? 'bg-slate-900' : ''}`}
            />
          );
        })}
      </div>
    </div>
  );
}