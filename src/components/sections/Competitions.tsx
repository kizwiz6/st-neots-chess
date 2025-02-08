import { Trophy } from 'lucide-react';
import Card from '@/components/common/Card';

export default function Competitions() {
  const competitions = [
    {
      title: "Cambridgeshire County Chess League",
      description: "The premier chess competition in the county, we have teams in both the first and second division."
    },
    {
      title: "Cambridgeshire County Fenland Cup",
      description: "A knockout competition featuring teams playing in the Cambridgeshire County Chess League."
    },
    {
      title: "Cambridgeshire County U550 Competition",
      description: "A sister competition to the Chess League in which the aggregate ratings total for the team cannot exceed 550 (using ECF ratings)."
    }
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-800 flex items-center space-x-2">
        <Trophy className="h-6 w-6" />
        <span>Competitions</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {competitions.map((competition, index) => (
          <Card 
            key={index}
            title={competition.title}
            className="bg-white/80 hover:bg-white/90 hover-lift group"
          >
            <p className="text-slate-600">{competition.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}