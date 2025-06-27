import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmailCompatibilitySection = () => {
  return (
    <section
      className="container-fluid d-flex flex-column flex-lg-row align-items-center justify-content-between px-5 py-5"
      style={{
        backgroundColor: '#000',
        color: 'white',
        minHeight: '80vh',
        overflow: 'hidden',
      }}
    >
      {/* Text Section */}
      <div className="text-left mb-4 mb-lg-0" style={{ maxWidth: '600px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '600', lineHeight: 1.3 }}>
          Built for teams that use {' '}
          <span style={gradientGmail}>Gmail</span> or{' '}
          <span style={gradientOutlook}>Outlook</span>
        </h1>
      </div>

      {/* Image Section */}
      <div className="text-center">
        <img
          src="mail.png" // Replace with actual path
          alt="Email UI"
          className="img-fluid"
          style={{
            maxWidth: '650px',
            borderRadius: '12px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)',
          }}
        />
      </div>
    </section>
  );
};

// Gradient Text Styles
const gradientGmail = {
  background: 'linear-gradient(90deg, #f6c564, #e87b87)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

const gradientOutlook = {
  background: 'linear-gradient(90deg, #c478ed, #a86ee0)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

export default EmailCompatibilitySection;
