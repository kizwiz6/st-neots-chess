import { Clock } from 'lucide-react';
import { CLUB_INFO } from '@/utils/constants';
import Card from '@/components/common/Card';

export default function MeetingTimes() {
  const { meetingTime, address } = CLUB_INFO;

  return (
    <Card
      icon={<Clock size={24} />}
      title="Meeting Times"
      className="bg-white/80 backdrop-blur-sm"
    >
      <p className="text-slate-600">
        We meet on{" "}
        <span className="font-bold text-slate-800">
          {meetingTime.day}s at {meetingTime.time}
        </span> at:
      </p>
      <div className="mt-4 text-slate-600">
        <p className="font-bold text-slate-800">{address.venue}</p>
        <p>{address.street}</p>
        <p>{address.city}</p>
        <p>{address.postcode}</p>
      </div>
    </Card>
  );
}