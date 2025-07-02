import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MegaMenu from './MegaMenu';

import { Container, Navbar, Nav, Form } from 'react-bootstrap';
import '../style/Navbar.css';

function MyntraNavbar() {
  const [hovered, setHovered] = useState(null);
  const [menuData, setMenuData] = useState({});

  useEffect(() => {
    fetch('/data/megaMenu.json') 
      .then(res => res.json())
      .then(data => setMenuData(data))
      .catch(err => console.error('Mega menu load error:', err));
  }, []);

  return (
    <Navbar bg="light" expand="lg" className="my-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/images/navbar/myntra.svg"
            width="50"
            height="30"
            alt="Myntra Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto position-relative">
            {["MEN", "WOMEN", "KIDS", "HOME", "BEAUTY", "GENZ", "STUDIO"].map(label => (
              <div
                key={label}
                onMouseEnter={() => setHovered(label)}
                onMouseLeave={() => setHovered(null)}
                className="position-relative"
              >
                <Nav.Link href="#" className="text-dark fw-semibold px-2">{label}</Nav.Link>
                {hovered === label && menuData[label] && (
                  <MegaMenu data={menuData[label]} />
                )}
              </div>
            ))}
          </Nav>

        
          <Form className="search-container">
            <input
              style={{ width: '350px' }}
              type="search"
              placeholder="Search for products, brands, and more"
              className="search-input"
            />
          </Form>

       
          <div className="nav-icons d-flex align-items-center">
            <div className="text-center me-4">
              <i className="bi bi-person fs-6"></i>
              <div className="nav-label">Profile</div>
            </div>
            <div className="text-center me-4">
              <i className="bi bi-heart fs-6"></i>
              <div className="nav-label">Wishlist</div>
            </div>
            <div className="text-center">
              <i className="bi bi-bag fs-6"></i>
              <div className="nav-label">Bag</div>
            </div>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyntraNavbar;
