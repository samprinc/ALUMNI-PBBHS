import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/Alumni1.jpeg" alt="Paul Boit Logo" className="logo-img" />
          <span className="logo-text">Pbhs Alumni</span>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)} className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
          <li><Link to="/Register" onClick={() => setMenuOpen(false)} className={location.pathname === "/join" ? "active" : ""}>Join</Link></li>
          <li><Link to="/events" onClick={() => setMenuOpen(false)} className={location.pathname === "/events" ? "active" : ""}>Events</Link></li>
          <li><Link to="/alumni" onClick={() => setMenuOpen(false)} className={location.pathname === "/alumni" ? "active" : ""}>Alumni</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)} className={location.pathname === "/contact" ? "active" : ""}>Contact</Link></li>
          <li><Link to="/dashboard" onClick={() => setMenuOpen(false)} className={location.pathname.startsWith("/dashboard") ? "active" : ""}>Members</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
