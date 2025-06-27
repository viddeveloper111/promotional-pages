import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#000',
        color: '#aaa',
        padding: '60px 40px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* Top Section */}
      <div
        className="d-flex justify-content-between flex-wrap border-bottom pb-4"
      >
        {/* Heading */}
        <div className="mb-4" style={{ minWidth: '280px' }}>
          <h1
            style={{
              color: '#fff',
              textAlign: 'left',
              whiteSpace: 'pre-wrap',
              marginBlock: '0px',
              fontWeight: 400,
              fontSize: '48px',
              lineHeight: '32px',
              fontFamily: '"Adelle Sans SemiBold", sans-serif',
            }}
          >
            The Most <span style={{ color: '#fff' }}>Productive</span>
            <br />Email App Ever Made
          </h1>
        </div>

        {/* Links */}
        <div
          className="d-flex flex-wrap"
          style={{ gap: '60px', justifyContent: 'flex-end' }}
        >
          {/* Link Group 1 */}
          <div className="d-flex flex-column">
            <h4 style={{ color: '#fff', marginBottom: '15px' }}>Company</h4>
            <a href="#" style={linkStyle}>Blog</a>
            <a href="#" style={linkStyle}>Careers</a>
            <a href="#" style={linkStyle}>Love 💜</a>
          </div>

          {/* Link Group 2 */}
          <div className="d-flex flex-column">
            <h4 style={{ color: '#fff', marginBottom: '15px' }}>Product</h4>
            {['Pricing', 'Download', 'AI', 'Sales', 'Enterprise', 'Agencies', 'Consulting', 'Gmail', 'Outlook'].map(text => (
              <a key={text} href="#" style={linkStyle}>{text}</a>
            ))}
          </div>

          {/* Link Group 3 */}
          <div className="d-flex flex-column">
            <h4 style={{ color: '#fff', marginBottom: '15px' }}>Support</h4>
            <a href="#" style={linkStyle}>Help Center</a>
            <a href="#" style={linkStyle}>Contact Us</a>
            <a href="#" style={linkStyle}>Tutorials</a>
          </div>

          {/* Link Group 4 */}
          <div className="d-flex flex-column">
            <h4 style={{ color: '#fff', marginBottom: '15px' }}>Legal</h4>
            <a href="#" style={linkStyle}>Privacy</a>
            <a href="#" style={linkStyle}>Terms</a>
            <a href="#" style={linkStyle}>AUP</a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className="d-flex justify-content-between align-items-center pt-4 flex-wrap"
        style={{ fontSize: '18px' }}
      >
        <div
          className="brand-logo fw-bold d-flex align-items-center"
          style={{ color: '#fff', gap: '8px' }}
        >
          🟦 SUPERHUMAN
        </div>
        <div className="social-icons d-flex" style={{ gap: '20px' }}>
          {['✖', 'in', '🎵', '▶'].map((icon, i) => (
            <span
              key={i}
              style={{
                fontSize: '20px',
                color: '#aaa',
                cursor: 'pointer',
                transition: 'color 0.2s',
              }}
              onMouseOver={(e) => (e.target.style.color = '#fff')}
              onMouseOut={(e) => (e.target.style.color = '#aaa')}
            >
              {icon}
            </span>
          ))}
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
  fontSize: '16px',
};

export default Footer;
