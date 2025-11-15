import React, { useState } from 'react';
import ParallaxTilt from 'react-parallax-tilt';
import { config } from '../config';
import { CalendarIcon, ClockIcon, MapPinIcon } from './icons';

const Hero: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section className="flex flex-col items-center text-center py-10">
      <p className="font-serif text-gold-700 text-lg mb-2">We're Getting Married!</p>
      <h1 className="font-serif text-5xl md:text-7xl text-navy-900 font-bold">
        {config.brideName} &amp; {config.groomName}
      </h1>
      <p className="mt-4 text-lg text-navy-700 max-w-2xl">
        With joyful hearts, we invite you to celebrate our wedding. Your presence would be the greatest gift as we begin our new life together.
      </p>

      <div className="mt-12 w-full max-w-lg" style={{ perspective: '1500px' }}>
        <ParallaxTilt
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          glareEnable={true}
          glareMaxOpacity={0.1}
          glarePosition="all"
          scale={1.05}
          transitionSpeed={2000}
        >
          <div
            className="relative w-full h-[600px] cursor-pointer rounded-lg shadow-2xl transition-transform duration-700"
            style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
            onClick={handleCardClick}
          >
            {/* Front of the Card */}
            <div className="absolute inset-0 bg-white rounded-lg p-8 flex flex-col items-center justify-center backface-hidden" style={{ backfaceVisibility: 'hidden' }}>
                <div className="absolute inset-0 rounded-lg border-8 border-gold-300 opacity-50"></div>
                <div className="relative text-center">
                    <p className="font-serif text-gold-700 text-2xl">Together with their families</p>
                    <h2 className="font-serif text-6xl my-6 text-navy-900">
                        {config.brideName}
                        <span className="block text-3xl font-sans font-light my-2">&amp;</span>
                        {config.groomName}
                    </h2>
                    <p className="text-navy-700 text-lg">{config.date}</p>
                    <p className="text-navy-700 mt-1">{config.time}</p>
                    <p className="text-navy-700 mt-4 font-bold">{config.venueName}</p>
                    <div className="mt-8 text-sm uppercase tracking-widest text-gold-700">Click to see details</div>
                </div>
            </div>

            {/* Back of the Card */}
            <div className="absolute inset-0 bg-gold-100 rounded-lg p-8 flex flex-col justify-center backface-hidden" style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}>
              <div className="text-left text-navy-800">
                  <h3 className="font-serif text-3xl text-navy-900 border-b border-gold-300 pb-2 mb-6">Event Details</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold font-serif text-xl">Wedding Ceremony</h4>
                      <div className="flex items-center mt-2 space-x-3">
                        <CalendarIcon className="w-5 h-5 text-gold-700" />
                        <span>{config.date}</span>
                      </div>
                      <div className="flex items-center mt-2 space-x-3">
                        <ClockIcon className="w-5 h-5 text-gold-700" />
                        <span>{config.time}</span>
                      </div>
                      <div className="flex items-start mt-2 space-x-3">
                        <MapPinIcon className="w-5 h-5 text-gold-700 flex-shrink-0 mt-1" />
                        <span>{config.venueName}, {config.venueAddress}, {config.venueCity}</span>
                      </div>
                    </div>
                     <div>
                      <h4 className="font-bold font-serif text-xl">Reception</h4>
                      <div className="flex items-center mt-2 space-x-3">
                        <CalendarIcon className="w-5 h-5 text-gold-700" />
                        <span>{config.receptionDate}</span>
                      </div>
                      <div className="flex items-center mt-2 space-x-3">
                        <ClockIcon className="w-5 h-5 text-gold-700" />
                        <span>{config.receptionTime}</span>
                      </div>
                      <div className="flex items-start mt-2 space-x-3">
                        <MapPinIcon className="w-5 h-5 text-gold-700 flex-shrink-0 mt-1" />
                        <span>{config.receptionVenue}</span>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </ParallaxTilt>
      </div>
    </section>
  );
};

export default Hero;