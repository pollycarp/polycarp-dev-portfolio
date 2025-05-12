import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const typingSpeed = 70; // already fast; adjust if needed
const loop = false;     // keep as false for one-pass


const Loader = ({ message }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let i = 0;
    setDisplayedText('');
    const interval = setInterval(() => {
      setDisplayedText(message.slice(0, i));
      i++;
      if (i > message.length) {
        if (!loop) clearInterval(interval);
        else i = 0;
      }
    }, typingSpeed);
    return () => clearInterval(interval);
  }, [message]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#0d0d0d',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#00bfff',
        fontSize: '1.5rem',
        fontFamily: 'Courier New, monospace',
        zIndex: 9999,
        whiteSpace: 'pre'
      }}
    >
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: 'easeInOut' }}
      >
        |
      </motion.span>
    </motion.div>
  );
};

export default Loader;
