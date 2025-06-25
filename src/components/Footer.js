import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col md={3} className="mb-4 mb-md-0">
            <h5 className="mb-3">Gift Cards</h5>
            <h5 className="mb-3">Promotions</h5>
            <h5 className="mb-3">Find a Store</h5>
            <h5 className="mb-3">Sign Up for Email</h5>
            <h5 className="mb-3">Become a Member</h5>
            <h5 className="mb-3">Site Feedback</h5>
          </Col>
          <Col md={3} className="mb-4 mb-md-0">
            <h5 className="mb-3">GET HELP</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" className="text-white-50 p-0 mb-2">Order Status</Nav.Link>
              <Nav.Link href="#" className="text-white-50 p-0 mb-2">Shipping & Delivery</Nav.Link>
              <Nav.Link href="#" className="text-white-50 p-0 mb-2">Returns</Nav.Link>
              <Nav.Link href="#" className="text-white-50 p-0 mb-2">Payment Options</Nav.Link>
              <Nav.Link href="#" className="text-white-50 p-0 mb-2">Contact Us</Nav.Link>
            </Nav>
          </Col>
          <Col md={3} className="mb-4 mb-md-0">
            <h5 className="mb-3">ABOUT NIKE</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" className="text-white-50 p-0 mb-2">News</Nav.Link>
              <Nav.Link href="#" className="text-white-50 p-0 mb-2">Careers</Nav.Link>
              <Nav.Link href="#" className="text-white-50 p-0 mb-2">Investors</Nav.Link>
              <Nav.Link href="#" className="text-white-50 p-0 mb-2">Purpose</Nav.Link>
              <Nav.Link href="#" className="text-white-50 p-0 mb-2">Sustainability</Nav.Link>
            </Nav>
          </Col>
          <Col md={3} className="d-flex justify-content-end align-items-start">
            {/* Social media icons placeholder */}
            <div className="social-icons">
              <a href="#" className="text-white mx-2"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white mx-2"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white mx-2"><i className="fab fa-youtube"></i></a>
              <a href="#" className="text-white mx-2"><i className="fab fa-instagram"></i></a>
            </div>
          </Col>
        </Row>
        <hr className="my-4 border-secondary" />
        <Row className="align-items-center">
          <Col md={6}>
            <p className="text-white-50 mb-0">
              &copy; {new Date().getFullYear()} Nike, Inc. All Rights Reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <Nav className="justify-content-md-end">
              <Nav.Link href="#" className="text-white-50 px-2 py-0">Guides</Nav.Link>
              <Nav.Link href="#" className="text-white-50 px-2 py-0">Terms of Sale</Nav.Link>
              <Nav.Link href="#" className="text-white-50 px-2 py-0">Terms of Use</Nav.Link>
              <Nav.Link href="#" className="text-white-50 px-2 py-0">Nike Privacy Policy</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;