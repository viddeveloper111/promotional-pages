import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import logo1 from "../assets/svgexport-13.png";
import logo2 from "../assets/svgexport-14.png";
import logo3 from "../assets/svgexport-15.png";
import logo4 from "../assets/svgexport-16.png";
import logo5 from "../assets/svgexport-17.png";
import logo6 from "../assets/svgexport-18.png";
import logo7 from "../assets/svgexport-19.png";
import logo8 from "../assets/svgexport-20.png";
import logo9 from "../assets/svgexport-21.png";
import logo10 from "../assets/svgexport-22.png";
import logo11 from "../assets/svgexport-23.png";
import logo12 from "../assets/svgexport-24.png";
import logo13 from "../assets/svgexport-25.png";
import logo14 from "../assets/svgexport-26.png";
import logo15 from "../assets/svgexport-27.png";
import logo16 from "../assets/svgexport-28.png";
import logo17 from "../assets/svgexport-29.png";
import logo18 from "../assets/svgexport-30.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18];

const TrustedBySection = () => {
  const [startIdx, setStartIdx] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setStartIdx((prev) => (prev + 6) % logos.length);
        setAnimating(false);
      }, 600);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleLogos = [];
  for (let i = 0; i < 6; i++) {
    visibleLogos.push(logos[(startIdx + i) % logos.length]);
  }

  // Blur style for logos
  const logoStyle = (animating, isBlurred) => ({
    maxWidth: 140,
    maxHeight: 60,
    filter: isBlurred
      ? "blur(8px) grayscale(1)"
      : animating
      ? "blur(8px) grayscale(1)"
      : "grayscale(1)",
    opacity: isBlurred ? 0.7 : animating ? 0 : 0.85,
    transition: "filter 0.3s, opacity 0.3s, transform 0.6s",
    transform: animating ? "rotateY(360deg) scale(0.8)" : "none",
  });

  return (
    <section className="bg-black py-5">
      <Container>
        <h2 className="text-white text-center fw-bold mb-2" style={{ fontSize: "2rem" }}>
          Powering the world's best product teams.
        </h2>
        <p className="text-secondary text-center mb-5" style={{ fontSize: "1.15rem" }}>
          From next-gen startups to established enterprises.
        </p>
        <div
          className="position-relative"
          onMouseEnter={() => setIsBlurred(true)}
          onMouseLeave={() => setIsBlurred(false)}
        >
          <Row className="justify-content-center mb-3">
            {visibleLogos.slice(0, 3).map((logo, idx) => (
              <Col key={idx} xs={6} md={4} className="d-flex justify-content-center align-items-center mb-4">
                <img
                  src={logo}
                  alt="Trusted company logo"
                  style={logoStyle(animating, isBlurred)}
                />
              </Col>
            ))}
          </Row>
          <Row className="justify-content-center">
            {visibleLogos.slice(3, 6).map((logo, idx) => (
              <Col key={idx} xs={6} md={4} className="d-flex justify-content-center align-items-center mb-4">
                <img
                  src={logo}
                  alt="Trusted company logo"
                  style={logoStyle(animating, isBlurred)}
                />
              </Col>
            ))}
          </Row>
          <Button
            variant="dark"
            className="rounded-pill px-4 py-2 fw-semibold position-absolute top-50 start-50 translate-middle"
            style={{
              opacity: isBlurred ? 1 : 0,
              pointerEvents: isBlurred ? "auto" : "none",
              transition: "opacity 0.3s",
              zIndex: 10,
            }}
            tabIndex={-1}
            aria-hidden={!isBlurred}
          >
            Meet our customers <span aria-hidden="true">→</span>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default TrustedBySection; 