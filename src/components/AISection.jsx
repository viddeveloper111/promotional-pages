import React from 'react';
import aiImage from '../assets/Updated_2.png';

const sectionStyle = {
  background: '#000',
  color: '#fff',
  padding: '120px 0',
  fontFamily: 'Inter, system-ui, sans-serif',
};

const containerStyle = {
  maxWidth: 1100,
  margin: '0 auto',
  padding: '0 32px',
  textAlign: 'left',
};

const aiLinkStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  color: '#b0b0b0',
  textDecoration: 'none',
  fontSize: 16,
  fontWeight: 500,
  marginBottom: '16px',
};

const blueDotStyle = {
  width: 8,
  height: 8,
  backgroundColor: '#3c82f6',
  borderRadius: '50%',
};

const headlineStyle = {
  fontWeight: 600,
  fontSize: 56,
  lineHeight: 1.1,
  letterSpacing: '-0.03em',
  marginBottom: 24,
};

const subheadlineStyle = {
  color: '#b0b0b0',
  fontWeight: 400,
  fontSize: 20,
  lineHeight: 1.5,
  marginBottom: 64,
  maxWidth: 580,
};

const imageContainerStyle = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const imageStyle = {
  width: '100%',
  maxWidth: '850px',
  height: 'auto',
};

const AISection = () => {
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <a href="#" style={aiLinkStyle}>
          <span style={blueDotStyle}></span>
          Artificial Intelligence &gt;
        </a>
        <h1 style={headlineStyle}>AI that works where you work</h1>
        <p style={subheadlineStyle}>
          <strong style={{ color: '#fff' }}>Linear for Agents.</strong> Choose from a variety of AI agents and start delegating work, from code generation to other technical tasks.
        </p>
        <div style={imageContainerStyle}>
          <img src={aiImage} alt="AI agents in Linear" style={imageStyle} />
        </div>
      </div>
    </section>
  );
};

export default AISection;
