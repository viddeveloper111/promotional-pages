import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const CallToActionSection = () => {
  const sectionStyle = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '100px 0',
    textAlign: 'center',
  };

  const h2Style = {
    fontSize: '2.5rem',
    fontWeight: '600',
    marginBottom: '0',
    marginRight: '20px',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
  };

  const talkToSalesButtonStyle = {
    backgroundColor: '#1a1a1a',
    borderColor: '#333',
    color: '#fff',
    borderRadius: '10px',
    padding: '10px 20px',
    fontWeight: '500',
  };

  const getStartedButtonStyle = {
    backgroundColor: '#fff',
    borderColor: '#fff',
    color: '#000',
    borderRadius: '10px',
    padding: '10px 20px',
    fontWeight: '500',
  };

  return (
    <div style={sectionStyle}>
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md="auto">
            <h2 style={h2Style}>Plan the present. Build the future.</h2>
          </Col>
          <Col md="auto">
            <div style={buttonContainerStyle}>
              <Button variant="dark" style={talkToSalesButtonStyle}>Talk to sales</Button>
              <Button variant="light" style={getStartedButtonStyle}>Get started</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CallToActionSection;
