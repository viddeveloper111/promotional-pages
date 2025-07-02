import React, { useState } from 'react';

const outerContainerStyle = {
  position: 'absolute',
  top: '100%',
  left: '50%',
  transform: 'translateX(-50%)',
  marginTop: '10px',
  width: '680px',
  background: 'rgba(18, 18, 18, 0.5)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '12px',
  zIndex: 1000,
  boxShadow: '0 12px 24px rgba(0,0,0,0.5)',
  backdropFilter: 'blur(12px)',
  padding: '1px',
};

const innerContainerStyle = {
  background: '#141414',
  borderRadius: '11px',
  overflow: 'hidden',
  padding: '24px',
};

const mainContentStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
};

const columnSeparatorStyle = {
  borderRight: '1px solid rgba(255, 255, 255, 0.1)',
  paddingRight: '24px',
};

const exploreSectionContainerStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '24px',
  paddingLeft: '24px',
  marginTop: '24px',
};

const columnContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
};

const categoryTitleStyle = {
  color: '#888',
  fontSize: '12px',
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  marginBottom: '4px',
  paddingLeft: '12px',
};

const linkItemStyle = {
  display: 'block',
  textDecoration: 'none',
  color: '#fff',
};

const linkTitleStyle = {
  fontSize: '14px',
  fontWeight: 500,
  marginBottom: '2px',
  letterSpacing: '-0.005em',
};

const linkDescriptionStyle = {
  fontSize: '13px',
  color: '#a1a1a1',
  letterSpacing: '0.005em',
};

const ResourcesDropdown = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const getLinkStyle = (itemName) => {
    const style = {
      ...linkItemStyle,
      padding: '8px 12px',
      margin: '0 -12px',
      borderRadius: '8px',
      transition: 'background-color 0.1s ease-in-out',
      display: 'block',
    };
    if (hoveredItem === itemName) {
      style.backgroundColor = 'rgba(255, 255, 255, 0.07)';
    }
    return style;
  };

  return (
    <div style={outerContainerStyle}>
      <div style={innerContainerStyle}>
        <div style={mainContentStyle}>
          {/* Company Column */}
          <div style={{ ...columnContentStyle, ...columnSeparatorStyle }}>
            <div style={categoryTitleStyle}>Company</div>
            <a href="#" style={getLinkStyle('about')} onMouseEnter={() => setHoveredItem('about')} onMouseLeave={() => setHoveredItem(null)}>
              <div style={linkTitleStyle}>About</div>
              <div style={linkDescriptionStyle}>Meet the team</div>
            </a>
            <a href="#" style={getLinkStyle('careers')} onMouseEnter={() => setHoveredItem('careers')} onMouseLeave={() => setHoveredItem(null)}>
              <div style={linkTitleStyle}>Careers</div>
              <div style={linkDescriptionStyle}>We're hiring</div>
            </a>
          </div>

          {/* Explore Section */}
          <div>
            <div style={{...categoryTitleStyle, paddingLeft: '24px'}}>Explore</div>
            <div style={exploreSectionContainerStyle}>
              {/* Explore Column 1 */}
              <div style={columnContentStyle}>
                <a href="#" style={getLinkStyle('developers')} onMouseEnter={() => setHoveredItem('developers')} onMouseLeave={() => setHoveredItem(null)}>
                  <div style={linkTitleStyle}>Developers</div>
                  <div style={linkDescriptionStyle}>Build on the Linear API</div>
                </a>
                <a href="#" style={getLinkStyle('security')} onMouseEnter={() => setHoveredItem('security')} onMouseLeave={() => setHoveredItem(null)}>
                  <div style={linkTitleStyle}>Security</div>
                  <div style={linkDescriptionStyle}>Safe, secure, and private</div>
                </a>
                <a href="#" style={getLinkStyle('docs')} onMouseEnter={() => setHoveredItem('docs')} onMouseLeave={() => setHoveredItem(null)}>
                  <div style={linkTitleStyle}>Docs</div>
                  <div style={linkDescriptionStyle}>How to use Linear</div>
                </a>
              </div>
              {/* Explore Column 2 */}
              <div style={columnContentStyle}>
                <a href="#" style={getLinkStyle('switch')} onMouseEnter={() => setHoveredItem('switch')} onMouseLeave={() => setHoveredItem(null)}>
                  <div style={linkTitleStyle}>Switch to Linear</div>
                  <div style={linkDescriptionStyle}>Migration guide</div>
                </a>
                <a href="#" style={getLinkStyle('download')} onMouseEnter={() => setHoveredItem('download')} onMouseLeave={() => setHoveredItem(null)}>
                  <div style={linkTitleStyle}>Download</div>
                  <div style={linkDescriptionStyle}>Get the app</div>
                </a>
                <a href="#" style={getLinkStyle('quality')} onMouseEnter={() => setHoveredItem('quality')} onMouseLeave={() => setHoveredItem(null)}>
                  <div style={linkTitleStyle}>Quality</div>
                  <div style={linkDescriptionStyle}>Conversations on quality</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesDropdown;
