import React from 'react';
import './HeroSection.css';

const heroImageUrl = 'https://media.about.nike.com/image-downloads/b9b56ee3-aee4-4a3f-b213-53f7245ec949/002-su24-air-group.jpeg';

const breaking4TextImageUrl = '/breaking22.png';

const HeroSection = () => {
  return (
    <div
      className="hero-section d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${heroImageUrl})`,
        height: '10px',
      }}
    >
      <div className="overlay"></div>
      <div className="hero-content position-relative z-index-1 text-center">
        <img
          src={breaking4TextImageUrl}
          alt="BREAKING2"
          className="breaking4-image"
        />
      </div>
    </div>
  );
};

export default HeroSection;