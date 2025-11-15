
import React from 'react';
import { config } from '../config';

const LiveStream: React.FC = () => {
  return (
    <section id="livestream" className="text-center">
      <h2 className="font-serif text-4xl md:text-5xl text-navy-900 mb-4">Watch Live</h2>
      <p className="max-w-2xl mx-auto text-navy-700 mb-8">
        For those who can't be with us in person, we invite you to join our celebration virtually. The live stream will begin shortly before the ceremony.
      </p>

      <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl border-4 border-white aspect-video">
        <iframe
          src={config.youtubeLiveUrl}
          title="Wedding Live Stream"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  );
};

export default LiveStream;
