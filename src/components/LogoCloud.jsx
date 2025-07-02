import React from 'react';
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

  const logoScrollerStyle = {
    maxWidth: '100%',
    overflow: 'hidden',
    WebkitMaskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)',
    maskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)',
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LogoCloud;
