import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // (create this for custom styles)

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Polycarp</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
