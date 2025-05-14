import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 50 }}
      transition={{ duration: 0.4 }}
      className="footer-container"
    >
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Polycarp | Built with <strong>React</strong> + <strong>Flask</strong></p>
        <div className="footer-links">
          <a href="https://github.com/pollycarp" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="mailto:markpollycarp@gmail.com">
            <FaEnvelope /> Email
          </a>
          <a href="https://twitter.com/mark_polycarp_" target="_blank" rel="noopener noreferrer">
            <FaTwitter /> Twitter
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
