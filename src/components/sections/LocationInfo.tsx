'use client';

import { useState } from 'react';
import { MapPin, Globe, Clock, AlertCircle } from 'lucide-react';
import Card from '@/components/common/Card';
import { CLUB_INFO } from '@/utils/constants';

export default function LocationInfo() {
  const { meetingTime, address } = CLUB_INFO;
  const [mapError, setMapError] = useState(false);

  const handleDirectionsClick = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
        `${address.venue}, ${address.street}, ${address.city}, ${address.postcode}`
      )}`,
      '_blank'
    );
  };

  const handleMapError = () => {
    setMapError(true);
  };

  return (
    <Card
      icon={<MapPin size={24} />}
      title="Meeting Location"
      className="bg-white/80 backdrop-blur-sm"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {/* Location Details */}
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
              <Clock size={18} />
              Meeting Times
            </h3>
            <p className="text-slate-600">
              During the season ({meetingTime.season}), we meet on{" "}
              <span className="font-bold text-slate-800">
                {meetingTime.day}s at {meetingTime.time}
              </span>
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
              <MapPin size={18} />
              Address
            </h3>
            <div className="text-slate-600">
              <a
                href="https://www.stneotsconservativeclub.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-amber-600 hover:text-amber-700 transition-colors flex items-center gap-2"
              >
                <Globe size={16} />
                {address.venue}
              </a>
              <p>{address.street}</p>
              <p>{address.city}</p>
              <p>{address.postcode}</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="h-64 md:h-full min-h-[250px] relative">
          {mapError ? (
            <div className="h-full flex items-center justify-center bg-slate-100 rounded-xl">
              <div className="text-center p-4">
                <AlertCircle className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                <p className="text-slate-600">Unable to load map</p>
                <button
                  onClick={handleDirectionsClick}
                  className="mt-2 text-amber-600 hover:text-amber-700 underline"
                >
                  Get directions
                </button>
              </div>
            </div>
          ) : (
            <>
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.75rem' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(
                  `${address.venue}, ${address.street}, ${address.city}, ${address.postcode}`
                )}`}
                onError={handleMapError}
              ></iframe>
              <button
                onClick={handleDirectionsClick}
                className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Get Directions
              </button>
            </>
          )}
        </div>
      </div>
    </Card>
  );
}