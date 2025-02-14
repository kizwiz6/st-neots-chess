// src/app/contact/page.tsx
import { Mail, Users, Trophy } from 'lucide-react';
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
              New members are always welcome to visit during club nights. There is currently no membership fee.
            </p>
            <p className="text-slate-600">
              You can simply come along to play chess - there's no obligation to join the Conservative Club.
            </p>
          </Card>

          <Card
            icon={<Trophy size={24} />}
            title="Club Facilities"
            className="bg-white/80 backdrop-blur-sm"
          >
            <p className="text-slate-600 mb-4">
              We have plenty of chess sets, boards, and clocks available for everyone to use.
            </p>
            <p className="text-slate-600">
              You'll find a wide range of players with different skill levels at the club, making it perfect for players of all abilities.
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
              St Neots Chess Club is affiliated with the{" "}
              <a
                href="http://www.cambschess.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 hover:text-amber-700 transition-colors"
              >
                Cambridgeshire County Chess Association
              </a>
              {" "}and the{" "}
              <a
                href="https://www.englishchess.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 hover:text-amber-700 transition-colors"
              >
                English Chess Federation
              </a>.
            </p>
            <p>
              We participate in various competitions throughout the year and offer friendly games
              and informal coaching for players of all levels.
            </p>
          </div>
        </Card>
      </div>
    </main>
  );
}