
import React from 'react';
import { config } from '../config';
import { CameraIcon } from './icons';

// QR Code SVG generated for the link: https://drive.google.com/drive/folders/1drvothbMrm8RujMARwxZIuUKkiGvovOW?usp=sharing
const QrCodeSvg: React.FC = () => (
  <svg width="200" height="200" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
    <path fill="#0D133C" d="M128 0h128v128h-128zM0 0h128v128h-128zM0 128h128v128h-128z" />
    <path fill="#FDFBF5" d="M32 32h64v64h-64zM160 32h64v64h-64zM32 160h64v64h-64zM240 240v-48h-16v32h-32v16zM128 128h16v16h-16zM112 112h16v16h-16zM96 128h16v16h-16zM112 144h16v16h-16zM128 160h16v16h-16zM144 144h16v16h-16zM160 128h16v16h-16zM144 112h16v16h-16zM128 224h16v16h-16zM112 208h16v16h-16zM96 224h16v16h-16zM112 240h16v16h-16zM160 224h16v16h-16zM144 208h16v16h-16zM176 208h16v16h-16zM192 224h16v16h-16zM176 240h16v16h-16zM208 192h16v16h-16zM224 176h16v16h-16zM208 160h16v16h-16zM192 144h16v16h-16zM208 128h16v16h-16zM192 112h16v16h-16zM176 128h16v16h-16zM144 176h16v16h-16zM128 192h16v16h-16zM160 160h16v16h-16z" />
  </svg>
);

const PhotoUpload: React.FC = () => {
  return (
    <section id="photos" className="text-center">
      <h2 className="font-serif text-4xl md:text-5xl text-navy-900 mb-4">Share Your Photos</h2>
      <p className="max-w-2xl mx-auto text-navy-700 mb-8">
        Help us capture the memories! Scan the QR code or click the link below to upload your photos and videos from our special day to our shared album.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <QrCodeSvg />
        </div>
        <div className="text-left max-w-sm">
          <div className="flex items-center text-2xl font-bold text-navy-800 mb-4">
            <CameraIcon className="w-8 h-8 mr-3 text-gold-700" />
            <span>How to Upload</span>
          </div>
          <ol className="list-decimal list-inside space-y-2 text-navy-700">
            <li>Open your phone's camera and point it at the QR code.</li>
            <li>Tap the link that appears to open our Google Drive album.</li>
            <li>Tap the '+' button to add your photos.</li>
          </ol>
           <p className="mt-4 text-sm">
            Or, <a href={config.googleDriveUploadUrl} target="_blank" rel="noopener noreferrer" className="text-gold-700 font-bold hover:underline">click here to open the album</a>.
          </p>
          <p className="mt-4 text-xs text-gray-500">
            Having trouble? You can also email photos to <a href={`mailto:${config.contactEmail}`} className="underline">{config.contactEmail}</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotoUpload;
