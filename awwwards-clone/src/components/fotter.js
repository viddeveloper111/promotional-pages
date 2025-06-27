import React from "react";

const Fotter = () => {
  return (
    <footer className="bg-light py-4 mt-5 border-top">
      <div className="container">
        
        <div className="mb-3">
          <a href="#" className="fw-bold fs-2 text-dark text-decoration-none">W.</a>
        </div>

        <div className="row row-cols-2 row-cols-md-4 g-2 mb-3">
          <div className="col"><a href="#" className="text-dark text-decoration-none">Websites</a></div>
          <div className="col"><a href="#" className="text-dark text-decoration-none">Academy</a></div>
          <div className="col"><a href="#" className="text-dark text-decoration-none">Directory</a></div>
          <div className="col"><a href="#" className="text-dark text-decoration-none">FAQs</a></div>

          <div className="col"><a href="#" className="text-dark text-decoration-none">Collections</a></div>
          <div className="col"><a href="#" className="text-dark text-decoration-none">Jobs</a></div>
          <div className="col"><a href="#" className="text-dark text-decoration-none">Conferences</a></div>
          <div className="col"><a href="#" className="text-dark text-decoration-none">About Us</a></div>

          <div className="col"><a href="#" className="text-dark text-decoration-none">Elements</a></div>
          <div className="col"><a href="#" className="text-dark text-decoration-none">Market</a></div>
          <div className="col"></div>
          <div className="col"><a href="#" className="text-dark text-decoration-none">Contact Us</a></div>
        </div>

       
        <div className="d-flex flex-wrap justify-content-between align-items-center small text-dark">
          <div className="mb-2 mb-md-0">
            <a href="#" className="text-dark text-decoration-none me-3">Cookies</a>
            <a href="#" className="text-dark text-decoration-none me-3">Policy</a>
            <a href="#" className="text-dark text-decoration-none me-3">Legal Terms</a>
            <a href="#" className="text-dark text-decoration-none me-3">Privacy Policy</a>
          </div>

          <div className="mb-2 mb-md-0">
            <span className="fw-semibold me-2">Connect:</span>
            <a href="#" className="text-dark text-decoration-none me-2">Instagram</a>
            <a href="#" className="text-dark text-decoration-none me-2">LinkedIn</a>
            <a href="#" className="text-dark text-decoration-none me-2">Twitter</a>
            <a href="#" className="text-dark text-decoration-none me-2">Facebook</a>
            <a href="#" className="text-dark text-decoration-none me-2">YouTube</a>
            <a href="#" className="text-dark text-decoration-none">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Fotter;
