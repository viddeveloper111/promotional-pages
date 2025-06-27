import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImpactSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sectionStyle = {
    position: 'relative',
    minHeight: '100vh',
    padding: '4rem 1rem',
    background: 'linear-gradient(90deg, #1a1124 0%, #0b1b22 100%)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    color: '#ffffff',
  };

  const background15MStyle = {
    fontSize: '20vw',
    fontWeight: 800,
    opacity: 0.05,
    color: '#ffffff',
    letterSpacing: '-0.05em',
    lineHeight: 1,
    margin: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    whiteSpace: 'nowrap',
  };

  const impactTextStyle = {
    position: 'relative',
    zIndex: 1,
    fontSize: '2rem',
    fontWeight: 700,
    maxWidth: '800px',
    margin: '0 auto',
    marginBottom: '80px',
  };

  const highlightStyle = {
    background: 'linear-gradient(90deg, #e4b34b, #e87b87)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const rowWrapperStyle = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    width: '100%',
    padding: '10px 0',
    marginBottom: '20px',
    position: 'relative',
  };

  const tagStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    margin: '0 10px',
    borderRadius: '10px',
    fontWeight: '500',
    color: 'white',
    whiteSpace: 'nowrap',
    cursor: 'default',
    transition: 'transform 0.2s ease',
  };

  const row1Tags = ['Product', 'People', 'Design', 'Sales', 'Finance', 'Customer Success'];
  const row2Tags = ['Engineering', 'Operations', 'Marketing', 'Leadership', 'Analytics', 'Growth'];

  const scrollSpeed = 0.3;

  const createLoopedRow = (tags, direction, gradient) => {
    const offset = (scrollY * scrollSpeed) % (tags.length * 180); // 180px approx width per tag
    const transformX = direction === 'right' ? offset : -offset;

    return (
      <div style={{ ...rowWrapperStyle }}>
        <div
          style={{
            transform: `translateX(${transformX}px)`,
            display: 'inline-flex',
            willChange: 'transform',
          }}
        >
          {[...tags, ...tags].map((tag, idx) => (
            <span
              key={`${direction}-${idx}`}
              style={{
                ...tagStyle,
                background: gradient,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section style={sectionStyle}>
      <div className="container position-relative">
        <h1 style={background15MStyle}>15M</h1>
        <h2 style={impactTextStyle}>
          Superhuman saves teams over <span style={highlightStyle}>15 million hours</span>{' '}
          every single year.
        </h2>

        {/* Infinite loop right */}
        {createLoopedRow(
          row1Tags,
          'right',
          'linear-gradient(to right, #41295a, #2F0743)'
        )}

        {/* Infinite loop left */}
        {createLoopedRow(
          row2Tags,
          'left',
          'linear-gradient(to right, #8e0e00, #1f1c18)'
        )}
      </div>
    </section>
  );
};

export default ImpactSection;
