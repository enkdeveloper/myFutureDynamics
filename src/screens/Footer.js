import React from 'react';
import './Footer.css'; 
import logo2 from '../img/2.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <div>
          <h3>CONTACT</h3>
          <h4>Phone</h4>
            <ul className='contact'>
              <li>+971 52 768 4867 (Dubai)</li>
              <li>+44 7444 545152 (London)</li>
            </ul>
          <h4>Mail</h4>
          <ul className='contact'>
              <li>mazhar@dynamicsstream.com</li>
          </ul>
        </div>
        <div>
          <h3>ADDRESS</h3>
          <p>1803 Metropolis Tower Business Bay Dubai</p>
          <p>Stembridge Road, SE20 London</p>
        </div>
        <div>
          <h3>EXPLORE</h3>
          <ul>
            <li className='explore-content'>TERM & CONDITIONS</li>
            <li className='explore-content'>HELP</li>
            <li className='explore-content'>WORK</li>
            <li className='explore-content'>OUR STORY</li>
            <li className='explore-content'>BLOG</li>
          </ul>
        </div>
      </div>
      <div className="footer-images">
        <img src={logo2} alt="logo" /> 
        <p>©2024 | Brand Of Dynamics Stream - Microsoft Gold Partners</p>
        <div className="social-icons">
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-instagram"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
