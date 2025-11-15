import React from 'react';
import { config } from '../config';

const Footer: React.FC = () => {
  const year = new Date(config.date).getFullYear() || new Date().getFullYear();
  
  return (
    <footer className="text-center py-10 mt-10 border-t border-gold-500/20">
      <p className="font-serif text-2xl text-navy-900">
        {config.groomName} &amp; {config.brideName}
      </p>
      <p className="text-navy-700 mt-2">
        {year}
      </p>
    </footer>
  );
};

export default Footer;