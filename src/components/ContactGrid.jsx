import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ContactGrid = () => {
  const gridSectionStyle = {
    padding: '80px 0',
    borderTop: '1px solid #282828',
    marginTop: '80px',
  };

  const gridBlockStyle = {
    marginBottom: '60px',
  };

  const gridTitleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '12px',
    color: '#fff',
  };

  const gridTextStyle = {
    color: '#b0b0b0',
    marginBottom: '24px',
    maxWidth: '350px',
  };

  const gridLinkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 500,
  };

  return (
    <div style={gridSectionStyle}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Row>
              <Col md={6} style={gridBlockStyle}>
                <h5 style={gridTitleStyle}>Join the community</h5>
                <p style={gridTextStyle}>
                  More than 10,000 Linear users share questions and best practices in our Slack community.
                </p>
                <a href="#" style={gridLinkStyle}>Join Slack &gt;</a>
              </Col>
              <Col md={6} style={gridBlockStyle}>
                <h5 style={gridTitleStyle}>General communication</h5>
                <p style={gridTextStyle}>
                  For other queries, please get in touch with us via email.
                </p>
                <a href="mailto:hello@linear.app" style={gridLinkStyle}>hello@linear.app</a>
              </Col>
              <Col md={6} style={gridBlockStyle}>
                <h5 style={gridTitleStyle}>Documentation</h5>
                <p style={gridTextStyle}>
                  Get an overview of Linear’s features, integrations, and how to use them.
                </p>
                <a href="#" style={gridLinkStyle}>Linear Docs &gt;</a>
              </Col>
              <Col md={6} style={gridBlockStyle}>
                <h5 style={gridTitleStyle}>Developers</h5>
                <p style={gridTextStyle}>
                  Learn how to use the GraphQL API and TypeScript SDK to extend Linear.
                </p>
                <a href="#" style={gridLinkStyle}>Linear API &gt;</a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactGrid;
