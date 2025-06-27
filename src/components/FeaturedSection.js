import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './FeaturedSection.css';

const FeaturedSection = () => {
  return (
    <div className="featured-section py-5">
      <Container fluid className="px-5">
        <h2 className="section-title mb-5">Featured</h2>

        <Row className="g-0"> 

          {/*Card 1*/}
          <Col lg={4} md={6} sm={12} className="d-flex">
            <div className="featured-card flex-grow-1" style={{ paddingLeft: '40px' }}>
              <img src="https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_410,c_limit/62f6a464-9551-4996-ae98-96d5d9093826/image.png" alt="Cool For The Summer" className="img-fluid" />
              <p className="card-caption">Cool For The Summer</p>
            </div>
          </Col>

          {/*Card 2*/}
          <Col lg={4} md={6} sm={12} className="d-flex">
            <div className="featured-card flex-grow-1" style={{ paddingLeft: '10px', paddingRight: '10px'}}>
              <img src="https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_410,c_limit/0493f0bc-c949-4b3d-8413-cbd7f6b05512/nike-just-do-it.png" alt="Gear for Every Rep" className="img-fluid" />
              <p className="card-caption">Gear for Every Rep</p>
            </div>
          </Col>

          {/*Card 3*/}
          <Col lg={4} md={6} sm={12} className="d-flex">
            <div className="featured-card flex-grow-1" style={{ paddingRight: '40px' }}>
              <img src="https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_410,c_limit/96cd90a8-9126-4ffa-8f1d-00cccf7f1b6f/image.png" alt="Kids' Pegasus 41" className="img-fluid" />
              <p className="card-caption">Kids' Pegasus 41</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedSection;