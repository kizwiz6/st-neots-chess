// src/components/sections/LocationInfo.tsx
'use client';

import { useState } from 'react';
import { MapPin, Globe, Clock } from 'lucide-react';
import Card from '@/components/common/Card';
import { CLUB_INFO } from '@/utils/constants';

export default function LocationInfo() {
  const { meetingTime, address } = CLUB_INFO;
  const [viewMode, setViewMode] = useState<'map' | 'street'>('map');

  const handleDirectionsClick = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
        `${address.venue}, ${address.street}, ${address.city}, ${address.postcode}`
      )}`,
      '_blank'
    );
  };

  // Street View parameters using specific panorama ID
  const panoramaId = "B4hB4jOKojEZhd6nxlQP8w"; // Extracted from URL
  const heading = 100; // Adjust this value to change the camera direction (0-360 degrees)
  const pitch = 0;     // Camera angle (0 is horizontal, 90 is straight up)
  const fov = 90;      // Field of view
  const streetViewUrl = `https://www.google.com/maps/embed/v1/streetview?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&pano=${panoramaId}&heading=${heading}&pitch=${pitch}&fov=${fov}`;

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
              We meet on{" "}
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

          {/* View toggle buttons */}
          <div className="flex space-x-2 pt-2">
            <button
              onClick={() => setViewMode('map')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'map'
                  ? 'bg-amber-600 text-white'
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              Map View
            </button>
            <button
              onClick={() => setViewMode('street')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'street'
                  ? 'bg-amber-600 text-white'
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              Street View
            </button>
          </div>
        </div>

        {/* Map or Street View */}
        <div className="h-64 md:h-full min-h-[250px] relative">
          {viewMode === 'map' ? (
            <>
              <iframe
                title="location"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.75rem' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(
                  `${address.venue}, ${address.street}, ${address.city}, ${address.postcode}`
                )}`}
              ></iframe>
              <button
                onClick={handleDirectionsClick}
                className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Get Directions
              </button>
            </>
          ) : (
            <iframe
              title="street-view"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '0.75rem' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={streetViewUrl}
            ></iframe>
          )}
        </div>
      </div>
    </Card>
  );
}