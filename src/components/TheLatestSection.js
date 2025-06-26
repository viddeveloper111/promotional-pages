import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './TheLatestSection.css'; 

const phantomImage = 'https://www.prodirectsport.com/-/media/prodirect/project/en/soccer/billboards/hero-banner/boots/nike/hero-banner-d-nike_phantom6-launch.jpg';
const kipyegonBreaking4Image = 'https://media.about.nike.com/img/ae500b93-c502-4f88-b226-a81a648e7006/breaking4-thumbnail.jpg?m=eyJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjEwMH0sIndlYnAiOnsicXVhbGl0eSI6MTAwfSwiZXh0cmFjdCI6eyJsZWZ0IjowLCJ0b3AiOjAsIndpZHRoIjoxMDgwLCJoZWlnaHQiOjYwOH0sInJlc2l6ZSI6eyJ3aWR0aCI6Mzg0MH19fQ%3D%3D&s=9c3610c7fb3424798dc498fe5b1e9a54049270adf7ed68846911c012e8293c5e';

const TheLatestSection = () => {
  return (
    <div className="the-latest-section py-5">
      <Container fluid className="px-lg-5 px-xl-0">
        <h2 className="section-title mb-5">The Latest</h2>

        <Row className="g-4">
          {/* Card 1: Feed the Phantom (NO CHANGES HERE) */}
          <Col lg={6} className="d-flex">
            <div className="latest-card flex-grow-1" style={{ backgroundImage: `url(${phantomImage})` }}>
              <div className="card-content">
                <h3 className="card-title">Feed the Phantom</h3>
                <p className="card-description">The new Phantom 6 — so precise, it’s scary.</p>
                <Button variant="dark" className="rounded-pill nike-button">Shop</Button>
              </div>
            </div>
          </Col>

          {/* Card 2: Faith Kipyegon Vs. The 4-Minute Mile (UPDATED) */}
          <Col lg={6} className="d-flex">
            <div className="latest-card flex-grow-1" style={{ backgroundImage: `url(${kipyegonBreaking4Image})` }}>
              <div className="card-content text-start">
                <p className="card-small-text">Breaking4</p> {/* This line is separate */}
                <h3 className="card-title-kipyegon"> {/* Use a new class for specific styling */}
                  Faith Kipyegon Vs. The 4-Minute Mile
                </h3>
                <p className="card-date-text mb-4">on June 26th</p> {/* New element for date */}
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