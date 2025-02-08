interface CardProps {
    icon?: React.ReactNode;
    title: string;
    children: React.ReactNode;
    className?: string;
  }

  export default function Card({ icon, title, children, className = '' }: CardProps) {
    return (
      <div className={`rounded-xl shadow-xl p-6 ${className}`}>
        <div className="flex items-center space-x-2 mb-4">
          {icon && <div className="text-slate-800">{icon}</div>}
          <h2 className="text-xl font-bold text-slate-800">{title}</h2>
        </div>
        {children}
      </div>
    );
}