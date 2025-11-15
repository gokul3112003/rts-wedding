
import React from 'react';
import { config } from '../config';
import { CameraIcon } from './icons';

const QrCode: React.FC<{ url: string }> = ({ url }) => {
  // Use a free public API to generate the QR code image dynamically.
  // This ensures the QR code always matches the URL in the config file.
  // Colors are customized to match the website's theme for a cohesive look.
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
    url
  )}&size=200x200&bgcolor=ffffff&color=0D133C&margin=10`;

  return (
    <img
      src={qrApiUrl}
      alt="QR Code for photo upload"
      width="200"
      height="200"
      className="mx-auto"
      aria-label="Scan to upload photos"
    />
  );
};


const PhotoUpload: React.FC = () => {
  return (
    <section id="photos" className="text-center">
      <h2 className="font-serif text-4xl md:text-5xl text-navy-900 mb-4">Share Your Photos</h2>
      <p className="max-w-2xl mx-auto text-navy-700 mb-8">
        Help us capture the memories! Scan the QR code or click the link below to upload your photos and videos from our special day to our shared album.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <QrCode url={config.googleDriveUploadUrl} />
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
