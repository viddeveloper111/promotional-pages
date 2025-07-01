import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './DontMissSection.css';

const DontMissSection = () => {
  return (
    <div className="dont-miss-section py-2">
      <Container fluid className="px-5">
        <h2 className="section-title mb-5">Don't Miss</h2>

        <Row className="g-0">
          {/*Card 1*/}
          <Col lg={6} md={6} sm={12} className="d-flex px-0">
            <div className="dont-miss-card flex-grow-1">
              <img src="/nikej-1.jpg" alt="Don't Miss Item 1" className="img-fluid" />
              
            </div>
          </Col>

          {/*Card 2*/}
          <Col lg={6} md={6} sm={12} className="d-flex px-0">
            <div className="dont-miss-card flex-grow-1">
                <img src="/nikej-2.jpg" alt="Don't Miss Item 2" className="img-fluid" />

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DontMissSection;