import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white px-4 py-3 border-bottom">
      <div className="container-fluid d-flex justify-content-between align-items-center">

      
        <a href="#" className="navbar-brand fw-bold fs-3 text-dark d-flex align-items-center">
          <span className="logo-letter">W</span><span className="logo-dot">.</span>
        </a>

        <div className="d-none d-lg-flex align-items-center gap-3 ms-3">
          <a href="#" className="text-dark text-decoration-none fw-medium">Explore</a>
          <a href="#" className="text-dark text-decoration-none fw-medium">Directory</a>
          <a href="#" className="text-dark text-decoration-none fw-medium">
            Academy <span className="badge bg-dark text-white ms-1">NEW</span>
          </a>
          <a href="#" className="text-dark text-decoration-none fw-medium">Jobs</a>
          <a href="#" className="text-dark text-decoration-none fw-medium">Market</a>
        </div>

        
        <div className="search-bar mx-4 d-none d-md-block">
          <input
            type="text"
            className="form-control rounded-pill px-4"
            placeholder="Search by Websites"
          />
        </div>

        
        <div className="d-flex align-items-center gap-2">
          <a href="#" className="text-dark text-decoration-none fw-medium">Log in</a>
          <a href="#" className="text-dark text-decoration-none fw-medium">Sign Up</a>
          <button className="btn btn-dark rounded-pill px-3">Be Pro</button>
          <button className="btn btn-outline-dark rounded-pill px-3">Submit Website</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
