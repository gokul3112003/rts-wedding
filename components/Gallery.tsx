import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// =================================================================
// NOTE FOR DEVELOPER:
// This gallery uses placeholder images. To populate it with real photos from Google Drive,
// you would need a server-side component (e.g., a Node.js script using the Google Drive API)
// to fetch the image URLs and provide them as a JSON endpoint.
// The static site would then fetch this JSON and populate the 'images' array.
// For now, we use placeholders to demonstrate the layout and animations.
// =================================================================

const placeholderImages = [
  'https://picsum.photos/id/10/800/1200',
  'https://picsum.photos/id/20/800/600',
  'https://picsum.photos/id/30/1200/800',
  'https://picsum.photos/id/45/800/1000',
  'https://picsum.photos/id/55/800/600',
  'https://picsum.photos/id/65/1000/800',
  'https://picsum.photos/id/75/800/1200',
  'https://picsum.photos/id/85/800/600',
  'https://picsum.photos/id/95/1200/800',
];


const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animation for gallery items triggered by Intersection Observer
    const galleryElement = galleryRef.current;
    if (!galleryElement) return;

    // Use GSAP context for safe cleanup
    const ctx = gsap.context(() => {});

    const observer = new IntersectionObserver(
      (entries) => {
        // If the gallery is intersecting the viewport, trigger the animation
        if (entries[0].isIntersecting) {
          ctx.add(() => {
            gsap.from(".gallery-item", {
              duration: 1,
              scale: 0.8,
              y: 40,
              rotationX: -20,
              opacity: 0,
              stagger: 0.1,
              ease: "power3.out",
            });
          });
          // Animate only once, then disconnect the observer
          observer.disconnect();
        }
      },
      {
        // This margin effectively makes the trigger point when the gallery is 80% down the viewport, similar to `start: "top 80%"`
        rootMargin: "0px 0px -20% 0px",
        threshold: 0,
      }
    );

    observer.observe(galleryElement);

    return () => {
      // Cleanup on component unmount
      observer.disconnect();
      ctx.revert();
    };
  }, []);

  const openLightbox = (imgSrc: string) => {
    setSelectedImage(imgSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
       if (event.key === 'Escape') {
        closeLightbox();
       }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <section id="gallery" className="text-center">
      <h2 className="font-serif text-4xl md:text-5xl text-navy-900 mb-4">Photo Gallery</h2>
      <p className="max-w-2xl mx-auto text-navy-700 mb-12">
        A collection of moments captured by our beloved friends and family.
      </p>

      <div ref={galleryRef} className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {placeholderImages.map((src, index) => (
          <div key={index} className="gallery-item break-inside-avoid" style={{ perspective: '1000px' }}>
            <img
              src={src}
              alt={`Wedding memory ${index + 1}`}
              className="w-full h-auto object-cover rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={() => openLightbox(src)}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      
      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <img 
            src={selectedImage} 
            alt="Full size view" 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
          />
           <button 
             onClick={closeLightbox}
             className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gold-300 transition-colors"
             aria-label="Close image viewer"
           >&times;</button>
        </div>
      )}
    </section>
  );
};

export default Gallery;