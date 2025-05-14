import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const typingSpeed = 70;
const loop = false;

const Loader = ({ message }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const hasShownLoader = localStorage.getItem('hasShownLoader');

    if (!hasShownLoader) {
      localStorage.setItem('hasShownLoader', 'true');
      setShouldRender(true);
    } else {
      setShouldRender(false); // skip animation
    }
  }, []);

  useEffect(() => {
    if (!shouldRender) return;

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
  }, [message, shouldRender]);

  if (!shouldRender) return null;

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
        padding: '2rem',
        textAlign: 'center',
        color: '#00bfff',
        fontSize: 'clamp(1rem, 4vw, 1.5rem)',
        fontFamily: 'Courier New, monospace',
        zIndex: 9999,
        whiteSpace: 'pre-wrap', // wrap long messages
        wordWrap: 'break-word',
        overflowWrap: 'break-word'
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
