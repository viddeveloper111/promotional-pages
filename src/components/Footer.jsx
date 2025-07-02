import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import linearLogo from '../assets/Logo_small.svg';

const FooterLink = ({ to, children }) => {
  const [hovered, setHovered] = React.useState(false);

  const linkStyle = {
    color: hovered ? '#fff' : '#b0b0b0',
    textDecoration: 'none',
    lineHeight: '2.5',
    transition: 'color 0.15s ease-in-out',
  };

  return (
    <Link
      to={to}
      style={linkStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </Link>
  );
};

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#000',
    color: '#b0b0b0',
    padding: '80px 0 40px',
    borderTop: '1px solid #282828',
    fontSize: '14px',
    fontFamily: 'Inter, system-ui, sans-serif',
  };

  const colTitleStyle = {
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const linkListStyle = {
    listStyle: 'none',
    padding: 0,
  };

  const footerBottomStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '60px',
    paddingTop: '40px',
    borderTop: '1px solid #282828',
  };

  const statusStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const statusIndicatorStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#2f855a',
    marginRight: '10px',
    boxShadow: '0 0 8px #2f855a',
  };

  return (
    <div style={footerStyle}>
      <Container>
        <Row>
          <Col md={3} className="mb-4">
            <img src={linearLogo} alt="Linear Logo" style={{ width: '24px', filter: 'brightness(0.5)' }} />
          </Col>
          <Col md={9}>
            <Row>
              <Col md={2} xs={6}>
                <h5 style={colTitleStyle}>Features</h5>
                <ul style={linkListStyle}>
                  <li><FooterLink to="/#">Plan</FooterLink></li>
                  <li><FooterLink to="/#">Build</FooterLink></li>
                  <li><FooterLink to="/#">Insights</FooterLink></li>
                  <li><FooterLink to="/#">Customer Requests</FooterLink></li>
                  <li><FooterLink to="/#">Linear Asks</FooterLink></li>
                  <li><FooterLink to="/#">Security</FooterLink></li>
                  <li><FooterLink to="/#">Mobile</FooterLink></li>
                </ul>
              </Col>
              <Col md={2} xs={6}>
                <h5 style={colTitleStyle}>Product</h5>
                <ul style={linkListStyle}>
                  <li><FooterLink to="/#">Pricing</FooterLink></li>
                  <li><FooterLink to="/#">Method</FooterLink></li>
                  <li><FooterLink to="/#">Integrations</FooterLink></li>
                  <li><FooterLink to="/#">Changelog</FooterLink></li>
                  <li><FooterLink to="/#">Documentation</FooterLink></li>
                  <li><FooterLink to="/#">Download</FooterLink></li>
                  <li><FooterLink to="/#">Switch</FooterLink></li>
                </ul>
              </Col>
              <Col md={2} xs={6}>
                <h5 style={colTitleStyle}>Company</h5>
                <ul style={linkListStyle}>
                  <li><FooterLink to="/#">About</FooterLink></li>
                  <li><FooterLink to="/#">Customers</FooterLink></li>
                  <li><FooterLink to="/#">Careers</FooterLink></li>
                  <li><FooterLink to="/#">Blog</FooterLink></li>
                  <li><FooterLink to="/#">README</FooterLink></li>
                  <li><FooterLink to="/#">Quality</FooterLink></li>
                  <li><FooterLink to="/#">Brand</FooterLink></li>
                </ul>
              </Col>
              <Col md={2} xs={6}>
                <h5 style={colTitleStyle}>Resources</h5>
                <ul style={linkListStyle}>
                  <li><FooterLink to="/#">Developers</FooterLink></li>
                  <li><FooterLink to="/#">Status</FooterLink></li>
                  <li><FooterLink to="/#">Startups</FooterLink></li>
                  <li><FooterLink to="/#">Report vulnerability</FooterLink></li>
                  <li><FooterLink to="/#">DPA</FooterLink></li>
                  <li><FooterLink to="/#">Privacy</FooterLink></li>
                  <li><FooterLink to="/#">Terms</FooterLink></li>
                </ul>
              </Col>
              <Col md={2} xs={6}>
                <h5 style={colTitleStyle}>Connect</h5>
                <ul style={linkListStyle}>
                  <li><FooterLink to="/contact">Contact us</FooterLink></li>
                  <li><FooterLink to="/#">Community</FooterLink></li>
                  <li><FooterLink to="/#">X (Twitter)</FooterLink></li>
                  <li><FooterLink to="/#">GitHub</FooterLink></li>
                  <li><FooterLink to="/#">YouTube</FooterLink></li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
            
      </Container>
    </div>
  );
};

export default Footer;
