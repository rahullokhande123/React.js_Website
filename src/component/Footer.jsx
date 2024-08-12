// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <h5>Company Info</h5>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Careers</p>
          </div>
          <div className="col-md-4">
            <h5>Services</h5>
            <p>Service 1</p>
            <p>Service 2</p>
            <p>Service 3</p>
          </div>
          <div className="col-md-4">
            <h5>Connect With Us</h5>
            <p>Follow us on social media:</p>
            <div className="social-links">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-lg-12 text-center">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
