import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer-behance-bg text-white py-5 px-4 mt-auto">
      <Container fluid className="px-3">
        <Row className="mb-5">
          <Col md={2} lg={1} className="mb-4 mb-md-0">
            <h1 className="fw-bold fs-3 footer-behance-logo-text">Bēhance</h1>
          </Col>

          <Col md={4} lg={3} className="ps-5">
            <h4 className="fw-bold text-white mb-5">Built For Creatives</h4>
            <ul className="list-unstyled">
              <li className="mb-3"><a href="#" className="text-white text-decoration-none hover-text-white">Try Behance Pro</a></li>
              <li className="mb-3"><a href="#" className="text-white text-decoration-none hover-text-white">Find Inspiration</a></li>
              <li className="mb-3"><a href="#" className="text-white text-decoration-none hover-text-white">Get Hired</a></li>
              <li className="mb-3"><a href="#" className="text-white text-decoration-none hover-text-white">Sell Creative Assets</a></li>
              <li className="mb-3"><a href="#" className="text-white text-decoration-none hover-text-white">Sell Freelance Services</a></li>
            </ul>
          </Col>
          <Col md={4} lg={3} className="pe-1">
            <h4 className="fw-bold text-white mb-5">Find Talent</h4>
            <ul className="list-unstyled">
              <li className="mb-3"><a href="#" className="text-white text-decoration-none hover-text-white">Graphic Designers</a></li>
              <li className="mb-3"><a href="#" className="text-white text-decoration-none hover-text-white">Post a Job</a></li>
              <li className="mb-3"><a href="#" className="text-white text-decoration-none hover-text-white">Photographers</a></li>
              <li className="mb-3"><a href="#" className="text-white text-decoration-none hover-text-whit">Video Editors</a></li>
              <li className="mb-3"><a href="#" className="text-white text-decoration-none hover-text-white">Web Designers</a></li>
              <li className="mb-3"><a href="#" className="text-white text-decoration-none hover-text-white">Illustrators</a></li>
            </ul>
          </Col>

          <Col md={4} lg={3} className="pe-1">
            <h4 className="fw-bold text-white mb-5">Behance</h4>
            <ul className="list-unstyled">
              <li className="mb-3"><a href="#" className="text-white text-decoration-none hover-text-white">About Behance</a></li>
              <li className="mb-3"><a href="#" className="text-white text-decoration-none hover-text-white">Adobe Portfolio</a></li>
              <li className="mb-3"><a href="#" className="text-white text-decoration-none hover-text-white">Download the App</a></li>
              <li className="mb-3"><a href="#" className="text-white text-decoration-none hover-text-white">Blog</a></li>
              <li className="mb-3"><a href="#" className="text-white text-decoration-none hover-text-white">Careers</a></li>
              <li className="mb-3"><a href="#" className="text-white text-decoration-none hover-text-white">Help Center</a></li>
              <li className="mb-3"><a href="#" className="text-white text-decoration-none hover-text-white">Contact Us</a></li>
            </ul>
          </Col>

          {/*social column of behance */}
          <Col md={3} lg={2} className="pe-1">
            <h4 className="fw-bold text-white mb-5">Social</h4>
            <ul className="list-unstyled">
              <li className="mb-3"><a href="#" className="text-white text-decoration-none hover-text-white d-flex align-items-center"><i className="bi bi-instagram me-2"></i>Instagram</a></li>
              <li className="mb-3"><a href="#" className="text-white text-decoration-none hover-text-white d-flex align-items-center"><i className="bi bi-twitter me-2"></i>Twitter</a></li>
              <li className="mb-3"><a href="#" className="text-white text-decoration-none hover-text-white d-flex align-items-center"><i className="bi bi-pinterest me-2"></i>Pinterest</a></li>
              <li className="mb-3"><a href="#" className="text-white text-decoration-none hover-text-white d-flex align-items-center"><i className="bi bi-facebook me-2"></i>Facebook</a></li>
              <li className="mb-3"><a href="#" className="text-white text-decoration-none hover-text-white d-flex align-items-center"><i className="bi bi-linkedin me-2"></i>LinkedIn</a></li>
            </ul>
          </Col>
        </Row>

        <hr className="border-secondary my-4 color-white" /> 
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pt-3">
          <div className="d-flex align-items-center mb-3 mb-md-0">
            <img
              src="/adobelogo.png"
              alt="Adobe Logo"
              style={{ width: '28px', height: '28px' }}
            />
            <span className="text-white me-3"> <span><strong>Adobe</strong>© 2025 Adobe Inc. All rights reserved.</span></span>
          </div>
          <div className="d-flex flex-wrap justify-content-center justify-content-md-end gap-3 small">
            <a href="#" className="text-white text-decoration-none hover-text-white">English</a>
            <a href="#" className="text-white text-decoration-none hover-text-white">TOU</a>
            <a href="#" className="text-white text-decoration-none hover-text-white">Privacy</a>
            <a href="#" className="text-white text-decoration-none hover-text-white">Community</a>
            <a href="#" className="text-white text-decoration-none hover-text-white">Cookie preferences</a>
            <a href="#" className="text-white text-decoration-none hover-text-white">Do not sell or share my personal information</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
