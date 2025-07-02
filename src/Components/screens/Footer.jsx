import React from 'react';
import '../style/Footer.css'; // Ensure this file exists

function Footer() {
  return (
    <footer className="footer">
      <div className="container py-4">
        <div className="row">
          {/* Online Shopping */}
          <div className="col-6 col-md-3 mb-3">
            <h6>ONLINE SHOPPING</h6>
            <ul className="footer-list">
              <li><a href="#">Men</a></li>
              <li><a href="#">Women</a></li>
              <li><a href="#">Kids</a></li>
              <li><a href="#">Home</a></li>
              <li><a href="#">Beauty</a></li>
              <li><a href="#">Genz</a></li>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Myntra Insider</a></li>
            </ul>

            <h6 className="mt-3">USEFUL LINKS</h6>
            <ul className="footer-list">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Site Map</a></li>
              <li><a href="#">Corporate Information</a></li>
              <li><a href="#">Whitehat</a></li>
              <li><a href="#">Cleartrip</a></li>
              <li><a href="#">Myntra Global</a></li>
            </ul>
          </div>

          {/* Customer Policies */}
          <div className="col-6 col-md-3 mb-3">
            <h6>CUSTOMER POLICIES</h6>
            <ul className="footer-list">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">T&C</a></li>
              <li><a href="#">Terms Of Use</a></li>
              <li><a href="#">Track Orders</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Cancellation</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Grievance Redressal</a></li>
            </ul>
          </div>

          {/* App & Social Icons */}
          <div className="col-12 col-md-3 mb-3">
            <h6>EXPERIENCE MYNTRA APP ON MOBILE</h6>
            <div className="d-flex gap-2">
              <img src="/images/Icons/playstore.png" alt="Play Store" className="store-icon" />
              <img src="/images/Icons/appstore.png" alt="App Store" className="store-icon" />
            </div>
            <h6 className="mt-4">KEEP IN TOUCH</h6>
            <div className="social-icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>

          {/* Guarantee & Return */}
          <div className="col-12 col-md-3 mb-3">
            <div className="footer-info">
              <img src="/images/Icons/original.png" alt="original" className="info-icon" />
              <p><strong>100% ORIGINAL</strong> guarantee for all products at myntra.com</p>
            </div>
            <div className="footer-info">
              <img src="/images/Icons/return.png" alt="return" className="info-icon" />
              <p><strong>Return within 14 days</strong> of receiving your order</p>
            </div>
          </div>
        </div>

        <hr />
        <p className="text-center text-muted mb-0">© 2025 www.myntra.com. All rights reserved. A Flipkart company</p>
      </div>
    </footer>
  );
}

export default Footer;
