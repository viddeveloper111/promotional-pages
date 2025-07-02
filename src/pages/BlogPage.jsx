import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AppNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import MoreNewsSection from '../components/MoreNewsSection';

import s10_1 from '../assets/S10_2.avif';
import s10_2 from '../assets/S10_1.avif';
import s10_3 from '../assets/S10_3.avif';
import s10_4 from '../assets/S10_4.avif';
import s10_5 from '../assets/S10_5.avif';
import authorIcon from '../assets/S10_6.avif';

const BlogPage = () => {
  const blogPosts = [
    {
      image: s10_1,
      category: 'Company Building',
      title: 'Building our way: announcing our Series C',
      authorIcon: authorIcon,
      featured: true,
    },
    {
      image: s10_2,
      category: 'Craft',
      title: 'Why is quality so rare?',
      authorIcon: authorIcon,
      featured: true,
    },
    {
      image: s10_3,
      category: 'Practices for product building',
      title: 'Building what customers need, not just what they ask for',
      authorIcon: authorIcon,
    },
    {
      image: s10_4,
      category: 'Company Building',
      title: 'The profitable startup',
      authorIcon: authorIcon,
    },
    {
      image: s10_5,
      category: 'Craft',
      title: 'Design for the AI age',
      authorIcon: authorIcon,
    },
  ];

  const featuredPosts = blogPosts.filter(p => p.featured);
  const otherPosts = blogPosts.filter(p => !p.featured);

  const pageStyle = {
    backgroundColor: '#000',
    color: '#fff',
    fontFamily: 'Inter, system-ui, sans-serif',
  };

  const headerStyle = {
    padding: '120px 0 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const h1Style = {
    fontSize: '24px',
    fontWeight: '590',
    letterSpacing: '-0.01em',
  };

  const rssIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 11a9 9 0 0 1 9 9" stroke="#8A8A8A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 4a16 16 0 0 1 16 16" stroke="#8A8A8A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="5" cy="19" r="1.5" fill="#8A8A8A"/>
    </svg>
  );

  const blogGridStyle = {
    paddingBottom: '120px',
  };

  const blogCardStyle = {
    backgroundColor: '#000',
    border: '1px solid #222',
    borderRadius: '12px',
    color: '#fff',
    padding: '12px',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  };

  const featuredCardStyle = {
    ...blogCardStyle,
    width: '500px',
    height: '391px',
  };

  const otherCardStyle = {
    ...blogCardStyle,
    width: '326px',
    height: '312px',
  };

  const cardImgStyle = {
    borderRadius: '8px',
    marginBottom: '16px',
    objectFit: 'cover',
    width: '100%',
  };

  const cardBodyStyle = {
    padding: '0',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  };

  const cardTitleStyle = {
    fontSize: '1.1rem',
    fontWeight: '600',
    lineHeight: '1.4',
    color: '#fff',
    marginTop: 'auto',
  };
  
  const featuredCardTitleStyle = {
    fontSize: '1.3rem',
    fontWeight: '600',
    lineHeight: '1.4',
    color: '#fff',
    marginTop: 'auto',
  };

  const cardMetaContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px',
  };

  const authorIconStyle = {
    width: '22px',
    height: '22px',
    borderRadius: '50%',
    marginRight: '10px',
  };

  const cardCategoryStyle = {
    fontSize: '0.85rem',
    color: '#888',
    margin: 0,
  };

  return (
    <div style={pageStyle}>
      <AppNavbar />
      <Container>
        <Row className="justify-content-center">
          <Col md={9}>
            <Row style={headerStyle}>
              <Col>
                <h1 style={h1Style}>Blog</h1>
              </Col>
              <Col className="d-flex justify-content-end">
                {rssIcon}
              </Col>
            </Row>
          </Col>
        </Row>
        
        <Row className="mb-5 justify-content-center g-4">
          {featuredPosts.map((post, index) => (
            <Col md="auto" key={index}>
              <Card style={featuredCardStyle}>
                <Card.Img variant="top" src={post.image} style={{...cardImgStyle, height: '250px'}} />
                <Card.Body style={cardBodyStyle}>
                  <div style={cardMetaContainerStyle}>
                    <img src={post.authorIcon} alt="author" style={authorIconStyle} />
                    <p style={cardCategoryStyle}>{post.category}</p>
                  </div>
                  <Card.Title style={featuredCardTitleStyle}>{post.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row style={blogGridStyle} className="justify-content-center g-4">
          {otherPosts.map((post, index) => (
            <Col md="auto" key={index}>
              <Card style={otherCardStyle}>
                <Card.Img variant="top" src={post.image} style={{...cardImgStyle, height: '150px'}} />
                <Card.Body style={cardBodyStyle}>
                  <div style={cardMetaContainerStyle}>
                    <img src={post.authorIcon} alt="author" style={authorIconStyle} />
                    <p style={cardCategoryStyle}>{post.category}</p>
                  </div>
                  <Card.Title style={cardTitleStyle}>{post.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="justify-content-center">
          <Col md={9}>
            <MoreNewsSection />
          </Col>
        </Row>

      </Container>
      <Footer />
    </div>
  );
};

export default BlogPage;
