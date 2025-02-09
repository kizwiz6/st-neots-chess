'use client';

export default function ChessPattern() {
  return (
    <div className="fixed inset-0 z-0 opacity-[0.10] pointer-events-none">
      {/* Try different opacity values: opacity-[0.05], opacity-[0.08], opacity-[0.1] */}
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