import React from "react";
import BigSVG from "../assets/f=auto,dpr=2,q=95,fit=scale-down,metadata=none.svg";
import { Circle, SlidersHorizontal, ListFilter, Flame } from 'lucide-react';

const sectionStyle = {
  background: "#000",
  position: 'relative',
  padding: "160px 0",
  fontFamily: 'Inter, system-ui, sans-serif',
  overflow: 'hidden',
  width: '100%',
};
const containerStyle = {
  maxWidth: 1200, // Adjusted for wider layout
  margin: "0 auto",
  padding: "0 32px",
  position: 'relative',
  zIndex: 2,
};
const contentWrapStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  maxWidth: 480, 
};
const headingStyle = {
  color: "#fff",
  fontWeight: 600,
  fontSize: "40px", // Adjusted font size
  lineHeight: 1.2,
  marginBottom: 16,
  letterSpacing: "-0.025em",
  textAlign: 'left',
};
const subheadlineStyle = {
  color: '#b4bcd0',
  fontWeight: 400,
  fontSize: 18, // Adjusted font size
  marginBottom: 32,
  textAlign: 'left',
  lineHeight: 1.6,
  maxWidth: 420, // Adjusted max width
};
const buttonStyle = {
  background: 'rgba(255,255,255,0.05)',
  color: '#fff',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 999,
  padding: '8px 16px',
  fontWeight: 500,
  fontSize: 14,
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  transition: 'background 0.18s',
};
const svgBGStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-20%, -50%)',
  width: '100%',
  height: 'auto',
  maxWidth: '1200px',
  opacity: 0.3,
  zIndex: 1,
  pointerEvents: 'none',
  userSelect: 'none',
};
const featuresRowStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start', // Changed to flex-start
  alignItems: 'flex-start',
  gap: 80, // Increased gap
  marginTop: 160,
  width: '100%',
  borderTop: '1px solid rgba(255,255,255,0.1)',
  paddingTop: 48,
};
const featureColStyle = {
  flex: '0 1 240px', // Adjusted flex properties
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 12,
};
const featureTitleStyle = {
  color: '#fff',
  fontWeight: 500,
  fontSize: 16,
  display: 'flex',
  alignItems: 'center',
  gap: 10,
};
const featureDescStyle = {
  color: '#8a94a6',
  fontWeight: 400,
  fontSize: 14,
  lineHeight: 1.5,
  margin: 0,
};
const featureIconStyle = {
  height: 16,
  width: 16,
  color: '#8a94a6',
};

const LinearInsightsSection = () => (
  <section style={sectionStyle}>
    <img src={BigSVG} alt="Linear Insights Visual" style={svgBGStyle} draggable={false} />
    <div style={containerStyle}>
      <div style={contentWrapStyle}>
        <div style={headingStyle}>Linear Insights</div>
        <div style={subheadlineStyle}>Take the guesswork out of product planning with realtime, actionable data analytics.</div>
        <button style={buttonStyle}>
          Learn more <span style={{fontSize: 14, marginLeft: 4, color: '#8a94a6'}}>&gt;</span>
        </button>
      </div>
      <div style={featuresRowStyle}>
        <div style={featureColStyle}>
          <div style={featureTitleStyle}><Circle style={featureIconStyle}/>Tailored workflows</div>
          <div style={featureDescStyle}>Track progress across custom issue flows for your team.</div>
        </div>
        <div style={featureColStyle}>
          <div style={featureTitleStyle}><SlidersHorizontal style={featureIconStyle}/>Custom views</div>
          <div style={featureDescStyle}>Switch between list and board. Group issues with swimlanes.</div>
        </div>
        <div style={featureColStyle}>
          <div style={featureTitleStyle}><ListFilter style={featureIconStyle}/>Filters</div>
          <div style={featureDescStyle}>Refine issue lists down to what's most relevant to you.</div>
        </div>
        <div style={featureColStyle}>
          <div style={featureTitleStyle}><Flame style={featureIconStyle}/>SLAs</div>
          <div style={featureDescStyle}>Automatically apply deadlines to time-sensitive tasks.</div>
        </div>
      </div>
    </div>
  </section>
);

export default LinearInsightsSection;