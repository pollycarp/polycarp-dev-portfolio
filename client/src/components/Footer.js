import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-dark text-white text-center p-3 w-100"
      style={{
        position: 'sticky',
        bottom: 0,
        zIndex: 1000,
        boxShadow: '0 -2px 6px rgba(0,0,0,0.1)',
      }}
    >
      <div className="container">
        <p className="mb-1">&copy; {new Date().getFullYear()} Polycarp | Built with React + Flask</p>
        <div>
          <a
            href="https://github.com/pollycarp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white me-3"
          >
            GitHub
          </a>
          <a
            href="mailto:markpollycarp@gmail.com"
            className="text-white me-3"
          >
            Email
          </a>
          <a
            href="https://twitter.com/mark_polycarp_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            Twitter
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
