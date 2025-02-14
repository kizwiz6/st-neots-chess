'use client';

// Option 1: Classic Dark
export function ChessPatternDark() {
  return (
    <div className="fixed inset-0 z-0 opacity-[0.08] pointer-events-none">
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

// Option 2: Warm Chess
export function ChessPatternWarm() {
  return (
    <div className="fixed inset-0 z-0 opacity-[0.08] pointer-events-none">
      <div className="absolute inset-0 grid grid-cols-8 h-screen w-screen">
        {Array.from({ length: 64 }).map((_, i) => {
          const row = Math.floor(i / 8);
          const isEven = (row + i) % 2 === 0;
          return (
            <div
              key={i}
              className={`aspect-square ${isEven ? 'bg-amber-900/80' : ''}`}
            />
          );
        })}
      </div>
    </div>
  );
}

// Option 3: Royal Chess
export function ChessPatternRoyal() {
  return (
    <div className="fixed inset-0 z-0 opacity-[0.08] pointer-events-none">
      <div className="absolute inset-0 grid grid-cols-8 h-screen w-screen">
        {Array.from({ length: 64 }).map((_, i) => {
          const row = Math.floor(i / 8);
          const isEven = (row + i) % 2 === 0;
          return (
            <div
              key={i}
              className={`aspect-square ${isEven ? 'bg-indigo-900/80' : ''}`}
            />
          );
        })}
      </div>
    </div>
  );
}

// Option 4: Forest Chess
export function ChessPatternForest() {
  return (
    <div className="fixed inset-0 z-0 opacity-[0.08] pointer-events-none">
      <div className="absolute inset-0 grid grid-cols-8 h-screen w-screen">
        {Array.from({ length: 64 }).map((_, i) => {
          const row = Math.floor(i / 8);
          const isEven = (row + i) % 2 === 0;
          return (
            <div
              key={i}
              className={`aspect-square ${isEven ? 'bg-emerald-900/80' : ''}`}
            />
          );
        })}
      </div>
    </div>
  );
}

// Animated version
export function ChessPatternAnimated() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none animate-chess-fade">
      <div className="absolute inset-0 grid grid-cols-8 h-screen w-screen">
        {Array.from({ length: 64 }).map((_, i) => {
          const row = Math.floor(i / 8);
          const isEven = (row + i) % 2 === 0;
          return (
            <div
              key={i}
              className={`
                aspect-square transition-all duration-300
                ${isEven ? 'bg-slate-900/60 hover:bg-slate-900/80' : ''}
                group relative
              `}
            >
              <div className={`
                absolute inset-0 opacity-0 group-hover:opacity-100
                transition-opacity duration-300 pointer-events-none
                ${isEven ? 'bg-gradient-to-br from-amber-500/10 to-transparent' : ''}
              `} />
            </div>
          );
        })}
      </div>
    </div>
  );
}