import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// ImageCarousel component displays a rotating set of images.
const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance the carousel every few seconds
  useEffect(() => {
    const interval = setInterval(goToNext, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [images.length]); // Re-run effect if image count changes

  return (
    <div className="relative w-full max-w-lg mx-auto rounded-2xl overflow-hidden shadow-xl border border-white/20">
      {/* Current Image Display */}
      <img
        src={images[currentIndex]}
        alt={`Carousel image ${currentIndex + 1}`}
        className="w-full h-64 object-cover rounded-2xl transition-opacity duration-500 ease-in-out"
        onError={(e) => {
          e.target.onerror = null; // Prevent infinite loop
          e.target.src = `https://placehold.co/600x400/E0E0E0/333333?text=Image+Error`; // Fallback image
        }}
      />

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/70 p-2 rounded-full shadow-lg transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/70 p-2 rounded-full shadow-lg transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      {/* Dots for navigation/indication 
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-white scale-125' : 'bg-gray-400 opacity-70'
            }`}
            aria-label={`Go to image ${index + 1}`}
          ></button>
        ))}
      </div>
      */}
    </div>
  );
};

export default ImageCarousel;
