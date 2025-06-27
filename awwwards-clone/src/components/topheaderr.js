import React, { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    
    const style = document.createElement('style');
    style.innerHTML = `
      .animate-scroll {
        white-space: nowrap;
        display: inline-block;
        animation: scroll-left 20s linear infinite;
      }

      @keyframes scroll-left {
        0% {
          transform: translateX(100%);
        }
        100% {
          transform: translateX(-100%);
        }
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div
      className="w-100 position-relative top-0 start-0 border-bottom py-2"
      style={{ backgroundColor: '#f8f8f8', zIndex: 1050 }}
    >
      <div className="overflow-hidden">
        <a
          href="#"
          className="animate-scroll text-dark fw-medium text-decoration-none"
        >
          The Creative Pass ☺ Watch All Courses For Just $12/month &nbsp; | &nbsp;
          The Creative Pass ☺ Watch All Courses For Just $12/month &nbsp; | &nbsp;
          The Creative Pass ☺ Watch All Courses For Just $12/month &nbsp; | &nbsp;
          The Creative Pass ☺ Watch All Courses For Just $12/month &nbsp; | &nbsp;
        </a>
      </div>
    </div>
  );
};

export default Header;
