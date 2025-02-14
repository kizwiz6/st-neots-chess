import { Trophy, Crown, Target, Users } from 'lucide-react';
import Card from '@/components/common/Card';

export default function Competitions() {
  const competitions = [
    {
      title: "Cambridgeshire County Chess League",
      description: "The premier chess competition in the county, we have teams in both the first and second division.",
      icon: <Crown className="text-amber-600" size={24} />,
    },
    {
      title: "Cambridgeshire County 7000 Competition",
      description: "A team competition with four players where the aggregate ratings total for the team cannot exceed 7000.",
      icon: <Trophy className="text-amber-600" size={24} />,
    },
    {
      title: "Cambridgeshire County U4200 Competition",
      description: "A three-player team competition where the combined team rating must stay under 4200.",
      icon: <Target className="text-amber-600" size={24} />,
    }
  ];

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <Users className="h-8 w-8 text-amber-600" />
        <h2 className="text-2xl font-bold text-slate-800">Competitions</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {competitions.map((competition, index) => (
          <Card
            key={index}
            icon={competition.icon}
            title={competition.title}
            className="bg-white/80 hover:bg-white/90 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <p className="text-slate-600">{competition.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}