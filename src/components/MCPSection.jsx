import React from 'react';
import mcpImage from '../assets/S9_1.png';
import aiNativeImage from '../assets/S9_2.png';

const sectionStyle = {
  background: '#000',
  color: '#fff',
  padding: '120px 0',
  fontFamily: 'Inter, system-ui, sans-serif',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  position: 'relative',
};

const containerStyle = {
  maxWidth: 1100,
  margin: '0 auto',
  padding: '0 32px',
  display: 'flex',
  gap: '100px',
  position: 'relative',
};

const columnStyle = {
  flex: 1,
  paddingTop: '60px',
};

const secondColumnStyle = {
  flex: 1,
  borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
  paddingLeft: '50px',
  paddingTop: '60px',
};

const titleStyle = {
  fontWeight: 600,
  fontSize: 24,
  marginBottom: 16,
};

const descriptionStyle = {
  color: '#b0b0b0',
  fontSize: 18,
  lineHeight: 1.5,
  marginBottom: 32,
};

const imageStyle = {
  width: '100%',
  borderRadius: '8px',
};

const MCPSection = () => {
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={columnStyle}>
          <h2 style={titleStyle}>Linear MCP</h2>
          <p style={descriptionStyle}>
            Connect Linear to your favorite tools including Cursor, Claude, ChatGPT, and more.
          </p>
          <img src={mcpImage} alt="Linear MCP" style={imageStyle} />
        </div>
        <div style={secondColumnStyle}>
          <h2 style={titleStyle}>AI natively built in</h2>
          <p style={descriptionStyle}>
            Linear uses the latest language models to power workflows from semantic search to summarizing your team's project updates.
          </p>
          <img src={aiNativeImage} alt="AI natively built in" style={imageStyle} />
        </div>
      </div>
    </section>
  );
};

export default MCPSection;
