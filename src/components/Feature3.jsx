import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Feature3 = () => {
  return (
    <div className="feature-section bg-black text-light py-5">
      <div className="container">
        <div className="row justify-content-center g-4">

          {/* Card 1 (Narrower + Taller Header) */}
          <div className="col-12 col-lg-5">
            <div
              className="rounded-4 overflow-hidden shadow bg-black bg-opacity-50 border border-light border-opacity-10"
              style={{
                minHeight: '700px',
              }}
            >
              <div
                className="text-center"
                style={{
                  padding: '80px 20px',  // taller header!
                  background: 'linear-gradient(rgba(255, 255, 255, 0.18), rgba(43, 91, 117, 0.45))',
                }}
              >
                <h3 className="fs-4 fw-medium text-light mb-0">
                  Have perfect timing with
                  <br />
                  Send Later
                </h3>
              </div>
              <div className="bg-dark bg-opacity-50 border-top border-light border-opacity-10">
                <img
                  src="/1a.png"
                  alt="Send Later"
                  className="img-fluid w-100 d-block"
                />
              </div>
            </div>
          </div>

          {/* Card 2 (Wider + Taller Header) */}
          <div className="col-12 col-lg-7">
            <div
              className="rounded-4 overflow-hidden shadow bg-black bg-opacity-50 border border-light border-opacity-10"
              style={{
                minHeight: '700px',
              }}
            >
              <div
                className="text-center bg-dark bg-opacity-50"
                style={{
                  padding: '80px 20px',  // taller header!
                }}
              >
                <h3 className="fs-4 fw-medium text-light mb-0">
                  Reply faster with
                  <br />
                  Instant Reply
                </h3>
              </div>
              <div className="bg-dark bg-opacity-50 border-top border-light border-opacity-10">
                <img
                  src="/1b.png"
                  alt="Instant Reply"
                  className="img-fluid w-100 d-block"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Feature3;
