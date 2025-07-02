import React, { useState } from 'react';

const outerContainerStyle = {
  position: 'absolute',
  top: '100%',
  left: '50%',
  transform: 'translateX(-50%)',
  marginTop: '10px',
  width: '620px', // Increased width for a broader layout
  background: 'rgba(18, 18, 18, 0.5)', // Semi-transparent outer background
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '12px',
  zIndex: 1000,
  boxShadow: '0 12px 24px rgba(0,0,0,0.5)',
  backdropFilter: 'blur(12px)', // Blur effect
  padding: '1px', // Creates the outer border effect
};

const innerContainerStyle = {
  background: '#141414', // Solid inner background
  borderRadius: '11px', // Slightly smaller radius to fit inside
  overflow: 'hidden',
};

const mainContentStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1.8fr', // Adjusted column ratio
  padding: '24px',
};

const columnSeparatorStyle = {
  borderRight: '1px solid rgba(255, 255, 255, 0.1)',
  paddingRight: '40px', // Increased padding
};

const moreSectionContainerStyle = {
  display: 'flex',
  gap: '40px', // Increased gap between columns
  paddingLeft: '40px', // Increased padding
  marginTop: '24px',
};

const columnContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '24px', // Increased gap between items
};

const categoryTitleStyle = {
  color: '#888',
  fontSize: '12px',
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  marginBottom: '4px',
};

const linkItemStyle = {
  display: 'block',
  textDecoration: 'none',
  color: '#fff',
  background: 'none',
  border: 'none',
  textAlign: 'left',
  cursor: 'pointer',
  width: '100%',
  padding: 0, // Reset padding
};

const linkTitleStyle = {
  fontSize: '14px',
  fontWeight: 500,
  marginBottom: '2px',
  letterSpacing: '-0.005em', // Slightly tighten up the title
};

const linkDescriptionStyle = {
  fontSize: '13px', // Slightly larger for readability
  color: '#a1a1a1', // A slightly dimmer color
  letterSpacing: '0.005em', // Add a subtle stretch
};

const footerStyle = {
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  padding: '12px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '12px',
};

const newLabelStyle = {
  color: '#b0b0b0',
};

const changelogLinkStyle = {
  color: '#b392f0',
  textDecoration: 'none',
  fontWeight: 500,
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
};

const ProductDropdown = () => {
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
        <div style={{ ...columnContentStyle, ...columnSeparatorStyle }}>
          <div style={{...categoryTitleStyle, paddingLeft: '12px'}}>Core Features</div>
          <button 
             style={getLinkStyle('plan')} 
             onMouseEnter={() => setHoveredItem('plan')} 
             onMouseLeave={() => setHoveredItem(null)}
             onClick={(e) => { e.preventDefault(); window.location.href = '#'; }}
          >
            <div style={linkTitleStyle}>Plan</div>
            <div style={linkDescriptionStyle}>Set the product direction with projects and initiatives</div>
          </button>
          <button 
             style={getLinkStyle('build')} 
             onMouseEnter={() => setHoveredItem('build')} 
             onMouseLeave={() => setHoveredItem(null)}
             onClick={(e) => { e.preventDefault(); window.location.href = '#'; }}
          >
            <div style={linkTitleStyle}>Build</div>
            <div style={linkDescriptionStyle}>Make progress with issue tracking and cycle planning</div>
          </button>
        </div>
        <div>
          <div style={{...categoryTitleStyle, paddingLeft: '40px'}}>More</div>
          <div style={{...moreSectionContainerStyle}}>
            <div style={columnContentStyle}>
              <button 
                 style={getLinkStyle('customer-requests')} 
                 onMouseEnter={() => setHoveredItem('customer-requests')} 
                 onMouseLeave={() => setHoveredItem(null)}
                 onClick={(e) => { e.preventDefault(); window.location.href = '#'; }}
              >
                <div style={linkTitleStyle}>Customer requests</div>
                <div style={linkDescriptionStyle}>Manage user feedback</div>
              </button>
              <button 
                 style={getLinkStyle('insights')} 
                 onMouseEnter={() => setHoveredItem('insights')} 
                 onMouseLeave={() => setHoveredItem(null)}
                 onClick={(e) => { e.preventDefault(); window.location.href = '#'; }}
              >
                <div style={linkTitleStyle}>Insights</div>
                <div style={linkDescriptionStyle}>Realtime analytics</div>
              </button>
              <button 
                 style={getLinkStyle('linear-asks')} 
                 onMouseEnter={() => setHoveredItem('linear-asks')} 
                 onMouseLeave={() => setHoveredItem(null)}
                 onClick={(e) => { e.preventDefault(); window.location.href = '#'; }}
              >
                <div style={linkTitleStyle}>Linear Asks</div>
                <div style={linkDescriptionStyle}>Workplace requests</div>
              </button>
            </div>
            <div style={columnContentStyle}>
              <button 
                 style={getLinkStyle('integrations')} 
                 onMouseEnter={() => setHoveredItem('integrations')} 
                 onMouseLeave={() => setHoveredItem(null)}
                 onClick={(e) => { e.preventDefault(); window.location.href = '#'; }}
              >
                <div style={linkTitleStyle}>Integrations</div>
                <div style={linkDescriptionStyle}>Collaborate across tools</div>
              </button>
              <button 
                 style={getLinkStyle('mobile-app')} 
                 onMouseEnter={() => setHoveredItem('mobile-app')} 
                 onMouseLeave={() => setHoveredItem(null)}
                 onClick={(e) => { e.preventDefault(); window.location.href = '#'; }}
              >
                <div style={linkTitleStyle}>Mobile app</div>
                <div style={linkDescriptionStyle}>Linear in your pocket</div>
              </button>
              <button 
                 style={getLinkStyle('linear-for-agents')} 
                 onMouseEnter={() => setHoveredItem('linear-for-agents')} 
                 onMouseLeave={() => setHoveredItem(null)}
                 onClick={(e) => { e.preventDefault(); window.location.href = '#'; }}
              >
                <div style={linkTitleStyle}>Linear for Agents</div>
                <div style={linkDescriptionStyle}>Collaborate with AI teammates</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={footerStyle}>
        <div style={newLabelStyle}>
          <span style={{ fontWeight: 600, color: '#fff' }}>New: Project labels</span> Categorize project work
        </div>
        <button style={changelogLinkStyle} onClick={(e) => { e.preventDefault(); window.location.href = '#'; }}>Changelog</button>
      </div>
    </div>
  </div>
  )
};

export default ProductDropdown;
