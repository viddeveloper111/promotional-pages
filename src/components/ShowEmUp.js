import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './ShowEmUp.css';

const ShowEmUp = () => { 
  return (
    <div className="show-em-up-section"> 
      <Container className="show-em-up-content text-center"> 
        <p className="show-em-up-subtitle">Men's Air Jordan Collection</p> 
        <h1 className="show-em-up-title">SHOW 'EM UP</h1>
        <p className="show-em-up-description">
          Crafted for your flyest self, the new Air Jordan Collection brings iconic prints and elevated cuts.
        </p>
        <Button variant="dark" className="show-em-up-button">Shop</Button>
        </Container>
    </div>
  );
};

export default ShowEmUp;