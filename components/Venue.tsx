
import React from 'react';
import { config } from '../config';
import { MapPinIcon } from './icons';

const Venue: React.FC = () => {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${config.venueName}, ${config.venueAddress}, ${config.venueCity}`)}`;

  return (
    <section id="venue" className="text-center">
      <h2 className="font-serif text-4xl md:text-5xl text-navy-900 mb-8">The Venue</h2>
      <div className="flex items-center justify-center text-lg mb-4 text-navy-800">
        <MapPinIcon className="w-6 h-6 mr-2 text-gold-700" />
        <p className="font-bold">{config.venueName}</p>
      </div>
      <p className="text-md text-navy-700 mb-8">{config.venueAddress}, {config.venueCity}</p>
      
      <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl border-4 border-white">
        <iframe
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={config.venueMapEmbedUrl}>
        </iframe>
      </div>

      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block bg-gold-500 text-navy-900 font-bold py-3 px-8 rounded-lg shadow-md hover:bg-gold-700 hover:text-white transition-all duration-300 transform hover:scale-105"
      >
        Get Directions
      </a>
    </section>
  );
};

export default Venue;
