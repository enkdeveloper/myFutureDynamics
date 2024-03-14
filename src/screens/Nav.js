import React, { useState } from 'react';
import './Nav.css';
import logo from '../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (event) => {
    if (event.target.tagName === 'A') {
      event.preventDefault();
      const href = event.target.getAttribute('href');
      const targetElement = document.getElementById(href.substring(1));
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsOpen(!isOpen);
    }
  };


  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menu" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </div>
      <ul className={`desktop-menu ${isOpen ? 'open' : ''}`} onClick={handleClick}>
        <li>HOME</li>
        <li>ABOUT US</li>
        <li>SERVICES</li>
        <li>PORTFOLIO</li>
        <li>CONTACT</li>
      </ul>
      {isOpen && (
        <div className="mobile-info" onClick={handleClick}>
          <ul className='mobile-options'>
            <li>HOME <i className="fas fa-chevron-right"></i></li>
            <li>ABOUT US <i className="fas fa-chevron-right"></i></li>
            <li>SERVICES <i className="fas fa-chevron-right"></i></li>
            <li>PORTFOLIO <i className="fas fa-chevron-right"></i></li>
            <li>CONTACT <i className="fas fa-chevron-right"></i></li>
          </ul>
          <div className="additional-info">
            <p className='additional-content'>The Future Dynamics ©2024 | Brand Of Dynamics Stream - Microsoft Gold Partners</p>
            <div className="social-icons">
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
