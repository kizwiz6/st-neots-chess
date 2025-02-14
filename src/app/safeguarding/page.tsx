import Card from '@/components/common/Card';
import { Shield } from 'lucide-react';

export default function SafeguardingPage() {
  return (
    <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-800 mb-8 text-center">
          Child Protection Policy
        </h1>

        <Card
          icon={<Shield size={24} />}
          title="Our Commitment to Safeguarding"
          className="bg-white/80 mb-6"
        >
          <div className="prose prose-slate max-w-none">
            <p>
              St Neots Chess Club is committed to ensuring the safety and wellbeing of all our members,
              particularly children and young people.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">DBS Checked Officials</h2>
            <p>
              Our safeguarding officers, Helen and Matthew, are fully DBS checked and available to
              discuss any concerns.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">ECF Safeguarding</h2>
            <p>
              We follow the English Chess Federation's Child Protection Policy. For more detailed
              information, please visit the{' '}
              <a
                href="https://www.englishchess.org.uk/safeguarding-and-the-ecf/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 hover:text-amber-700 underline"
              >
                ECF Safeguarding Policy
              </a>
              .
            </p>
          </div>
        </Card>
      </div>
    </main>
  );
}