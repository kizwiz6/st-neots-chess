import Card from '@/components/common/Card';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <Card
          icon={<Mail size={24} />}
          title="Contact Us"
          className="bg-white/80 backdrop-blur-sm"
        >
          <p className="text-slate-600 mb-6">
            Prospective members are welcome to visit the Club as our guest and play games with Club members.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Visit Us</h3>
              <p className="text-slate-600">
                St. Neots Conservative Club<br />
                12 New St<br />
                St. Neots<br />
                PE19 1AE
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Meeting Times</h3>
              <p className="text-slate-600">
                We meet on Mondays at 7-30pm during the season (September through to May)
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Email Us</h3>
              <p className="text-slate-600">
                Please email us at{" "}
                <a
                  href="mailto:contact@stneotschessclub.com"
                  className="text-amber-600 hover:text-amber-700 transition-colors"
                >
                  contact@stneotschessclub.com
                </a>
              </p>
              <p className="text-sm text-slate-500 mt-1">
                We promise not to forward your contact details to any other parties.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}