import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AppNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import CompanyList from '../components/CompanyList';
import CallToActionSection from '../components/CallToActionSection';

import s11_1 from '../assets/S11_1.png';
import s11_2 from '../assets/S11_2.png';
import s11_3 from '../assets/S11_3.png';
import s11_4 from '../assets/S11_4.png';
import s11_5 from '../assets/S11_5.png';
import s11_6 from '../assets/S11_6.png';
import s11_7 from '../assets/S11_7.png';
import s11_8 from '../assets/S11_8.png';
import s11_9 from '../assets/S11_9.png';
import s11_10 from '../assets/S11_10.png';
import s11_11 from '../assets/S11_11.png';
import s11_12 from '../assets/S11_12.png';
import s11_13 from '../assets/S11_13.png';
import s11_14 from '../assets/S11_14.png';
import arrow from '../assets/arrow.png';

const CustomersPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredSecondIndex, setHoveredSecondIndex] = useState(null);

  const customerStories = [
    {
      icon: s11_1,
      bg: s11_5,
      title: 'Moving fast and tackling complexity: building systems that scale at OpenAI',
      arrow: true,
    },
    {
      icon: s11_2,
      bg: s11_6,
      title: '“One roadmap”: How Brex consolidated their fragmented planning',
    },
    {
      icon: s11_3,
      bg: s11_7,
      title: 'Why Ramp chose the fastest-moving product tool',
    },
    {
      icon: s11_4,
      bg: s11_8,
      title: "Linear accelerates Scale’s high velocity",
    },
  ];

  const secondRowStories = [
    {
      icon: s11_9,
      title: 'Linear Projects give Mercury a source-of-truth across all their work',
    },
    {
      icon: s11_10,
      title: 'Watershed switched to Linear to accelerate their team',
    },
    {
      icon: s11_11,
      title: 'Linear keeps Retool’s teams customer-focused',
    },
    {
      icon: s11_12,
      title: 'Remote switched their 1,000 person team to Linear to move faster',
    },
    {
      icon: s11_13,
      title: 'Pleo transitioned their internal support workflows to Linear Asks',
    },
    {
      icon: s11_14,
      title: 'Linear helps Cash App manage aggressive roadmaps',
    },
  ];

  const pageStyle = {
    backgroundColor: '#000',
    color: '#fff',
    fontFamily: 'Inter, system-ui, sans-serif',
  };

  const headerStyle = {
    padding: '120px 0 80px',
  };

  const h1Style = {
    fontSize: '56px',
    fontWeight: 600,
    marginBottom: '20px',
    lineHeight: 1.1,
  };

  const subtitleStyle = {
    fontSize: '21px',
    color: '#b3b3b3',
    marginBottom: '30px',
    maxWidth: '550px',
  };

  const makeSwitchStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '16px',
    background: '-webkit-linear-gradient(left,#c278f8,#8478f8)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const getCardStyle = (story, index) => ({
    backgroundColor: '#0a0a0a',
    border: '1px solid #222',
    borderRadius: '12px',
    color: '#fff',
    width: '472px',
    height: '290.72px',
    backgroundImage: `url(${story.bg})`,
    backgroundSize: hoveredIndex === index ? '100%' : '100%',
    backgroundPosition: 'bottom right',
    transition: 'background-size 0.3s ease',
    overflow: 'hidden',
  });

  const getSecondCardStyle = (index) => ({
    backgroundColor: hoveredSecondIndex === index ? '#1a1a1a' : '#0a0a0a',
    border: '1px solid #222',
    borderRadius: '12px',
    color: '#fff',
    width: '304.1px',
    height: '278.96px',
    overflow: 'hidden',
    transition: 'background-color 0.2s',
  });

  const statsSectionStyle = {
    padding: '80px 0',
  };

  const statNumberStyle = {
    fontSize: '4rem',
    fontWeight: 600,
  };

  const statTextStyle = {
    color: '#b3b3b3',
  };

  const infoTextStyle = {
    color: '#b3b3b3',
    fontSize: '0.9rem',
  };

  const cardBodyStyle = {
    padding: '32px',
    height: '100%',
  };

  const iconContainerStyle = {
    width: '40px',
    height: '40px',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '60px',
  };

  const cardIconStyle = {
    width: '24px',
    height: '24px',
  };

  const cardTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 500,
    lineHeight: 1.3,
    color: '#f0f0f0',
  };

  const cardTextStyle = {
    color: '#999',
    fontSize: '1rem',
    fontWeight: 500,
  };

  return (
    <div style={pageStyle}>
      <AppNavbar />
      <Container className="pb-5">
        <Row className="justify-content-center" style={headerStyle}>
          <Col md={8}>
            <h1 style={h1Style}>Meet the teams who build the future</h1>
            <p style={subtitleStyle}>
              Trusted by more than 10,000 organizations, from ambitious startups to major enterprises.
            </p>
            <a href="#" style={makeSwitchStyle}>Make the switch &gt;</a>
          </Col>
        </Row>
        <Row className="g-4 justify-content-center">
          {customerStories.map((story, index) => (
            <Col md="auto" key={index}>
              <Card 
                style={getCardStyle(story, index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Card.Body style={cardBodyStyle} className="d-flex flex-column">
                  <div style={iconContainerStyle}>
                    <img src={story.icon} alt="" style={cardIconStyle} />
                  </div>
                  <div className="mt-auto">
                    <Card.Title style={cardTitleStyle}>{story.title}</Card.Title>
                    <Card.Text style={cardTextStyle}>
                      Read story {story.arrow && <span style={{ display: 'inline-block', transition: 'transform 0.2s', transform: hoveredIndex === index ? 'translateX(4px)' : 'translateX(0)' }}>→</span>}
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="justify-content-center align-items-center text-center" style={statsSectionStyle}>
          <Col md={2}>
            <div style={statNumberStyle}>2x</div>
            <div style={statTextStyle}>Increase in filed issues</div>
          </Col>
          <Col md={2}>
            <div style={statNumberStyle}>1.6x</div>
            <div style={statTextStyle}>Faster issue resolution</div>
          </Col>
          <Col md={4} className="text-start">
            <div style={infoTextStyle}>Teams that switch to Linear create more issues and close them faster ⓘ</div>
          </Col>
        </Row>

        <Row className="gx-1 gy-2 justify-content-center row-cols-1 row-cols-md-3">
          {secondRowStories.map((story, index) => (
            <Col key={index} className="d-flex justify-content-center">
              <Card
                style={getSecondCardStyle(index)}
                onMouseEnter={() => setHoveredSecondIndex(index)}
                onMouseLeave={() => setHoveredSecondIndex(null)}
              >
                <Card.Body style={cardBodyStyle} className="d-flex flex-column">
                  <div style={iconContainerStyle}>
                    <img src={story.icon} alt="" style={cardIconStyle} />
                  </div>
                  <div className="mt-auto">
                    <Card.Title style={cardTitleStyle}>{story.title}</Card.Title>
                    <Card.Text style={cardTextStyle}>
                      Read story
                      {hoveredSecondIndex === index && <img src={arrow} alt="arrow" style={{ width: '12px', marginLeft: '5px', transition: 'opacity 0.2s', opacity: 1 }} />}
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <CompanyList />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default CustomersPage;
