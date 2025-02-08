interface CardProps {
    icon?: React.ReactNode;
    title: string;
    children: React.ReactNode;
    className?: string;
  }

  export default function Card({ icon, title, children, className = '' }: CardProps) {
    return (
      <div className={`rounded-xl shadow-xl p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl ${className}`}>
        <div className="flex items-center space-x-2 mb-4">
          {icon && <div className="text-slate-800 transition-transform duration-300 transform group-hover:scale-110">{icon}</div>}
          <h2 className="text-xl font-bold text-slate-800">{title}</h2>
        </div>
        {children}
      </div>
    );
  }