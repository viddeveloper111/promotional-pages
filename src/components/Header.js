import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BsSearch, BsBag, BsPerson } from 'react-icons/bs';

import './Header.css';

const Header = () => {
  return (
    <Navbar className="nike-navbar py-0">
      <Container fluid className="d-flex align-items-center"> {/* Container as main flex, align items vertically */}

        {/* Nike Logo Brand - naturally pushed left by other elements */}
        <Navbar.Brand href="#home">
          <img
            src="/nike-logo.png"
            alt="Nike Logo"
            height="70px"
            className="nike-logo-img"
          />
        </Navbar.Brand>

        {/* Navbar.Collapse - now always visible for desktop, expands to fill space, manages internal flex */}
        <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-1 d-flex">

          {/* Empty div to push the main navigation links away from the logo, creating left balance */}
          <div className="me-auto"></div>

          {/* Main Navigation Links - Centered within the available space provided by flex-grow-1 and the empty div */}
          <Nav className="mx-auto my-2 my-lg-0 main-nav-links">
            <Nav.Link href="#new-featured" className="text-dark fw-bold nav-link-custom">New & Featured</Nav.Link>
            <Nav.Link href="#men" className="text-dark fw-bold nav-link-custom">Men</Nav.Link>
            <Nav.Link href="#women" className="text-dark fw-bold nav-link-custom">Women</Nav.Link>
            <Nav.Link href="#kids" className="text-dark fw-bold nav-link-custom">Kids</Nav.Link>
            <Nav.Link href="#sale" className="text-dark fw-bold nav-link-custom">Sale</Nav.Link>
            <Nav.Link href="#snkrs" className="text-dark fw-bold nav-link-custom">SNKRS</Nav.Link> {/* Added SNKRS link */}
          </Nav>

          {/* Icons on the right - pushed to the far right within Navbar.Collapse */}
          <Nav className="ms-auto d-flex align-items-center icon-nav-links">
            <Nav.Link href="#search" className="text-dark px-2">
              <BsSearch size={20} />
            </Nav.Link>
            <Nav.Link href="#cart" className="text-dark px-2">
              <BsBag size={20} />
            </Nav.Link>
            <Nav.Link href="#profile" className="text-dark px-2">
              <BsPerson size={20} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;