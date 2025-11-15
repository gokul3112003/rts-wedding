import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { config } from '../config';

// =================================================================
// NOTE FOR DEVELOPER:
// This gallery is populated from the `galleryPhotoUrls` array in `config.ts`.
// To add your own photos, please follow the instructions in that file
// to get direct image links from your Google Photos album.
// =================================================================

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const galleryElement = galleryRef.current;
    if (!galleryElement) return;

    // Use GSAP context for safe cleanup and automatic reversion
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            if (prefersReducedMotion) {
              // Accessible, simple fade-in animation for users who prefer reduced motion
              gsap.from(".gallery-item", {
                duration: 1.2,
                autoAlpha: 0,
                stagger: 0.15,
                ease: "power2.out",
              });
            } else {
              // Enhanced 3D animation with a playful entrance
              gsap.from(".gallery-item", {
                duration: 1.5,
                scale: 0.7,
                y: 80,
                rotationZ: -10,
                rotationX: 45,
                autoAlpha: 0,
                stagger: {
                  each: 0.1,
                  from: "start",
                },
                ease: "power4.out",
              });
              
              // Animate the bloom effect on top
              gsap.fromTo(".bloom-effect", 
                { scale: 0.3, autoAlpha: 0.8 },
                {
                  duration: 1.0,
                  scale: 3.0,
                  autoAlpha: 0,
                  stagger: {
                    each: 0.1,
                    from: "start",
                  },
                  ease: "expo.in",
                  delay: 0.2,
                }
              );
            }
            // Once animated, we don't need to watch it anymore
            observer.disconnect();
          }
        },
        { rootMargin: "0px 0px -20% 0px", threshold: 0 }
      );

      if (galleryElement) {
        observer.observe(galleryElement);
      }
      
      return () => {
        if (galleryElement) {
            observer.disconnect();
        }
      }
    }, galleryRef);

    // Cleanup function that runs when component unmounts
    return () => ctx.revert();
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
        {config.galleryPhotoUrls.map((src, index) => (
          <div key={index} className="gallery-item break-inside-avoid" style={{ perspective: '1000px' }}>
             <div
              className="relative rounded-lg shadow-lg cursor-pointer group overflow-hidden"
              onClick={() => openLightbox(src)}
            >
              <div className="bloom-effect absolute inset-0 z-10 origin-center bg-[radial-gradient(circle,rgba(255,213,79,0.5)_0%,rgba(255,213,79,0)_70%)] pointer-events-none" />
              <img
                src={src}
                alt={`Wedding memory ${index + 1}`}
                className="w-full h-auto object-cover block transform transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
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