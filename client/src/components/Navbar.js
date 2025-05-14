import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <div className="navbar-container">
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <h2 className="logo">Polycarp</h2>
        </Link>

        <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <Link
              to="/"
              onClick={closeMenu}
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={closeMenu}
              className={location.pathname === '/projects' ? 'active' : ''}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={closeMenu}
              className={location.pathname === '/about' ? 'active' : ''}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={closeMenu}
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
