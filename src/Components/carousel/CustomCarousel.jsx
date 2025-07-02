import React, { useState, useEffect } from 'react';
import './CustomCarousel.css';

const images = [
  '/images/carousel/slider1.jpeg',
  '/images/carousel/slider2.jpeg',
  '/images/carousel/slider3.jpeg',
  '/images/carousel/slider4.jpeg',
  '/images/carousel/slider5.jpeg',
  '/images/carousel/slider6.jpeg',
  '/images/carousel/slider7.jpeg',
  '/images/carousel/slider8.jpeg',
  '/images/carousel/slider9.jpeg',
];

const itemsPerSlide = 3;

function CustomCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(images.length / itemsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 3000); // autoplay every 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [totalSlides]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const start = currentIndex * itemsPerSlide;
  const currentImages = images.slice(start, start + itemsPerSlide);

  return (
    <div className="custom-carousel container my-5">
      <div className="carousel-row d-flex justify-content-center gap-3">
        {currentImages.map((img, idx) => (
          <div key={idx} className="carousel-item-box">
            <img src={img} alt={`Slide ${idx}`} />
          </div>
        ))}
      </div>

      <div className="dots text-center mt-3">
        {[...Array(totalSlides)].map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default CustomCarousel;
