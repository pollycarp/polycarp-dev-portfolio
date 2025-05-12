import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
      style={{ padding: '2rem' }}
    >
      <h1 style={{ fontSize: '3rem' }}>Hello, I'm Polycarp 👨🏽‍💻</h1>
      <p>A full-stack developer building interactive web applications.</p>
    </motion.div>
  );
};

export default Home;
