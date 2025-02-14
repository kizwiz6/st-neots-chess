import Card from '@/components/common/Card';
import { FAQ_ITEMS } from '@/utils/constants';
import { HelpCircle, ExternalLink, Table, Calendar } from 'lucide-react';

export default function FAQPage() {
  return (
    <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-800 mb-8 text-center">
          Frequently Asked Questions
        </h1>

        {/* League Tables Card */}
        <Card
          icon={<Table size={24} />}
          title="League Tables"
          className="bg-white/80 hover:bg-white/90 transition-all duration-300 mb-6"
        >
          <p className="text-slate-600 mb-4">
            View the current standings in the Cambridgeshire County Chess League. We're currently top of Division 1!
          </p>
          <a
            href="https://lms.englishchess.org.uk/lms/organisation/1230/tables"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
          >
            View League Tables <ExternalLink className="ml-2" size={16} />
          </a>
        </Card>

        {/* Fixtures Card */}
        <Card
          icon={<Calendar size={24} />}
          title="Fixtures"
          className="bg-white/80 hover:bg-white/90 transition-all duration-300 mb-6"
        >
          <p className="text-slate-600 mb-4">
            Check upcoming matches and recent results in all competitions.
          </p>
          <a
            href="https://lms.englishchess.org.uk/lms/club/1730/fixtures"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
          >
            View Fixtures <ExternalLink className="ml-2" size={16} />
          </a>
        </Card>

        {/* Regular FAQ Items */}
        <div className="space-y-6">
          {FAQ_ITEMS.map((item, index) => (
            <Card
              key={index}
              icon={<HelpCircle size={24} />}
              title={item.question}
              className="bg-white/80 hover:bg-white/90 transition-all duration-300"
            >
              <p className="text-slate-600">{item.answer}</p>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}