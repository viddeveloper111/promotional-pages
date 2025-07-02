import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


import logo1 from '../assets/L1.png';
import logo2 from '../assets/L2.png';
import logo3 from '../assets/L3.png';
import vercelLogo from '../assets/L4.png';
import browserCompanyLogo from '../assets/L5.png';
import monzoLogo from '../assets/L6.png';
import perplexityLogo from '../assets/L7.png';
import supercellLogo from '../assets/L8.png';
import cursorLogo from '../assets/L9.png';
import descriptLogo from '../assets/L10.png';
import runwayLogo from '../assets/L11.png';
import raycastLogo from '../assets/L12.png';
import netlifyLogo from '../assets/L13.png';
import cohereLogo from '../assets/L14.png';
import openseaLogo from '../assets/L15.png';
import substackLogo from '../assets/L16.png';
import boomLogo from '../assets/L17.png';
import modernTreasuryLogo from '../assets/L18.png';

const logos = [
  logo1, logo2, logo3, vercelLogo, browserCompanyLogo, monzoLogo, perplexityLogo, supercellLogo,
  cursorLogo, descriptLogo, runwayLogo, raycastLogo, netlifyLogo, cohereLogo, openseaLogo, substackLogo,
  boomLogo, modernTreasuryLogo
];

const LogoCloud = () => {
  const [isHovered, setIsHovered] = useState(false);

  const sectionStyle = {
    backgroundColor: '#000',
    padding: '80px 0',
    textAlign: 'center',
    color: '#888',
  };

  const titleStyle = {
    marginBottom: '40px',
    fontSize: '1rem',
  };

  const scrollerWrapperStyle = {
    position: 'relative',
  };

  const logoScrollerStyle = {
    maxWidth: '100%',
    overflow: 'hidden',
    WebkitMaskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)',
    maskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)',
    filter: isHovered ? 'blur(5px)' : 'none',
    transition: 'filter 0.3s ease',
  };

  const logoScrollerInnerStyle = {
    display: 'flex',
    gap: '80px',
    animation: 'scroll 40s linear infinite',
  };

  const logoItemStyle = {
    height: '50px',
    filter: 'grayscale(1) brightness(1.5)',
    opacity: 0.8,
  };

  const hoverContentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    opacity: isHovered ? 1 : 0,
    transition: 'opacity 0.3s ease',
    pointerEvents: isHovered ? 'auto' : 'none',
  };

  const buttonStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '20px',
    color: 'white',
    padding: '10px 20px',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
  };

  const keyframes = `
    @keyframes scroll {
      to {
        transform: translateX(-100%);
      }
    }
  `;

  return (
    <div style={sectionStyle}>
      <style>{keyframes}</style>
      <Container>
        <Row>
          <Col>
            <div style={titleStyle}>Powering the world's best product teams</div>
            <div 
              style={scrollerWrapperStyle} 
              onMouseEnter={() => setIsHovered(true)} 
              onMouseLeave={() => setIsHovered(false)}
            >
              <div style={logoScrollerStyle}>
                <div style={logoScrollerInnerStyle}>
                  {logos.map((logo, index) => (
                    <img src={logo} alt={`logo-${index}`} key={index} style={logoItemStyle} />
                  ))}
                  {logos.map((logo, index) => (
                    <img src={logo} alt={`logo-duplicate-${index}`} key={`duplicate-${index}`} style={logoItemStyle} />
                  ))}
                </div>
              </div>
              <div style={hoverContentStyle}>
                <a href="/customers" style={buttonStyle}>
                  Meet our customers &gt;
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LogoCloud;
