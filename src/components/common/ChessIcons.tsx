// src/components/common/ChessIcons.tsx
export function KingIcon({ className = "w-6 h-6" }: { className?: string }) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3V7M9 5H15M8 21H16M9 17H15M12 7L7 11H17L12 7M7 11V17M17 11V17" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  export function QueenIcon({ className = "w-6 h-6" }: { className?: string }) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3L8 7L4 5L6 15H18L20 5L16 7L12 3ZM8 21H16M9 17H15M6 15V17M18 15V17" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  export function KnightIcon({ className = "w-6 h-6" }: { className?: string }) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 21H17M9 17H15M8 11C8 11 10 13 12 13C14 13 16 11 16 11M6 8C6 6 7 3 12 3C17 3 18 6 18 8C18 10 16 12 16 12L8 12C8 12 6 10 6 8Z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  export function BishopIcon({ className = "w-6 h-6" }: { className?: string }) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3C10 3 9 4 9 5C9 6 10 7 12 7C14 7 15 6 15 5C15 4 14 3 12 3ZM8 21H16M9 17H15M7 14H17M12 7V14" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }