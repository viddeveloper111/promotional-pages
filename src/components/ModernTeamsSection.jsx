import React from "react";
import { Row, Col } from "react-bootstrap";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";

const cards = [
  {
    img: img1,
    title: "Purpose-built for product development",
  },
  {
    img: img2,
    title: "Designed to move fast",
  },
  {
    img: img3,
    title: "Crafted to perfection",
  },
];

const sectionStyle = {
  background: "#000",
  padding: "96px 0",
  fontFamily: 'Inter, system-ui, sans-serif',
};
const containerStyle = {
  maxWidth: 1100,
  margin: "0 auto",
  padding: "0 32px",
};
const headlineStyle = {
  color: "#fff",
  fontWeight: 600,
  fontSize: 56,
  lineHeight: 1.1,
  marginBottom: 0,
  letterSpacing: "-0.03em",
};
const subheadlineStyle = {
  color: "#b0b0b0",
  fontWeight: 400,
  fontSize: 16,
  lineHeight: 1.5,
  maxWidth: 420,
};
const cardStyle = {
  background: "#0e0e0e",
  borderRadius: "24px",
  border: "1px solid #222",
  transition: "background 0.15s ease-in-out",
  minHeight: 300,
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: 24,
};
const cardHoverStyle = {
  background: "#1a1a1a",
};

const ModernTeamsSection = () => {
  const [hovered, setHovered] = React.useState(-1);

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <Row className="align-items-center" style={{ marginBottom: 64 }}>
          <Col md={6}>
            <h2 style={headlineStyle}>
              Made for modern<br />product teams
            </h2>
          </Col>
          <Col md={6}>
            <p style={subheadlineStyle}>
              Linear is shaped by the practices and principles that distinguish world-class product teams from the rest: relentless focus, fast execution, and a commitment to the quality of craft.{" "}
              <a href="/" style={{ color: "#fff", textDecoration: 'none' }}>Make the switch &gt;</a>
            </p>
          </Col>
        </Row>
        <Row className="g-4">
          {cards.map((card, idx) => (
            <Col key={idx} xs={12} md={4}>
              <div
                style={{ ...cardStyle, ...(hovered === idx ? cardHoverStyle : {}) }}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(-1)}
              >
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                  <img
                    src={card.img}
                    alt={card.title}
                    style={{
                      maxWidth: '100%',
                      height: 120,
                      objectFit: 'contain',
                      opacity: 0.7,
                    }}
                  />
                </div>
                <div style={{
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: 18,
                }}>
                  {card.title}
                </div>
                <div
                  style={{
                    position: "absolute",
                    right: 24,
                    bottom: 24,
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid #333',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 16,
                  }}
                >
                  +
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default ModernTeamsSection;