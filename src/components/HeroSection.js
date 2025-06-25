import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './HeroSection.css';

const heroImageUrl = 'https://static.nike.com/a/images/f_auto/dpr_1.0/w_1260,c_limit/d2c3e414-f58c-4f80-87a1-872f2a74c438/nike-just-do-it.png'; // Example Nike-style hero image URL

const HeroSection = () => {
  return (
    <div
      className="hero-section text-white d-flex align-items-center justify-content-center text-center"
      style={{
        backgroundImage: `url(${heroImageUrl})`,
      }}
    >
      <div className="overlay"></div>
      <Container className="hero-content position-relative z-index-1">
        <h1 className="display-1 fw-bolder mb-4">JUST DO IT.</h1>
        <p className="lead fs-4 mb-5">
          Unlock the power of movement with Nike's latest innovations.
        </p>
        <Button variant="light" size="lg" className="rounded-pill px-5 py-3 text-uppercase fw-bold nike-button">
          Shop All
        </Button>
      </Container>
    </div>
  );
};

export default HeroSection;