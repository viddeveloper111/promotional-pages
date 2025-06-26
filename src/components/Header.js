import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BsSearch, BsBag, BsPerson } from 'react-icons/bs';

import './Header.css';

const Header = () => {
  return (
    <Navbar className="nike-navbar py-0 sticky-top">
      <Container fluid className="d-flex align-items-center">
        <Navbar.Brand href="#home">
          <img
            src="/nike-logo.png"
            alt="Nike Logo"
            height="70px"
            className="nike-logo-img"
          />
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-1 d-flex">

          <div className="me-auto"></div>

          <Nav className="mx-auto my-2 my-lg-0 main-nav-links">
            <Nav.Link href="#new-featured" className="text-dark fw-bold nav-link-custom">New & Featured</Nav.Link>
            <Nav.Link href="#men" className="text-dark fw-bold nav-link-custom">Men</Nav.Link>
            <Nav.Link href="#women" className="text-dark fw-bold nav-link-custom">Women</Nav.Link>
            <Nav.Link href="#kids" className="text-dark fw-bold nav-link-custom">Kids</Nav.Link>
            <Nav.Link href="#sale" className="text-dark fw-bold nav-link-custom">Sale</Nav.Link>
            <Nav.Link href="#snkrs" className="text-dark fw-bold nav-link-custom">SNKRS</Nav.Link> 
          </Nav>

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