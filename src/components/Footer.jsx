import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand/Logo Section */}
        <div className="footer-section">
          <h2 className="logo-text">Paul Boit Alumni</h2>
          <p>Fidelite en am • Since 1987</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/library">Library</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p><FaEnvelope /> alumni@paulboit.ac.ke</p>
          <p><FaPhone /> +254 712 345678</p>

          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Paul Boit Alumni. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
