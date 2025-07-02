import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "../assets/linear-logo.svg";
import ProductDropdown from "./ProductDropdown";
import ResourcesDropdown from "./ResourcesDropdown";

const navFont = {
  fontFamily: 'Inter, system-ui, sans-serif',
  fontWeight: 500,
  fontSize: 15,
  letterSpacing: '-0.01em',
};

const navLinkStyle = {
  ...navFont,
  color: '#b0b0b0',
  margin: '0 12px',
  padding: '0',
  background: 'none',
  border: 'none',
  transition: 'color 0.15s',
  textDecoration: 'none',
  lineHeight: '48px',
};

const navLinkActiveStyle = {
  ...navLinkStyle,
  color: '#fff',
};

const loginLinkStyle = {
  ...navFont,
  color: '#b0b0b0',
  marginRight: 16,
  textDecoration: 'none',
  background: 'none',
  border: 'none',
  padding: 0,
  lineHeight: '48px',
  transition: 'color 0.15s',
};

const signUpButtonStyle = {
  ...navFont,
  background: '#fff',
  color: '#000',
  border: 'none',
  borderRadius: 999,
  fontWeight: 500,
  fontSize: 15,
  padding: '5px 16px',
  marginLeft: 8,
  boxShadow: 'none',
  transition: 'background 0.18s',
};

const AppNavbar = () => {
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const getNavLinkStyle = (linkName) => {
    const style = {
      ...navLinkStyle,
      padding: '6px 12px',
      borderRadius: '6px',
      margin: '0 4px',
      transition: 'background-color 0.15s, color 0.15s',
    };
    if (hoveredLink === linkName) {
      style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
      style.color = '#fff';
    }
    return style;
  };

  return (
    <Navbar bg="black" variant="dark" expand="lg" fixed="top" style={{ height: 48, padding: '0', borderBottom: '1px solid #1f1f1f', zIndex: 100 }}>
      <Container style={{ maxWidth: 1140, padding: '0 24px', height: 48 }}>
        <Navbar.Brand href="/" style={{ display: 'flex', alignItems: 'center', height: 48, marginRight: '125px' }}>
          <img src={logo} alt="Linear Logo" height="20" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="me-auto" style={{ alignItems: 'center', height: 48 }}>
            <div 
              style={{ position: 'relative' }} 
              onMouseEnter={() => { setShowProductDropdown(true); setHoveredLink('product'); }}
              onMouseLeave={() => { setShowProductDropdown(false); setHoveredLink(null); }}
            >
              <Nav.Link href="#product" style={getNavLinkStyle('product')}>Product</Nav.Link>
              {showProductDropdown && <ProductDropdown />}
            </div>
            <div 
              style={{ position: 'relative' }} 
              onMouseEnter={() => { setShowResourcesDropdown(true); setHoveredLink('resources'); }}
              onMouseLeave={() => { setShowResourcesDropdown(false); setHoveredLink(null); }}
            >
              <Nav.Link href="#resources" style={getNavLinkStyle('resources')}>Resources</Nav.Link>
              {showResourcesDropdown && <ResourcesDropdown />}
            </div>
            <Nav.Link href="#pricing" style={getNavLinkStyle('pricing')} onMouseEnter={() => setHoveredLink('pricing')} onMouseLeave={() => setHoveredLink(null)}>Pricing</Nav.Link>
            <Link to="/customers" style={getNavLinkStyle('customers')} onMouseEnter={() => setHoveredLink('customers')} onMouseLeave={() => setHoveredLink(null)}>Customers</Link>
            <Link to="/blog" style={getNavLinkStyle('blog')} onMouseEnter={() => setHoveredLink('blog')} onMouseLeave={() => setHoveredLink(null)}>Blog</Link>
            <Link to="/contact" style={getNavLinkStyle('contact')} onMouseEnter={() => setHoveredLink('contact')} onMouseLeave={() => setHoveredLink(null)}>Contact</Link>
          </Nav>
          <Nav className="ms-auto align-items-center" style={{ height: 48 }}>
            <Nav.Link href="#login" style={loginLinkStyle}>Log in</Nav.Link>
            <Button style={signUpButtonStyle}>Sign up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;