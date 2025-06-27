import React, { useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  InputGroup,
  Dropdown,
} from "react-bootstrap";
function Header() {
  const [showAdobePopover, setShowAdobePopover] = useState(false);

  return (
    <>
      {/* Top Header Navbar */}
      <Navbar bg="white" expand="lg" className="shadow-sm py-2 sticky-top z-index-100 border-bottom">
        <Container fluid className="px-3 px-md-5">
          <div className="d-flex align-items-center me-auto">
            <Navbar.Brand href="#" className="fw-bold text-dark fs-4 me-4">
              <img
                src="/behancelogo.png" 
                alt="Behance Logo"
                height="30"
              />
            </Navbar.Brand>
            <Nav className="d-none d-lg-flex align-items-center">
              <Nav.Link href="#" className="text-dark me-3"><strong>Explore</strong></Nav.Link>
              <Nav.Link href="#" className="text-dark me-3"><strong>Find Jobs</strong></Nav.Link>
              <Dropdown className="me-3">
                <Dropdown.Toggle variant="link" id="hire-freelancers-dropdown" className="text-dark text-decoration-none p-0 fw-normal dropdown-arrow-icon">
                  <strong>Hire Freelancers</strong>
                  <i className="bi bi-chevron-down ms-1 small"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#" className="d-flex align-items-center mb-3"><i className="bi bi-journal-text me-2" ></i><strong>My Freelance Projects</strong></Dropdown.Item>
                  <Dropdown.Item href="#" className="d-flex align-items-center mb-3"><i className="bi bi-search me-2" ></i><strong>Find Creatives</strong></Dropdown.Item>
                  <Dropdown.Item href="#" className="d-flex align-items-center mb-3"><i className="bi bi-info-circle me-2" ></i><strong>Hiring on Behance</strong></Dropdown.Item>
                  <Dropdown.Item href="#" className="d-flex align-items-center mb-3"><i className="bi bi-plus-circle me-2" ></i><strong>New Freelance Project</strong></Dropdown.Item>
                  <hr className="my-2" />
                  <Dropdown.Item href="#" className="mb-3">Logo Designers</Dropdown.Item>
                  <Dropdown.Item href="#" className="mb-3">Brand Designers</Dropdown.Item>
                  <Dropdown.Item href="#" className="mb-3">Website Designers</Dropdown.Item>
                  <Dropdown.Item href="#" className="mb-3">Illustrators</Dropdown.Item>
                  <Dropdown.Item href="#" className="mb-3">Social Media Designers</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle variant="link" id="career-resources-dropdown" className="text-dark text-decoration-none p-0 fw-normal dropdown-arrow-icon">
                  <strong>Career Resources</strong>
                  <i className="bi bi-chevron-down ms-1 small"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#" className="mb-3"><strong>Overview</strong></Dropdown.Item>
                  <Dropdown.Item href="#" className="mb-3"><strong>Career Guides</strong></Dropdown.Item>
                  <Dropdown.Item href="#" className="mb-3"><strong>Commissioned</strong></Dropdown.Item>
                  <Dropdown.Item href="#" className="mb-3"><strong>Creative Apprenticeship</strong></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </div>

          <Nav className="ms-auto d-flex align-items-center">
            <Button className="me-2 rounded-pill px-3 py-1 btn-behance-gradient">
              Start Free Trial
            </Button>
            <Button
              variant="outline-secondary"
              className="me-2 rounded-pill px-3 py-1 btn-behance-signin">
              Sign In
            </Button>
            <div
              className="position-relative d-flex align-items-center"
              onMouseEnter={() => setShowAdobePopover(true)}
              onMouseLeave={() => setShowAdobePopover(false)}
            >
              <Button variant="link" id="adobe-icon-toggle" className="text-dark text-decoration-none d-flex align-items-center p-0">
                <img
                  src="adobelogo.png"
                  alt="Adobe Logo"
                  className="rounded-sm"
                  style={{ width: "28px", height: "28px" }}
                />
              </Button>

              {showAdobePopover && (
                <div className="adobe-custom-popover position-absolute bg-white shadow rounded-lg p-3"
                     style={{ top: '100%', right: '0', marginTop: '8px', minWidth: '280px', zIndex: '1001' }}>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center text-decoration-none text-dark py-2 px-3 rounded hover-bg-light">
                    <img
                      src="/adobered.png"
                      alt="Adobe Logo"
                      style={{ width: "24px", height: "24px" }}
                      className="me-2"
                    />
                    <div className="flex-grow-1">
                      <div className="fw-semibold small">Go to adobe.com</div>
                      <div className="text-muted" style={{ fontSize: "0.75rem" }}>Access your apps, services, files, and more</div>
                    </div>
                    <i className="bi bi-arrow-right ms-auto text-muted"></i>
                  </a>

                  <a href="#" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center text-decoration-none text-dark py-2 px-3 rounded mt-2 hover-bg-light">
                    <img src="adobexpress.png" style={{ width: "24px", height: "24px" }} className="me-2"/>
                    <div className="flex-grow-1">
                      <div className="fw-semibold small">Get Adobe Express free</div>
                      <div className="text-muted" style={{ fontSize: "0.75rem" }}>Quickly make content from thousands of free templates</div>
                    </div>
                    <i className="bi bi-arrow-right ms-auto text-muted"></i>
                  </a>

                  <a href="#" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center text-decoration-none text-dark py-2 px-3 rounded mt-2 hover-bg-light">
                    <img
                      src="behancelogo.png"
                      alt="Behance Pro Logo"
                      style={{ width: "24px", height: "24px" }}
                      className="me-2"
                    />
                    <div className="flex-grow-1">
                      <div className="fw-semibold small">7 day free trial of Behance Pro</div>
                      <div className="text-muted" style={{ fontSize: "0.75rem" }}>Supercharge your creative career with Behance Pro</div>
                    </div>
                    <i className="bi bi-arrow-right ms-auto text-muted"></i>
                  </a>
                </div>
              )}
            </div>
          </Nav>
        </Container>
      </Navbar>
      <Navbar bg="white" className="py-2 shadow-sm border-bottom">
        <Container fluid className="px-3 px-md-5 d-flex align-items-center">
          <Button variant="outline-secondary" className="rounded-pill d-flex align-items-center me-3 px-3 py-2 text-dark filter-button">
            <i className="bi bi-funnel-fill me-2"></i> 
            Filter
          </Button>
          <InputGroup className="behance-search-input-group flex-grow-1">
            <InputGroup.Text className="bg-transparent border-0 ps-3">
              <i className="bi bi-search text-muted me-1"></i> 
            </InputGroup.Text>
            <FormControl
              type="search"
              placeholder="Search Behance..."
              className="border-0 ps-0 pe-1"
              aria-label="Search"
            />
            <Button variant="light" className="text-dark text-decoration-none rounded-0 border-0 fw-semibold behance-segment-button">
              Projects
            </Button>
            <Button variant="light" className="text-dark text-decoration-none rounded-0 border-0 fw-semibold behance-segment-button">
              People
            </Button>
            <Dropdown className="input-group-behance-dropdown">
              <Dropdown.Toggle variant="light" id="more-dropdown" className="text-dark text-decoration-none dropdown-arrow-icon rounded-start-0 border-0 fw-semibold">
                More
                <i className="bi bi-chevron-down ms-1 small"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Assets</Dropdown.Item>
                <Dropdown.Item href="#">Image</Dropdown.Item>
                <Dropdown.Item href="#">Search by Image</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </InputGroup>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
