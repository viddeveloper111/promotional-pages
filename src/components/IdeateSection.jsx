import React, { useState } from "react";
import U1 from "../assets/U1.png";
import U2 from "../assets/U2.png";
import U3 from "../assets/U3.png";
import icon1 from "../assets/svgexport-70.png";
import icon2 from "../assets/svgexport-71.png";
import icon3 from "../assets/svgexport-72.png";
import icon4 from "../assets/svgexport-73.png";

const sectionStyle = {
  background: "#111112",
  padding: "72px 0 0 0",
  fontFamily: 'Inter, system-ui, sans-serif',
};
const containerStyle = {
  maxWidth: 1280,
  margin: "0 auto",
  padding: "0 72px",
  width: "100%",
};
const mainRowStyle = {
  display: 'flex',
  gap: 64,
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  minHeight: 420,
};
const leftColStyle = {
  minWidth: 320,
  maxWidth: 420,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
};
const rightColStyle = {
  minWidth: 340,
  maxWidth: 520,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};
const headingStyle = {
  color: "#fff",
  fontWeight: 700,
  fontSize: 32,
  marginBottom: 32,
  marginTop: 0,
  lineHeight: 1.1,
};
const menuStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 0,
  marginBottom: 32,
  width: '100%',
};
const menuItemStyle = {
  display: 'flex',
  alignItems: 'center',
  fontSize: 19,
  fontWeight: 500,
  color: '#bfc3c6',
  background: 'none',
  border: 'none',
  outline: 'none',
  padding: '0 0 0 0',
  margin: 0,
  height: 48,
  cursor: 'pointer',
  transition: 'color 0.15s',
  position: 'relative',
  width: '100%',
  textAlign: 'left',
  borderRadius: 0,
};
const menuItemActiveStyle = {
  color: '#fff',
  fontWeight: 700,
  background: 'none',
};
const greenBarStyle = {
  width: 3,
  height: 32,
  background: '#3fe17f',
  borderRadius: 2,
  marginRight: 18,
  marginLeft: 0,
  transition: 'opacity 0.15s',
};
const grayBarStyle = {
  width: 3,
  height: 32,
  background: 'transparent',
  borderRadius: 2,
  marginRight: 18,
  marginLeft: 0,
};
const cardStyle = {
  background: 'linear-gradient(120deg, #19191c 60%, #18181a 100%)',
  borderRadius: 18,
  boxShadow: '0 8px 32px 0 rgba(0,0,0,0.24)',
  border: '1px solid rgba(255,255,255,0.08)',
  padding: 0,
  width: '100%',
  maxWidth: 420,
  minHeight: 340,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  marginTop: 0,
};
const cardImgStyle = {
  width: '100%',
  height: 'auto',
  objectFit: 'contain',
  display: 'block',
  borderRadius: 18,
};
const dividerStyle = {
  width: '100%',
  height: '2px',
  background: 'rgba(255,255,255,0.28)',
  margin: '64px 0 32px 0',
  border: 'none',
  display: 'block',
};
const featuresRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: 24,
  width: '100%',
  flexWrap: 'wrap',
};
const featureColStyle = {
  flex: 1,
  minWidth: 180,
  maxWidth: 260,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginBottom: 16,
};

const featureTitleStyle = {
  color: '#fff',
  fontWeight: 600,
  fontSize: 16,
  marginBottom: 4,
};
const featureDescStyle = {
  color: '#bfc3c6',
  fontWeight: 400,
  fontSize: 15,
  marginBottom: 0,
};
const featureIconImgStyle = {
  width: 22,
  height: 22,
  marginRight: 10,
  marginBottom: 0,
  objectFit: 'contain',
  display: 'inline-block',
  verticalAlign: 'middle',
};
const featureTitleRowStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: 4,
};

const menuOptions = [
  {
    label: 'Collaborative documents',
    img: U1,
    desc: 'Collaborative documents',
  },
  {
    label: 'Inline comments',
    img: U2,
    desc: 'Inline comments',
  },
  {
    label: 'Text-to-issue commands',
    img: U3,
    desc: 'Text-to-issue commands',
  },
];

const features = [
  {
    icon: icon1,
    title: 'Initiatives',
    desc: 'Coordinate strategic product efforts.',
  },
  {
    icon: icon2,
    title: 'Cross-team projects',
    desc: 'Collaborate across teams and departments.',
  },
  {
    icon: icon3,
    title: 'Milestones',
    desc: 'Break projects down into concrete phases.',
  },
  {
    icon: icon4,
    title: 'Progress insights',
    desc: 'Track scope, velocity, and progress over time.',
  },
];

const IdeateSection = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={mainRowStyle}>
          {/* Left column */}
          <div style={leftColStyle}>
            <h2 style={headingStyle}>Ideate and specify<br />what to build next</h2>
            <div style={menuStyle}>
              {menuOptions.map((option, idx) => (
                <button
                  key={option.label}
                  style={{
                    ...menuItemStyle,
                    ...(selected === idx ? menuItemActiveStyle : {}),
                  }}
                  onClick={() => setSelected(idx)}
                  tabIndex={0}
                >
                  <span style={selected === idx ? greenBarStyle : grayBarStyle}></span>
                  {option.label}
                </button>
              ))}
            </div>
          </div>
          {/* Right column */}
          <div style={rightColStyle}>
            <div style={cardStyle}>
              <img src={menuOptions[selected].img} alt={menuOptions[selected].desc} style={cardImgStyle} />
            </div>
          </div>
        </div>
        <hr style={dividerStyle} />
        <div style={featuresRowStyle}>
          {features.map((f, i) => (
            <div key={f.title} style={featureColStyle}>
              <div style={featureTitleRowStyle}>
                <img src={f.icon} alt={f.title} style={featureIconImgStyle} />
                <div style={featureTitleStyle}>{f.title}</div>
              </div>
              <div style={featureDescStyle}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdeateSection; 