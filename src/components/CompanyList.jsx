import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import vercelLogo from '../assets/Vercel logo.png';
import browserCompanyLogo from '../assets/The Browser Company logo.png';
import monzoLogo from '../assets/Monzo logo.png';
import perplexityLogo from '../assets/Perplexity logo.png';
import supercellLogo from '../assets/Supercell logo.png';
import cursorLogo from '../assets/Cursor logo.png';
import descriptLogo from '../assets/Descript logo.png';
import runwayLogo from '../assets/Runway logo.png';
import raycastLogo from '../assets/Raycast logo.png';
import netlifyLogo from '../assets/Netlify logo.png';
import cohereLogo from '../assets/Cohere logo.png';
import openseaLogo from '../assets/OpenSea logo.png';
import substackLogo from '../assets/Substack logo.png';
import boomLogo from '../assets/Boom logo.png';
import modernTreasuryLogo from '../assets/Modern Treasury logo.png';
import worldcoinLogo from '../assets/Worldcoin logo.png';
import clipboardHealthLogo from '../assets/Clipboard Health logo.png';

const CompanyList = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isLastRowHovered, setIsLastRowHovered] = useState(false);

  const sectionStyle = {
    padding: '80px 0',
  };

  const h2Style = {
    fontSize: '2.5rem',
    fontWeight: 600,
    marginBottom: '40px',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const buttonStyle = {
    borderRadius: '20px',
    padding: '8px 16px',
    margin: '0 5px',
    backgroundColor: '#111',
    border: '1px solid #333',
    color: '#fff',
  };

  const featuredButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#fff',
    color: '#000',
  };

  const listStyle = {
    color: '#fff',
  };

  const listItemStyle = {
    borderBottom: '1px solid #222',
    padding: '20px 0',
  };

  const getListItemStyle = (index) => ({
    ...listItemStyle,
    backgroundColor: hoveredIndex === index ? '#1a1a1a' : 'transparent',
    borderRadius: '8px',
    padding: '20px',
    transition: 'background-color 0.2s',
    borderBottom: 'none',
    marginBottom: '4px',
  });

  const getLastRowStyle = () => ({
    ...listItemStyle,
    backgroundColor: isLastRowHovered ? '#1a1a1a' : 'transparent',
    borderRadius: '8px',
    padding: '20px',
    transition: 'background-color 0.2s',
    borderBottom: 'none',
  });

  const companyNameStyle = {
    fontWeight: 500,
  };

  const tagStyle = {
    color: '#888',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 500,
  };

  const companies = [
    { name: 'Vercel', tags: 'SaaS, AI', link: 'Visit site', icon: vercelLogo },
    { name: 'The Browser Company', tags: 'Consumer', link: 'Read story', icon: browserCompanyLogo },
    { name: 'Monzo', tags: 'Fintech, Consumer', link: 'Visit site', icon: monzoLogo },
    { name: 'Perplexity', tags: 'AI, Consumer', link: 'Visit site', icon: perplexityLogo },
    { name: 'Supercell', tags: 'Consumer', link: 'Visit site', icon: supercellLogo },
    { name: 'Cursor', tags: 'AI', link: 'Visit site', icon: cursorLogo },
    { name: 'Descript', tags: 'SaaS, AI', link: 'Read story', icon: descriptLogo },
    { name: 'Runway', tags: 'AI', link: 'Visit site', icon: runwayLogo },
    { name: 'Raycast', tags: 'SaaS', link: 'Read story', icon: raycastLogo },
    { name: 'Netlify', tags: 'SaaS', link: 'Visit site', icon: netlifyLogo },
    { name: 'Cohere', tags: 'AI', link: 'Read story', icon: cohereLogo },
    { name: 'OpenSea', tags: 'Crypto', link: 'Visit site', icon: openseaLogo },
    { name: 'Substack', tags: 'Consumer', link: 'Visit site', icon: substackLogo },
    { name: 'Boom', tags: 'Hardware', link: 'Visit site', icon: boomLogo },
    { name: 'Modern Treasury', tags: 'Fintech', link: 'Visit site', icon: modernTreasuryLogo },
    { name: 'Worldcoin', tags: 'Crypto', link: 'Visit site', icon: worldcoinLogo },
    { name: 'Clipboard Health', tags: 'Health', link: 'Visit site', icon: clipboardHealthLogo },
  ];

  return (
    <Container style={sectionStyle}>
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <h2 style={h2Style}>Powering 10,000+ ambitious product teams of all shapes and sizes</h2>
        </Col>
      </Row>
      <Row className="justify-content-center mb-5">
        <Col md="auto">
          <Button style={featuredButtonStyle}>Featured</Button>
          <Button style={buttonStyle}>SaaS</Button>
          <Button style={buttonStyle}>AI</Button>
          <Button style={buttonStyle}>Fintech</Button>
          <Button style={buttonStyle}>Consumer</Button>
          <Button style={buttonStyle}>Hardware</Button>
          <Button style={buttonStyle}>Crypto</Button>
          <Button style={buttonStyle}>Health</Button>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={10} style={listStyle}>
          {companies.map((company, index) => (
            <Row
              key={index}
              className="align-items-center"
              style={getListItemStyle(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Col xs={1}><img src={company.icon} alt={`${company.name} logo`} style={{ width: '24px' }} /></Col>
              <Col xs={4} style={companyNameStyle}>{company.name}</Col>
              <Col xs={4} style={tagStyle}>{company.tags}</Col>
              <Col xs={3} className="text-end">
                <a
                  href="#"
                  style={linkStyle}
                >
                  {company.link} <span style={{ display: 'inline-block', transition: 'transform 0.2s', transform: hoveredIndex === index ? 'translateX(3px)' : 'none' }}>↗</span>
                </a>
              </Col>
            </Row>
          ))}
          <Row
            className="align-items-center"
            style={getLastRowStyle()}
            onMouseEnter={() => setIsLastRowHovered(true)}
            onMouseLeave={() => setIsLastRowHovered(false)}
          >
            <Col xs={1}><span style={{ fontSize: '24px' }}>...</span></Col>
            <Col xs={8} style={companyNameStyle}>Your company</Col>
            <Col xs={3} className="text-end">
              <a
                href="#"
                style={linkStyle}
              >
                Make the switch <span style={{ display: 'inline-block', transition: 'transform 0.2s', transform: isLastRowHovered ? 'translateX(3px)' : 'none' }}>→</span>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CompanyList;
