import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Faith.css';
const Faith = () => {
  return (
    <div className="faith-collection-section py-5">
      <Container className="text-center faith-content">
        <p className="small-text-above-title mb-2">Breaking2</p>
        <h2 className="display-4 fw-bolder mb-3">FAITH KIPYEGON COLLECTION</h2>
        <p className="lead mb-4 description-text">
          Inspired by the woman daring to break the 2-minute mile barrier, her
          collection features running shoes and apparel built for speed.
        </p>
        <Button variant="dark" size="lg" className="rounded-pill px-5 py-3 text-uppercase fw-bold nike-button">
          Shop
        </Button>
      </Container>
    </div>
  );
};

export default Faith;