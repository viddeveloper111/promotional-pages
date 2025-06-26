// src/components/MembershipPromo.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './MembershipPromo.css';

const MembershipPromo = () => {
  return (
    <div className="membership-promo text-center py-1">
      <Container>
        <p className="mb-0">
          <span className="fw-bold">Move, Shop, Customise & Celebrate With Us.</span>
          <br/>
          No matter what you feel like doing today, it's better as a Member.
        </p>
        <Button variant="link" className="text-dark fw-bold p-0 mt-2 membership-link">
          Join Us
        </Button>
      </Container>
    </div>
  );
};

export default MembershipPromo;