// src/components/sections/UsefulLinks.tsx
import Card from '@/components/common/Card';
import { EXTERNAL_LINKS } from '@/utils/constants';

export default function UsefulLinks() {
  return (
    <Card
      title="Useful Links"
      className="bg-white/80 backdrop-blur-sm"
    >
      <div className="space-y-2">
        {EXTERNAL_LINKS.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="block text-slate-600 hover:text-amber-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </a>
        ))}
      </div>
    </Card>
  );
}