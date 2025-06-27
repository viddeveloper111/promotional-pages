import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="d-flex align-items-center justify-content-center vh-100 position-relative text-white"
      style={{
        background: `
          radial-gradient(ellipse at 20% 40%, rgba(90, 60, 120, 0.5) 0%, transparent 60%),
          linear-gradient(90deg, #1a0924 0%, #09141a 100%)
        `,
        overflow: 'hidden',
      }}
    >
      {/* Large faded 15M in background */}
      <div
        className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center"
        style={{
          top: 0,
          left: 0,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        <span
          style={{
            fontSize: '22vw',
            fontWeight: 700,
            color: 'rgba(255,255,255,0.04)',
            letterSpacing: '-0.05em',
            userSelect: 'none',
          }}
        >
          15M
        </span>
      </div>
      {/* Main content */}
      <div
        className="container position-relative text-center"
        style={{ zIndex: 2 }}
      >
        <h1 className="display-4 fw-bold mb-3" style={{ fontSize: '2.8rem' }}>
          Superhuman saves teams over
        </h1>
        <h2 className="display-5 fw-bold mb-4" style={{ fontSize: '2.2rem' }}>
          <span style={{ color: 'rgb(255, 197, 110)' }}>15 million </span>
          <span style={{ color: 'rgb(255, 143, 143)' }}>hours</span>
          <span className="text-white"> every single year.</span>
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
