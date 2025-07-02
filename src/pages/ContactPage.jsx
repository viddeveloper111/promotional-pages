import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import AppNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactGrid from '../components/ContactGrid';

const ContactPage = () => {
  const pageStyle = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '40px 0',
    fontFamily: 'Inter, system-ui, sans-serif',
  };

  const mainContainerStyle = {
    maxWidth: '1024px',
    margin: '0 auto',
    padding: '0 15px',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '60px',
    paddingTop: '80px',
  };

  const h1Style = {
    fontSize: '56px',
    fontWeight: 'bold',
    letterSpacing: '-0.02em',
  };

  const pStyle = {
    fontSize: '20px',
    color: '#b0b0b0',
    maxWidth: '600px',
    margin: '0 auto',
  };

  const cardContainerStyle = {
    maxWidth: '900px',
    margin: '0 auto 80px auto',
  };

  const cardStyle = {
    backgroundColor: '#151515',
    border: '1px solid #282828',
    borderRadius: '15px',
    padding: '32px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  };

  const cardTitleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
  };

  const cardTextStyle = {
    color: '#b0b0b0',
    marginBottom: 'auto',
  };

  const cardButtonStyle = {
    backgroundColor: '#252525',
    border: '1px solid #333',
    borderRadius: '8px',
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: 500,
    width: 'fit-content',
    marginTop: '24px',
  };

  const iconStyle = {
    marginRight: '12px',
    fontSize: '20px',
  };

  return (
    <div style={pageStyle}>
      <AppNavbar />
      <div style={mainContainerStyle}>
        <div style={headerStyle}>
          <h1 style={h1Style}>How can we help?</h1>
          <p style={pStyle}>
            Get in touch with our sales and support teams for demos, onboarding support, or product questions.
          </p>
        </div>
        <div style={cardContainerStyle}>
          <Row>
            <Col md={6} className="mb-4">
              <div style={cardStyle}>
                <h5 style={cardTitleStyle}><span style={iconStyle}>📧</span> Sales</h5>
                <p style={cardTextStyle}>
                  Speak to our sales team about plans, pricing, enterprise contracts, or request a demo.
                </p>
                <Button style={cardButtonStyle}>Talk to sales &gt;</Button>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div style={cardStyle}>
                <h5 style={cardTitleStyle}><span style={iconStyle}>💬</span> Help & support</h5>
                <p style={cardTextStyle}>
                  Ask product questions, report problems, or leave feedback.
                </p>
                <Button style={cardButtonStyle}>Contact support &gt;</Button>
              </div>
            </Col>
          </Row>
        </div>
        <ContactGrid />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
