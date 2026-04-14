import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src="./techbull_circle.png" alt="Tech Bull Logo" style={{ height: '36px', width: '36px', borderRadius: '50%', objectFit: 'cover' }} />
              <span>Tech Bull <span className="gradient-text">360</span></span>
            </a>
            <p className="footer-desc">
              Building the next generation of digital products with AI and human ingenuity.
            </p>
          </div>
          
          <div className="footer-links-wrapper">
            <div className="footer-links-group">
              <h4>Navigation</h4>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#services">Services</a>
              <a href="#projects">Work</a>
            </div>
            <div className="footer-links-group">
              <h4>Connect</h4>
              <a href="https://www.linkedin.com/in/udhaya-suriya-1a59a5230?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/suriya055" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://wa.me/919025980641" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a href="mailto:udhayasuriya035@gmail.com">Email</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AI Builder Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
