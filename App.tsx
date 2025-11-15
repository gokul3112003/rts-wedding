
import React from 'react';
import Hero from './components/Hero';
import Venue from './components/Venue';
import PhotoUpload from './components/PhotoUpload';
import Gallery from './components/Gallery';
import LiveStream from './components/LiveStream';
import Footer from './components/Footer';

// A decorative divider component to separate sections visually
const SectionDivider: React.FC = () => (
  <div className="w-full max-w-lg mx-auto h-px bg-gold-500/30 my-20" />
);

const App: React.FC = () => {
  return (
    <div className="bg-cream text-navy-800 min-h-screen font-sans">
      <div className="absolute inset-0 z-0 opacity-20" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23121A5A' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
      <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <Hero />
        <SectionDivider />
        <Venue />
        <SectionDivider />
        <PhotoUpload />
        <SectionDivider />
        <Gallery />
        <SectionDivider />
        <LiveStream />
      </main>
      <Footer />
    </div>
  );
};

export default App;
