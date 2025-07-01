import React, { useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import './ShopByIconsSection.css';

const ShopByIconsSection = () => {
  const cardsData = [
    { id: 1, name: 'VOMERO 18', imageUrl: 'https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_300,c_limit/0ce83fe0-a838-4a6d-88c0-b038b1f3adbd/nike-just-do-it.png' },
    { id: 2, name: 'V2K', imageUrl: '/v2k.png' },
    { id: 3, name: 'PEGASUS 41', imageUrl: '/pegasus.png' },
    { id: 4, name: 'AIR MAX DN', imageUrl: '/courtv.png' },
    { id: 5, name: 'METCON 9', imageUrl: 'https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_300,c_limit/1892aab6-5b81-422f-b7e5-d5072294a299/nike-just-do-it.png' },
    { id: 6, name: 'BLAZER MID', imageUrl: 'https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_300,c_limit/2ea8fe0a-b92c-4eb0-8ae5-b80ffc95a7d2/nike-just-do-it.png' },
    { id: 7, name: 'DUNK LOW', imageUrl: '/dunk.png' },
    { id: 8, name: 'AIR FORCE 1', imageUrl: '/airforce.png' },
    { id: 9, name: 'JORDAN 1', imageUrl: '/uplift.png' },
    { id: 10, name: 'CORTEZ', imageUrl: '/cortez.png' },
  ];

  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <div className="shop-by-icons-section py-5">
      <Container fluid className="px-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="section-title">Shop by Icons</h2>
          <div className="scroll-buttons">
            <Button variant="light" className="rounded-circle me-2" onClick={() => scroll(-300)}>
              <BsChevronLeft size={20} />
            </Button>
            <Button variant="light" className="rounded-circle" onClick={() => scroll(300)}>
              <BsChevronRight size={20} />
            </Button>
          </div>
        </div>

        <div className="cards-scroll-container" ref={scrollRef}>
          {cardsData.map(card => (
            <div key={card.id} className="shop-icon-card">
              <img src={card.imageUrl} alt={card.name} className="img-fluid" />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ShopByIconsSection;