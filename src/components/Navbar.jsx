import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const desktopImages = ['/dsk1.png', '/dsk2.png', '/dsk3.png'];
const phoneImages = ['mv1.png', 'mv2.png', 'mv3.png'];

const Navbar = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % desktopImages.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        style={{
          background: `linear-gradient(to bottom, #000000, #090214, #1a1a2e, #233554, #2f3d56),
                       radial-gradient(50% 50% at 50% 50%, rgba(158, 110, 230, 0.28) 0%, rgba(158, 110, 230, 0) 100%)`,
          minHeight: '100vh',
          color: 'white',
          overflowX: 'hidden',
          fontFamily: "'Helvetica Neue', sans-serif",
        }}
      >
        {/* Navbar */}
        <nav
        
          className="navbar navbar-expand-lg navbar-dark sticky-top px-5 py-3 p"
          style={{
            backgroundColor: '#000',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
            backdropFilter: 'blur(12px)',
            zIndex: 1000,
          }}
        >
          <div className="container-fluid d-flex justify-content-between align-items-center ">
            <div className="d-flex align-items-center gap-4">
              <a
                className="navbar-brand "
                href="#"
                style={{
                  fontWeight: 'unset',
                  fontSize: '1em',
                  letterSpacing: '0.4rem',
                  textTransform: 'uppercase',
                  color: 'white',
                  
                }}
              >
                SUPERHUMAN
              </a>

              <div className="collapse navbar-collapse show" id="mainNav">
                <ul className="navbar-nav gap-4">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ color: '#e0e0e0' }}
                    >
                      Product
                    </a>
                    <ul
                      className="dropdown-menu"
                      style={{ backgroundColor: '#0f0f0f', border: 'none' }}
                    >
                      <li><a className="dropdown-item text-light" href="#">Inbox</a></li>
                      <li><a className="dropdown-item text-light" href="#">Calendar</a></li>
                      <li><a className="dropdown-item text-light" href="#">Reminders</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item text-light" href="#">All Features</a></li>
                    </ul>
                  </li>
                  <li className="nav-item"><a className="nav-link" href="#" style={navLink}>Resources</a></li>
                  <li className="nav-item"><a className="nav-link" href="#" style={navLink}>Pricing</a></li>
                  <li className="nav-item"><a className="nav-link" href="#" style={navLink}>Love 💜</a></li>
                </ul>
              </div>
            </div>

            <button
              className="btn btn-primary px-3  gradient-btn d-none d-lg-block"
              style={gradientBtn}
            >
              Get Started
            </button>

            <button
              className="navbar-toggler ms-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section
          className="hero-section d-flex flex-column align-items-center justify-content-center text-center px-3"
          style={{ minHeight: '80vh' }}
        >
          <div
            className="event-banner mb-4 px-3 py-2 rounded-3 fw-semibold"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', color: 'white' }}
          >
            📅 Virtual Event: How AI-Native Tools Are Reshaping Work
          </div>

          <h1 style={textClass}>
            Save 4 hours per person <br /> every single week
          </h1>

          <p style={text2}>
            Superhuman is the most productive email app ever made. <br />
            Collaborate faster and get more done with AI-native email.
          </p>

          <button className="btn btn-lg btn-primary px-4 py-2 rounded" style={gradientBtn}>
            Get Started
          </button>
        </section>

        {/* Showcase Section */}
        <section className="showcase-section text-center py-5">
          <div className="d-flex justify-content-center">
            <div className="position-relative d-flex justify-content-center align-items-end">
              <img
                src={desktopImages[index]}
                alt="Desktop"
                className="img-fluid"
                style={{
                  width: '880px',
                  maxWidth: '90vw',
                  borderRadius: '20px',
                  zIndex: 1,
                  position: 'relative',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                }}
              />
              <img
                src={phoneImages[index]}
                alt="Phone"
                className="img-fluid position-absolute"
                style={{
                  width: '220px',
                  maxWidth: '40vw',
                  borderRadius: '24px',
                  right: '-40px',
                  bottom: '-5px',
                  zIndex: 2,
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)',
                }}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

// Styles
const navLink = {
  color: '#e0e0e0',
  fontWeight: 400,
  fontSize: '1rem',
  margin: '0 0.5rem',
  transition: 'color 0.3s ease',
};

const gradientBtn = {
  background: 'linear-gradient(135deg, #d980fa, #a55eea)',
  border: 'none',
  color: 'white',
  borderRadius: '8px',
  fontWeight: 500,
  fontSize: '1rem',
  transition: 'opacity 0.3s ease',
};

const textClass = {
  backgroundImage:
    'radial-gradient(70.54% 70.54% at 50% 50%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.573) 92.71%, rgba(255, 255, 255, 0.6) 92.72%)',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: 'white',
  textAlign: 'center',
  whiteSpace: 'pre-wrap',
  fontWeight: 400,
  fontSize: '80px',
  lineHeight: '96px',
  fontFamily: '"Adelle Sans SemiBold", sans-serif',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
};

const text2 = {
  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
  fontSize: '1.5rem',
  lineHeight: 1.6,
  fontWeight: 500,
  color: '#fff',
  letterSpacing: '-0.2px',
  textAlign: 'center',
  margin: '2rem auto',
  maxWidth: '800px',
};

export default Navbar;
