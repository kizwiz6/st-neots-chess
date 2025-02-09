import Hero from '@/components/sections/Hero';
import MeetingTimes from '@/components/sections/MeetingTimes';
import Competitions from '@/components/sections/Competitions';
import UsefulLinks from '@/components/sections/UsefulLinks';
import LocationInfo from '@/components/sections/LocationInfo';

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <LocationInfo />
        <Competitions />
        <UsefulLinks />
      </div>
    </main>
  );
}