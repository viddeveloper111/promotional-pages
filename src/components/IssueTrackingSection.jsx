import React from "react";
import S5 from "../assets/S5.png";
import S6_1 from "../assets/S6_1.png";
import S6_2 from "../assets/S6_2.png";

const sectionStyle = {
  background: "linear-gradient(180deg, #18181A 0%, #111112 100%)",
  padding: "104px 0 0 0",
  minHeight: 700,
  fontFamily: 'Inter, system-ui, sans-serif',
};
const containerStyle = {
  maxWidth: 1280,
  margin: "0 auto",
  padding: "0 72px",
  width: "100%",
  position: "relative",
  zIndex: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};
const badgeStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '20px',
  padding: '0',
  marginBottom: '18px',
  fontSize: '15px',
  fontWeight: 500,
  color: '#ffe066',
  letterSpacing: 0,
  gap: 8,
};
const dotStyle = {
  width: 8,
  height: 8,
  backgroundColor: '#ffe066',
  borderRadius: '50%',
  marginRight: '8px',
  display: 'inline-block',
};
const headlineStyle = {
  color: "#fff",
  fontWeight: 800,
  fontSize: 48,
  lineHeight: 1.08,
  marginBottom: 18,
  letterSpacing: "-0.04em",
  fontFamily: 'Inter, system-ui, sans-serif',
  maxWidth: 700,
};
const descriptionBlockStyle = {
  marginTop: 0,
  marginBottom: 0,
  maxWidth: 540,
  fontFamily: 'Inter, system-ui, sans-serif',
};
const imageRowStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  marginTop: 18,
  overflow: "visible",
};
const imageStyle = {
  width: "100vw",
  maxWidth: "1800px",
  minWidth: "900px",
  height: "auto",
  opacity: 1,
  filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.32))",
  borderRadius: 24,
  marginLeft: "-10vw",
  marginRight: "-10vw",
};

const dualSectionStyle = {
  background: "#111112",
  padding: "120px 0 96px 0",
  fontFamily: 'Inter, system-ui, sans-serif',
};
const dualContainerStyle = {
  maxWidth: 1280,
  margin: "0 auto",
  padding: "0 72px",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  gap: 48,
  justifyContent: "center",
  alignItems: "flex-start",
  position: 'relative',
};
const dualColStyle = {
  flex: 1,
  minWidth: 340,
  maxWidth: 480,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  zIndex: 1,
};
const dualHeadingStyle = {
  color: "#fff",
  fontWeight: 700,
  fontSize: 24,
  marginBottom: 10,
  marginTop: 0,
  lineHeight: 1.2,
};
const dualSubheadingStyle = {
  color: "#b4bcd0",
  fontWeight: 400,
  fontSize: 16,
  marginBottom: 32,
  marginTop: 0,
  lineHeight: 1.5,
};
const dividerHStyle = {
  width: '100%',
  height: 1,
  background: 'rgba(255,255,255,0.45)',
  margin: '48px 0 48px 0',
  border: 'none',
  display: 'block',
};
const verticalDividerStyle = {
  position: 'absolute',
  left: '50%',
  top: 0,
  height: '100%',
  width: 1,
  background: 'rgba(255,255,255,0.18)',
  zIndex: 2,
  borderRadius: 1,
  display: 'block',
};
const dualImageStyle = {
  width: "92%",
  height: "auto",
  display: "block",
  borderRadius: 18,
  objectFit: "cover",
  margin: "0 0 0 0",
  background: 'transparent',
  boxShadow: 'none',
  border: 'none',
};

const IssueTrackingSection = () => (
  <>
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={badgeStyle}>
          <span style={dotStyle}></span>
          Task tracking and sprint planning
        </div>
        <h2 style={headlineStyle}>Issue tracking<br />you'll enjoy using</h2>
        <div style={descriptionBlockStyle}>
          <span style={{ fontWeight: 600, color: '#fff', fontSize: 18, lineHeight: '24px' }}>
            Optimized for speed and efficiency.
          </span><br />
          <span style={{ color: '#b4bcd0', fontWeight: 400, fontSize: 16, lineHeight: '24px' }}>
            Create tasks in seconds, discuss issues in context, and breeze through your work in views tailored to you and your team.
          </span>
        </div>
        <div style={imageRowStyle}>
          <img src={S5} alt="Issue tracking UI" style={imageStyle} />
        </div>
      </div>
    </section>

    {/* New Dual Section: Cycles & Triage */}
    <section style={dualSectionStyle}>
      <div style={{...dualContainerStyle, flexDirection: 'column', gap: 0, alignItems: 'stretch', position: 'static', padding: 0}}>
        <hr style={dividerHStyle} />
        <div style={{display: 'flex', flexDirection: 'row', gap: 48, justifyContent: 'center', alignItems: 'flex-start', position: 'relative'}}>
          {/* Left: Cycles */}
          <div style={dualColStyle}>
            <div style={dualHeadingStyle}>Build momentum with Cycles</div>
            <div style={dualSubheadingStyle}>
              Create healthy routines and focus your team on what work should happen next.
            </div>
            <img src={S6_1} alt="Cycles graph" style={dualImageStyle} />
          </div>
          {/* Vertical Divider */}
          <div style={verticalDividerStyle}></div>
          {/* Right: Triage */}
          <div style={dualColStyle}>
            <div style={dualHeadingStyle}>Manage incoming work with Triage</div>
            <div style={dualSubheadingStyle}>
              Review and assign incoming bug reports, <span style={{ color: '#6ec2f7' }}>feature requests</span>, and other unplanned work.
            </div>
            <img src={S6_2} alt="Triage UI" style={dualImageStyle} />
          </div>
        </div>
        <hr style={dividerHStyle} />
      </div>
    </section>
  </>
);

export default IssueTrackingSection; 