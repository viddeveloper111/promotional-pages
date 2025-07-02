import React from "react";
import sectionImg from "../assets/Section 4.png";

const sectionStyle = {
  background: "#000",
  padding: "160px 0",
  fontFamily: 'Inter, system-ui, sans-serif',
  color: '#fff',
};

const containerStyle = {
  maxWidth: 1100,
  margin: "0 auto",
  padding: "0 32px",
};

const planningLinkStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  color: '#b0b0b0',
  textDecoration: 'none',
  fontSize: 16,
  fontWeight: 500,
  marginBottom: '16px',
};

const greenDotStyle = {
  width: 8,
  height: 8,
  backgroundColor: '#3cff8f',
  borderRadius: '50%',
};

const headlineStyle = {
  color: "#fff",
  fontWeight: 700,
  fontSize: "56px",
  lineHeight: 1.1,
  marginBottom: 24,
  letterSpacing: "-0.03em",
  fontFamily: 'Inter, system-ui, sans-serif',
  maxWidth: '700px',
};

const subheadlineStyle = {
  color: "#b0b0b0",
  fontWeight: 400,
  fontSize: 20,
  lineHeight: 1.5,
  marginBottom: 64,
  fontFamily: 'Inter, system-ui, sans-serif',
  maxWidth: '500px',
};

const imageStyle = {
  width: '100%',
  maxWidth: '1000px',
  height: 'auto',
  margin: '0 auto',
  display: 'block',
  borderRadius: 12,
};

const ProductDirectionSection = () => {
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <a href="#" style={planningLinkStyle}>
          <span style={greenDotStyle}></span>
          Project and long-term planning &gt;
        </a>
        <h1 style={headlineStyle}>Set the product direction</h1>
        <p style={subheadlineStyle}>
          <b>Align your team around a unified product timeline.</b> Plan, manage,
          and track all product initiatives with Linear’s visual planning tools.
        </p>
        <img
          src={sectionImg}
          alt="Product direction timeline"
          style={imageStyle}
        />
      </div>
    </section>
  );
};

export default ProductDirectionSection;