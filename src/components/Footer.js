// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGlobe } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer py-5">
      <Container className="footer-content">
        <Row className="footer-links mb-4">
          {/* Column 1: Resources */}
          <Col lg={3} md={6} sm={12} className="footer-column mb-4 mb-lg-0">
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <li><a href="#find-a-store">Find a Store</a></li>
              <li><a href="#become-a-member">Become a Member</a></li>
              <li><a href="#running-shoe-finder">Running Shoe Finder</a></li>
              <li><a href="#product-advice">Product Advice</a></li>
              <li><a href="#send-us-feedback">Send Us Feedback</a></li>
            </ul>
          </Col>

          {/* Column 2: Help */}
          <Col lg={3} md={6} sm={12} className="footer-column mb-4 mb-lg-0">
            <h5>Help</h5>
            <ul className="list-unstyled">
              <li><a href="#get-help">Get Help</a></li>
              <li><a href="#order-status">Order Status</a></li>
              <li><a href="#delivery">Delivery</a></li>
              <li><a href="#returns">Returns</a></li>
              <li><a href="#payment-options">Payment Options</a></li>
              <li><a href="#contact-nike-in">Contact Us On Nike.com Inquiries</a></li>
              <li><a href="#contact-all-other">Contact Us On All Other Inquiries</a></li>
            </ul>
          </Col>

          {/* Column 3: Company */}
          <Col lg={3} md={6} sm={12} className="footer-column mb-4 mb-lg-0">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#about-nike">About Nike</a></li>
              <li><a href="#news">News</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#investors">Investors</a></li>
              <li><a href="#sustainability">Sustainability</a></li>
              <li><a href="#impact">Impact</a></li>
              <li><a href="#report-a-concern">Report a Concern</a></li>
            </ul>
          </Col>

          <Col lg={3} md={6} sm={12} className="footer-column d-flex justify-content-end align-items-start">
            <div className="location-info">
              <FaGlobe className="globe-icon me-2" />
              India
            </div>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <Row className="footer-bottom-bar pt-3 d-flex justify-content-between align-items-center">
          <Col md="auto" className="text-md-start text-center mb-2 mb-md-0">
            <p className="copyright">&copy; {new Date().getFullYear()} Nike, Inc. All rights reserved</p>
          </Col>
          <Col md="auto" className="text-md-end text-center">
            <ul className="list-unstyled d-inline-flex legal-links">
              <li className="me-3"><a href="#guides">Guides <BsChevronDown size={12} /></a></li>
              <li className="me-3"><a href="#terms-of-sale">Terms of Sale</a></li>
              <li className="me-3"><a href="#terms-of-use">Terms of Use</a></li>
              <li><a href="#privacy-policy">Nike Privacy Policy</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;