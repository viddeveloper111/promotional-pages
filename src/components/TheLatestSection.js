import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './TheLatestSection.css';

const TheLatestSection = () => {
  return (
    <div className="the-latest-section py-5">
      <Container fluid className="px-5">
        <h2 className="section-title mb-5">The Latest</h2>

        <Row className="g-4">
          {/*Phantom*/}
          <Col lg={6} className="d-flex">
            <div className="latest-card flex-grow-1" style={{ backgroundImage: 'url("/studs.jpg")' }}>
              <div className="card-content">
                <h3 className="card-title">Feed the Phantom</h3>
                <p className="card-description">The new Phantom 6 — so precise, it’s scary.</p>
                <Button variant="dark" className="rounded-pill nike-button">Shop</Button>
              </div>
            </div>
          </Col>

          {/*Kipyegon*/}
          <Col lg={6} className="d-flex">
            <div className="latest-card flex-grow-1" style={{ backgroundImage: 'url("/breaking4-thumbnail.jpg")' }}>
              <div className="card-content text-start">
                <p className="card-small-text">Breaking4</p>
                <h3 className="card-title-kipyegon">
                  Faith Kipyegon Vs. The 4-Minute Mile
                </h3>
                <p className="card-date-text mb-4">on June 26th</p>
                <Button variant="light" className="rounded-pill nike-button">Mark Your Calendar</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TheLatestSection;