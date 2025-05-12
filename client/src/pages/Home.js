import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      className="hero"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{ padding: '2rem', textAlign: 'center' }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Hello, I'm Polycarp 👨🏽‍💻</h1>
      <p style={{ fontSize: '1.25rem', color: '#555' }}>
        A full-stack developer building modern, interactive web applications.
      </p>
    </motion.div>
  );
};

export default Home;
