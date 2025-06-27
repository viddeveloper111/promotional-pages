import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = () => {
  const tagList1 = [
    'Security', 'Strategy', 'Product', 'People', 'Design', 'Sales', 'Finance', 'Customer Success'
  ];

  const tagList2 = [
    'Business Development', 'Analytics', 'Engineering', 'Operations', 'Marketing', 'Leadership'
  ];

  const containerStyle = {
    background: 'linear-gradient(to bottom, #000000, #190924)',
    color: 'white',
    minHeight: '100vh',
    padding: '60px 20px',
    textAlign: 'center',
    overflow: 'hidden',
  };

  const tagStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    margin: '0 10px',
    borderRadius: '10px',
    fontWeight: '500',
    color: 'white',
    whiteSpace: 'nowrap',
  };

  const scrollWrapper = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    marginTop: '30px',
    position: 'relative',
    width: '100%',
  };

  const scrollingRow = (direction) => ({
    display: 'inline-flex',
    animation: `${direction === 'left' ? 'scrollLeft' : 'scrollRight'} 30s linear infinite`,
  });

  return (
    <div style={containerStyle}>
      <style>
        {`
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes scrollRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}
      </style>

      <h1>
        Email is the <span style={{ color: '#fca17d' }}>biggest problem</span><br />
        <span style={{ color: '#d776f9' }}>hiding in plain sight</span>
      </h1>

      <p style={{ marginTop: '20px', fontSize: '1.2rem' }}>
        We all spend hours on email. But we often reply late, and sometimes don't even reply.
        <br />
        We then end up losing deals, blocking our teams, and missing our goals.
      </p>

      <p style={{ marginTop: '20px', fontSize: '1.1rem', color: '#ccc' }}>
        It's not anybody's fault. Email itself has not changed in decades.
        <br />
        With Superhuman, this all changes.
      </p>

      {/* Rightward Scroll (Row 1) */}
      <div style={scrollWrapper}>
        <div style={scrollingRow('right')}>
          {[...tagList1, ...tagList1].map((tag, idx) => (
            <span
              key={`r1-${idx}`}
              style={{
                ...tagStyle,
                background: 'linear-gradient(90deg, #41295a 0%, #2F0743 100%)'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Leftward Scroll (Row 2) */}
      <div style={scrollWrapper}>
        <div style={scrollingRow('left')}>
          {[...tagList2, ...tagList2].map((tag, idx) => (
            <span
              key={`r2-${idx}`}
              style={{
                ...tagStyle,
                background: 'linear-gradient(90deg, #8e0e00 0%, #1f1c18 100%)'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
