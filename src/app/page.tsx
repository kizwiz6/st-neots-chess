import Hero from '@/components/sections/Hero';
import LocationInfo from '@/components/sections/LocationInfo';
import Competitions from '@/components/sections/Competitions';

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <LocationInfo />
        <Competitions />
      </div>
    </main>
  );
}