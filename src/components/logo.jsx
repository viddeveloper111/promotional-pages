import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const logos = [
  'svgexport-5.png',
  'svgexport-6.png',
  'svgexport-7.png',
  'svgexport-8.png',
  'svgexport-9.png',
  'svgexport-10.png',
  'svgexport-11.png',
];

const ClientLogos = () => {
  return (
    <div
      className="container-fluid"
      style={{
        background: 'linear-gradient(to right, #0e051f, #1a0833)',
        color: 'white',
        overflow: 'hidden',
        padding: '2rem 0',
      }}
    >
      <div
        className="position-relative"
        style={{
          overflow: 'hidden',
          width: '100%',
        }}
      >
        <div
          className="d-flex"
          style={{
            animation: 'marquee 25s linear infinite',
            whiteSpace: 'nowrap',
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="px-4 d-flex align-items-center justify-content-center flex-shrink-0"
              style={{ minWidth: '100px' }}
            >
              <img
                src={`/logos/${logo}`}
                alt={logo}
                className="img-fluid"
                style={{
                  height: '50px',
                  opacity: 0.85,
                  transition: 'transform 0.3s ease, opacity 0.3s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.opacity = '0.85';
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Inline keyframes styling */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default ClientLogos;
