import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FeatureCards = () => {
  return (
    <div className="feature-section bg-black text-light py-5">
      <div className="container">
        <div className="row justify-content-center g-4">

          {/* Card 1 */}
          <div className="col-md-6">
            <div
              className="rounded-4 overflow-hidden"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                boxShadow: '0 0 24px rgba(255, 255, 255, 0.04)',
                borderRadius: '24px',
              }}
            >
              <div
                className="text-center"
                style={{
                  padding: '40px 20px 20px',
                  backgroundImage:
                    'linear-gradient(rgba(255, 255, 255, 0.05), rgba(43, 91, 117, 0.25))',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.6rem',
                    fontWeight: 500,
                    backgroundImage: 'radial-gradient(circle, #fff 0%, #ccc 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1.4,
                  }}
                >
                  Have perfect timing with<br />Send&nbsp;Later
                </h3>
              </div>
              <div>
                <img
                  src="/1a.png"
                  alt="Send Later"
                  className="img-fluid"
                  style={{
                    width: '100%',
                    display: 'block',
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Card 2 */}
<div className="col-md-6">
  <div
    className="rounded-4 overflow-hidden"
    style={{
      background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.06), rgba(0, 0, 0, 0.4))',
      boxShadow: '0 0 24px rgba(0, 0, 0, 0.4)',
      borderRadius: '24px',
      border: '1px solid rgba(255, 255, 255, 0.05)',
    }}
  >
    <div
      className="text-center"
      style={{
        padding: '40px 20px 20px',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      }}
    >
      <h3
        style={{
          fontSize: '1.6rem',
          fontWeight: 500,
          color: '#ffffff',
          lineHeight: 1.4,
        }}
      >
        Reply faster with<br />Instant Reply
      </h3>
    </div>
    <div
      style={{
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent)',
      }}
    >
      <img
        src="/1b.png"
        alt="Instant Reply"
        className="img-fluid"
        style={{
          width: '100%',
          display: 'block',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      />
    </div>
  </div>
</div>


        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
