import React, { useState } from "react";
import hero from "../assets/Updated .png";

const sectionStyle = {
  background: "#000",
  color: "#fff",
  padding: "120px 0 60px",
  fontFamily: 'Inter, system-ui, sans-serif',
};

const containerStyle = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: "0 32px",
};

const headlineStyle = {
  fontWeight: 700,
  fontSize: 56,
  lineHeight: 1.1,
  letterSpacing: "-0.03em",
  marginBottom: 24,
  maxWidth: 'none',
};

const subheadlineStyle = {
  color: '#b0b0b0',
  fontWeight: 400,
  fontSize: 20,
  lineHeight: 1.5,
  marginBottom: 40,
  maxWidth: 580,
};

const buttonRowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 24,
  marginBottom: 64,
};

const primaryButtonStyle = {
  background: '#fff',
  color: '#000',
  border: '1px solid #fff',
  borderRadius: 6,
  padding: '8px 18px',
  fontWeight: 500,
  fontSize: 15,
  cursor: 'pointer',
  transition: 'all 0.2s',
};

const heroImageStyle = {
  width: '100%',
  borderRadius: 12,
  display: 'block',
  margin: '0 auto',
};

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const secondaryLinkStyle = {
    color: '#b0b0b0',
    fontWeight: 500,
    fontSize: 15,
    textDecoration: 'none',
    cursor: 'pointer',
    padding: '8px 18px',
    borderRadius: 6,
    transition: 'all 0.2s',
    background: isHovered ? '#222' : 'transparent',
    border: isHovered ? '1px solid #444' : '1px solid transparent',
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h1 style={headlineStyle}>
          Linear is a purpose-built tool for<br />
          planning and building products
        </h1>
        <div style={subheadlineStyle}>
          Meet the system for modern software development.<br />
          Streamline issues, projects, and product roadmaps.
        </div>
        <div style={buttonRowStyle}>
          <button style={primaryButtonStyle}>Start building</button>
          <a 
            href="#" 
            style={secondaryLinkStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Introducing Linear for Agents &gt;
          </a>
        </div>
        <img src={hero} alt="Linear App Screenshot" style={heroImageStyle} draggable={false} />
      </div>
    </section>
  );
};

export default HeroSection;