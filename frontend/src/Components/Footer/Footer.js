import React from 'react';
import './Footer.css'; // Import the related CSS for styling

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="contact-us">Questions? <a href="#">Contact us.</a></p>
      <div className="footer-links">
        <div className="footer-column">
          <a href="#">FAQ</a>
          <a href="#">Investor Relations</a>
          <a href="#">Privacy</a>
          <a href="#">Speed Test</a>
        </div>
        <div className="footer-column">
          <a href="#">Help Center</a>
          <a href="#">Jobs</a>
          <a href="#">Cookie Preferences</a>
          <a href="#">Legal Notices</a>
        </div>
        <div className="footer-column">
          <a href="#">Account</a>
          <a href="#">Ways to Watch</a>
          <a href="#">Corporate Information</a>
          <a href="#">Only on Netflix</a>
        </div>
        <div className="footer-column">
          <a href="#">Media Center</a>
          <a href="#">Terms of Use</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
      <div className="footer-bottom">
        <button className="language-select">English</button>
        <p>Netflix Egypt</p>
      </div>
    </div>
  );
}

export default Footer;
