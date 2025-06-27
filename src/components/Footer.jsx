import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#000',
        color: '#aaa',
        padding: '60px 40px 0 40px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* Top Section */}
      <div
        className="d-flex justify-content-between flex-wrap"
        style={{ paddingBottom: '60px' }}
      >
        {/* Heading */}
        <div className="mb-4" style={{ minWidth: '420px' }}>
          <h1
            style={{
              textAlign: 'left',
              whiteSpace: 'pre-wrap',
              marginBlock: '0px',
              fontWeight: 400,
              fontSize: '48px',
              lineHeight: '72px',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            <span style={{ color: '#fff', fontWeight: 600 }}>The Most Productive</span>
            <br />
            <span style={{ color: '#aaa', fontWeight: 400 }}>Email App Ever Made</span>
          </h1>
        </div>

        {/* Links */}
        <div
          className="d-flex flex-wrap"
          style={{ gap: '80px', justifyContent: 'flex-end' }}
        >
          {/* Link Group 1 */}
          <div className="d-flex flex-column">
            <h4 style={{ color: '#fff', marginBottom: '15px', fontWeight: 600 }}>Company</h4>
            <a href="#" style={linkStyle}>Blog</a>
            <a href="#" style={linkStyle}>Careers</a>
            <a href="#" style={linkStyle}>Love <span role="img" aria-label="love">💜</span></a>
          </div>

          {/* Link Group 2 */}
          <div className="d-flex flex-column">
            <h4 style={{ color: '#fff', marginBottom: '15px', fontWeight: 600 }}>Product</h4>
            {['Pricing', 'Download', 'AI', 'Sales', 'Enterprise', 'Agencies', 'Consulting', 'Gmail', 'Outlook'].map(text => (
              <a key={text} href="#" style={linkStyle}>{text}</a>
            ))}
          </div>

          {/* Link Group 3 */}
          <div className="d-flex flex-column">
            <h4 style={{ color: '#fff', marginBottom: '15px', fontWeight: 600 }}>Support</h4>
            <a href="#" style={linkStyle}>Help Center</a>
            <a href="#" style={linkStyle}>Contact Us</a>
            <a href="#" style={linkStyle}>Tutorials</a>
          </div>

          {/* Link Group 4 */}
          <div className="d-flex flex-column">
            <h4 style={{ color: '#fff', marginBottom: '15px', fontWeight: 600 }}>Legal</h4>
            <a href="#" style={linkStyle}>Privacy</a>
            <a href="#" style={linkStyle}>Terms</a>
            <a href="#" style={linkStyle}>AUP</a>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div style={{ borderTop: '2px solid #222', margin: '0 -40px', marginBottom: 0 }} />

      {/* Bottom Section */}
      <div
        className="d-flex justify-content-between align-items-center pt-4 flex-wrap"
        style={{ fontSize: '18px', paddingBottom: '20px' }}
      >
        <div
          className="brand-logo fw-bold d-flex align-items-center"
          style={{ color: '#fff', gap: '12px', fontSize: '24px', fontWeight: 600, letterSpacing: '0.1em' }}
        >
          {/* Replace with SVG or image for real logo if available */}
          <span style={{ fontSize: '28px', fontWeight: 700, marginRight: '8px' }}>▢</span> SUPERHUMAN
        </div>
        <div className="social-icons d-flex" style={{ gap: '32px' }}>
          {/* Replace with SVGs for real icons if available */}
          <a href="#" style={iconStyle} aria-label="X">✖</a>
          <a href="#" style={iconStyle} aria-label="LinkedIn">in</a>
          <a href="#" style={iconStyle} aria-label="TikTok">𝅘𝅥𝅮</a>
          <a href="#" style={iconStyle} aria-label="YouTube">▶</a>
        </div>
      </div>
    </footer>
  );
};

// Link hover style logic
const linkStyle = {
  color: '#aaa',
  textDecoration: 'none',
  marginBottom: '10px',
  transition: 'color 0.2s',
  cursor: 'pointer',
  display: 'block',
  fontSize: '18px',
  fontWeight: 400,
};

const iconStyle = {
  fontSize: '28px',
  color: '#aaa',
  cursor: 'pointer',
  transition: 'color 0.2s',
  textDecoration: 'none',
  display: 'inline-block',
};

export default Footer;
