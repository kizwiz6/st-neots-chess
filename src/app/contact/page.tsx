import { Mail, Users, Calendar } from 'lucide-react';
import Card from '@/components/common/Card';
import LocationInfo from '@/components/sections/LocationInfo';

export default function Contact() {
  return (
    <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Welcome Message */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Contact Us</h1>
          <p className="text-slate-600">
            Whether you're a beginner or an experienced player, we'd love to welcome you to our club.
            Feel free to get in touch or visit us during our club nights.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            icon={<Mail size={24} />}
            title="Email Us"
            className="bg-white/80 backdrop-blur-sm"
          >
            <p className="text-slate-600 mb-4">
              Get in touch via email and we'll get back to you as soon as possible.
            </p>
            <a
              href="mailto:contact@stneotschessclub.com"
              className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
            >
              contact@stneotschessclub.com
            </a>
          </Card>

          <Card
            icon={<Users size={24} />}
            title="Visit Us"
            className="bg-white/80 backdrop-blur-sm"
          >
            <p className="text-slate-600 mb-4">
              New members are always welcome to visit during club nights.
              Your first visit is completely free!
            </p>
            <p className="text-slate-600">
              We recommend contacting us before your first visit.
            </p>
          </Card>

          <Card
            icon={<Calendar size={24} />}
            title="Club Nights"
            className="bg-white/80 backdrop-blur-sm"
          >
            <p className="text-slate-600 mb-4">
              We meet every Monday at 7:30pm during the season (September through to May).
            </p>
            <p className="text-slate-600">
              Players of all strengths are welcome to join us.
            </p>
          </Card>
        </div>

        {/* Location Information */}
        <LocationInfo />

        {/* Additional Information */}
        <Card
          title="Additional Information"
          className="bg-white/80 backdrop-blur-sm"
        >
          <div className="prose prose-slate max-w-none">
            <p>
              St Neots Chess Club is affiliated with the Cambridgeshire County Chess Association
              and the English Chess Federation.
            </p>
            <p>
              We participate in various competitions throughout the season and offer friendly games
              and informal coaching for players of all levels.
            </p>
            <p>
              Please note that while your first visit is free, club membership fees apply for regular attendance.
              Details of membership fees can be discussed during your visit.
            </p>
          </div>
        </Card>
      </div>
    </main>
  );
}