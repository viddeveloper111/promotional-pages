import React, { useState } from "react";

const sectionStyle = {
  background: "#111112",
  padding: "72px 0 96px 0",
  fontFamily: 'Inter, system-ui, sans-serif',
};
const containerStyle = {
  maxWidth: 1280,
  margin: "0 auto",
  padding: "0 72px",
  width: "100%",
  position: 'relative',
};
const rowStyle = {
  display: "flex",
  gap: 48,
  alignItems: "flex-start",
  justifyContent: "center",
  flexWrap: "wrap",
  position: 'relative',
};
const colStyle = {
  flex: 1,
  minWidth: 320,
  maxWidth: 520,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};
const headingStyle = {
  color: "#fff",
  fontWeight: 700,
  fontSize: 24,
  marginBottom: 8,
  marginTop: 0,
};
const subheadingStyle = {
  color: "#bfc3c6",
  fontWeight: 400,
  fontSize: 16,
  marginBottom: 32,
  marginTop: 0,
};
const cardStyle = {
  background: "linear-gradient(120deg, #19191c 60%, #18181a 100%)",
  borderRadius: 20,
  boxShadow: "0 8px 32px 0 rgba(0,0,0,0.24)",
  border: "1px solid rgba(255,255,255,0.08)",
  padding: 32,
  width: "100%",
  minHeight: 220,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  transition: "transform 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.18s cubic-bezier(.4,2,.6,1)",
  marginBottom: 0,
  marginTop: 0,
  overflow: "hidden",
};
const cardHoverStyle = {
  transform: "translateY(-18px) scale(1.03)",
  boxShadow: "0 16px 48px 0 rgba(0,0,0,0.32)",
};

// Project Overview mockup
const overviewTitle = {
  color: "#fff",
  fontWeight: 600,
  fontSize: 20,
  marginBottom: 18,
};
const overviewRow = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  marginBottom: 8,
  color: '#bfc3c6',
  fontSize: 15,
};
const badge = {
  background: '#232326',
  color: '#fff',
  borderRadius: 8,
  padding: '2px 10px',
  fontSize: 13,
  fontWeight: 500,
  marginRight: 6,
  display: 'inline-block',
};
const status = {
  color: '#ffe066',
  fontWeight: 600,
  fontSize: 14,
  marginRight: 8,
};
const milestone = {
  color: '#7cfaaf',
  fontWeight: 500,
  fontSize: 14,
  marginRight: 8,
};

// Project Updates mockup
const updateCard = {
  background: 'linear-gradient(120deg, #18181a 60%, #19191c 100%)',
  borderRadius: 14,
  padding: '18px 24px',
  color: '#fff',
  fontWeight: 500,
  fontSize: 16,
  marginBottom: 8,
  boxShadow: '0 2px 12px 0 rgba(0,0,0,0.18)',
  border: '1px solid rgba(255,255,255,0.08)',
  minWidth: 260,
  maxWidth: 340,
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 2,
  transition: 'transform 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.18s cubic-bezier(.4,2,.6,1)',
};
const updateStatus = {
  color: '#7cfaaf',
  fontWeight: 700,
  fontSize: 15,
  marginBottom: 4,
  display: 'flex',
  alignItems: 'center',
  gap: 6,
};
const fadedCard = {
  ...updateCard,
  opacity: 0.25,
  left: 24,
  top: 32,
  zIndex: 1,
  filter: 'blur(1px)',
  transform: 'rotate(-6deg)',
};
const fadedCard2 = {
  ...updateCard,
  opacity: 0.12,
  left: 48,
  top: 64,
  zIndex: 0,
  filter: 'blur(2px)',
  transform: 'rotate(-12deg)',
};
const fadedStatusAtRisk = {
  color: '#ffb545',
  fontWeight: 700,
  fontSize: 15,
  marginBottom: 4,
  display: 'flex',
  alignItems: 'center',
  gap: 6,
};
const fadedStatusOffTrack = {
  color: '#ff5c5c',
  fontWeight: 700,
  fontSize: 15,
  marginBottom: 4,
  display: 'flex',
  alignItems: 'center',
  gap: 6,
};

const dividerHStyle = {
  width: '100%',
  height: 1,
  background: 'rgba(255,255,255,0.08)',
  margin: '0 0 56px 0',
  border: 'none',
  display: 'block',
};
const dividerVStyle = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: '50%',
  width: 1,
  background: 'rgba(255,255,255,0.08)',
  border: 'none',
  zIndex: 0,
  display: 'block',
};

const mediaQuery = `@media (max-width: 900px)`;
const responsiveStyles = `
  ${mediaQuery} {
    .pm-divider-v { display: none !important; }
    .pm-divider-h { display: none !important; }
  }
`;

const ProjectManagementSection = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section style={sectionStyle}>
      <style>{responsiveStyles}</style>
      <div style={containerStyle}>
        <div className="pm-divider-h" style={dividerHStyle}></div>
        <div style={rowStyle}>
          <div className="pm-divider-v" style={dividerVStyle}></div>
          {/* Left column */}
          <div style={colStyle}>
            <h3 style={headingStyle}>Manage projects end-to-end</h3>
            <p style={subheadingStyle}>
              Consolidate specs, milestones, tasks, and other documentation in one centralized location.
            </p>
            <div style={cardStyle}>
              <div style={overviewTitle}>Project Overview</div>
              <div style={overviewRow}><span style={status}>● In Progress</span>ENG 👥</div>
              <div style={overviewRow}><span style={badge}>Exploration</span><span style={badge}>User interviews</span></div>
              <div style={overviewRow}><span style={milestone}>◆ Design Review</span>100%</div>
              <div style={overviewRow}><span style={milestone}>◆ Internal Alpha</span>100% of 10</div>
              <div style={overviewRow}><span style={status}>◆ GA</span>25% of 53</div>
            </div>
          </div>
          {/* Right column */}
          <div style={colStyle}>
            <h3 style={headingStyle}>Project updates</h3>
            <p style={subheadingStyle}>
              Communicate progress and project health with built-in project updates.
            </p>
            <div style={{ position: 'relative', width: '100%', minHeight: 180, height: 220 }}>
              {/* Faded, tilted cards behind */}
              <div style={fadedCard2}>
                <div style={fadedStatusOffTrack}>❌ Off track</div>
                <div>Unexpected roadblocks forced us to take a different path.</div>
                <div style={{ color: '#bfc3c6', fontSize: 13, marginTop: 8 }}>Oct 1</div>
              </div>
              <div style={fadedCard}>
                <div style={fadedStatusAtRisk}>⚠️ At risk</div>
                <div>Progress slowed down last week because…</div>
                <div style={{ color: '#bfc3c6', fontSize: 13, marginTop: 8 }}>Oct 5</div>
              </div>
              {/* Main card */}
              <div
                style={{ ...updateCard, ...(hovered ? cardHoverStyle : {}) }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <div style={updateStatus}>✔ On track</div>
                <div>We are ready to launch next Thursday</div>
                <div style={{ color: '#bfc3c6', fontSize: 13, marginTop: 8 }}>Sep 8</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectManagementSection; 