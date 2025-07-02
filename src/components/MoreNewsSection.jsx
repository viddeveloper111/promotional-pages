import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import authorIcon from '../assets/S10_6.avif';

const MoreNewsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const newsItems = [
    {
      title: 'Why and how Scale migrated to Linear',
      category: 'Linear community',
      date: 'November 15, 2024',
      icons: [authorIcon],
    },
    {
      title: 'Simplifying support at scale: How Pleo uses Linear Asks',
      category: 'Linear community',
      date: 'November 11, 2024',
      icons: [authorIcon, authorIcon],
    },
    {
      title: 'How we built multi-region support for Linear',
      category: 'Craft',
      date: 'May 23, 2024',
      icons: [authorIcon, authorIcon, authorIcon],
    },
    {
      title: 'How we redesigned the Linear UI (part II)',
      category: 'Craft',
      date: 'March 28, 2024',
      icons: [authorIcon, authorIcon, authorIcon, authorIcon],
    },
    {
      title: 'A design reset (part I)',
      category: 'Craft',
      date: 'March 27, 2024',
      icons: [authorIcon],
    },
    {
      title: 'Rethinking the startup MVP: Building a competitive product',
      category: 'Practices for product building',
      date: 'February 28, 2024',
      icons: [authorIcon],
    },
    {
        title: 'Descript’s internal guide for using Linear as your work operating system',
        category: 'Linear community',
        date: 'January 31, 2024',
        icons: [authorIcon],
      },
      {
        title: 'Post mortem on Linear incident from Jan 24th, 2024',
        category: 'News',
        date: 'January 30, 2024',
        icons: [authorIcon, authorIcon, authorIcon],
      },
      {
        title: 'Why and how we do work trials at Linear',
        category: 'Company Building',
        date: 'December 13, 2023',
        icons: [authorIcon, authorIcon, authorIcon, authorIcon, authorIcon],
      },
      {
        title: 'Using AI to detect similar issues',
        category: 'Craft',
        date: 'November 29, 2023',
        icons: [authorIcon],
      },
      {
        title: 'Planning for unplanned work',
        category: 'Practices for product building',
        date: 'November 16, 2023',
        icons: [authorIcon, authorIcon],
      },
      {
        title: 'How we run projects at Linear',
        category: 'How Linear uses Linear',
        date: 'October 05, 2023',
        icons: [authorIcon, authorIcon, authorIcon],
      },
      {
        title: 'Linear raises $35M Series B led by Accel',
        category: 'Company Building',
        date: 'September 14, 2023',
        icons: [authorIcon],
      },
      {
        title: 'How we think about customer experience at Linear',
        category: 'How Linear uses Linear',
        date: 'September 07, 2023',
        icons: [authorIcon, authorIcon, authorIcon, authorIcon],
      },
      {
        title: 'Scaling the Linear Sync Engine',
        category: 'Craft',
        date: 'June 29, 2023',
        icons: [authorIcon],
      },
      {
        title: 'Welcoming Cristina Cordova to Linear',
        category: 'News',
        date: 'May 23, 2023',
        icons: [authorIcon],
      },
      {
        title: 'How we built Project Updates',
        category: 'Craft',
        date: 'August 10, 2022',
        icons: [authorIcon],
      },
      {
        title: 'Settings are not a design failure',
        category: 'Craft',
        date: 'February 02, 2022',
        icons: [authorIcon],
      },
      {
        title: 'Linear – 2021 Wrapped',
        category: 'News',
        date: 'December 17, 2021',
        icons: [authorIcon],
      },
      {
        title: 'Fast growing startups are built on Linear',
        category: 'Company Building',
        date: 'June 29, 2021',
        icons: [authorIcon, authorIcon],
      },
      {
        title: 'Building at the early stage',
        category: 'Company Building',
        date: 'January 21, 2021',
        icons: [authorIcon],
      },
      {
        title: 'Linear raises $13M in Series A funding from Sequoia Capital',
        category: 'Company Building',
        date: 'December 08, 2020',
        icons: [authorIcon],
      },
      {
        title: 'Invisible details - Building contextual menus',
        category: 'Craft',
        date: 'September 17, 2020',
        icons: [authorIcon],
      },
      {
        title: 'Practices for Building — Linear is now open for all',
        category: 'News',
        date: 'June 30, 2020',
        icons: [authorIcon, authorIcon],
      },
      {
        title: 'Startups, Write Changelogs',
        category: 'Company Building',
        date: 'May 18, 2020',
        icons: [authorIcon],
      },
      {
        title: "Linear’s Next Chapter: Announcing our $4.2M Seed Round",
        category: 'News',
        date: 'November 21, 2019',
        icons: [authorIcon],
      },
  ];

  const sectionStyle = {
    paddingTop: '40px',
    borderTop: '1px solid #222',
    marginTop: '80px',
  };

  const h2Style = {
    fontSize: '14px',
    color: '#888',
    marginBottom: '20px',
    fontWeight: 400,
  };

  const getNewsItemStyle = (index) => ({
    padding: '16px 8px',
    cursor: 'pointer',
    backgroundColor: hoveredIndex === index ? '#1a1a1a' : 'transparent',
    transition: 'background-color 0.2s ease-in-out',
  });

  const titleStyle = {
    fontSize: '16px',
    fontWeight: '500',
    color: '#e1e1e1',
  };

  const categoryStyle = {
    fontSize: '14px',
    color: '#888',
  };

  const dateStyle = {
    fontSize: '14px',
    color: '#888',
  };

  const iconContainerStyle = {
    display: 'flex',
  };

  const iconStyle = {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    marginLeft: '-8px',
    border: '2px solid #000',
  };

  return (
    <div style={sectionStyle}>
      <h2 style={h2Style}>More news</h2>
      {newsItems.map((item, index) => (
        <Row 
          key={index} 
          style={getNewsItemStyle(index)}
          className="align-items-center"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Col md={6}>
            <p style={titleStyle} className="m-0">{item.title}</p>
          </Col>
          <Col md={2} className="d-none d-md-block">
            <p style={categoryStyle} className="m-0">{item.category}</p>
          </Col>
          <Col md={2} className="d-none d-md-block">
            <p style={dateStyle} className="m-0">{item.date}</p>
          </Col>
          <Col md={2} xs={12} className="d-flex justify-content-end">
            <div style={iconContainerStyle}>
              {item.icons.map((icon, i) => (
                <img key={i} src={icon} alt="author" style={iconStyle} />
              ))}
            </div>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default MoreNewsSection;
