import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BsSearch, BsBag, BsPerson } from 'react-icons/bs';

import './Header.css';

const Header = () => {
  return (
    <Navbar className="nike-navbar py-3"> 
      <Container fluid> 
        
        <Navbar.Brand href="#home" className="fw-bold fs-3 text-dark mx-auto mx-lg-0">
          NIKE
        </Navbar.Brand>

        
        <Navbar.Collapse id="basic-navbar-nav" className='d-block'>
          <Nav className="me-auto"></Nav>
          
          <Nav className="mx-auto my-2 my-lg-0" align-item='center'> 
            <Nav.Link href="#new-featured" className="text-dark fw-bold nav-link-custom">New & Featured</Nav.Link>
            <Nav.Link href="#men" className="text-dark fw-bold nav-link-custom">Men</Nav.Link>
            <Nav.Link href="#women" className="text-dark fw-bold nav-link-custom">Women</Nav.Link>
            <Nav.Link href="#kids" className="text-dark fw-bold nav-link-custom">Kids</Nav.Link>
            <Nav.Link href="#sale" className="text-dark fw-bold nav-link-custom">Sale</Nav.Link>
          </Nav>

          
          <Nav className="ms-auto d-flex align-items-center"> 
            
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