import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import profilePic from '../assets/profile.jpg';

const nameChars = ['P', 'o', 'l', 'y', 'c', 'a', 'r', 'p'];

const Home = ({ loading }) => {
  if (loading) return null; // 👈 this line hides content during loader

  return (
    <motion.section
      className="text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <div>
        <motion.img
          src={profilePic}
          alt="Polycarp"
          className="rounded-circle mb-4 shadow"
          style={{ width: '120px', height: '120px', objectFit: 'cover' }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        <h1 className="display-5 fw-bold">
          Hi, I'm{' '}
          <span className="text-info">
            {nameChars.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                style={{ display: 'inline-block' }}
              >
                {char}
              </motion.span>
            ))}
          </span>{' '}
          👨🏽‍💻
        </h1>

        <p className="lead mt-2 mb-4">
          <TypeAnimation
            sequence={[
              'Full-Stack Developer 👨‍💻', 2000,
              'Python Enthusiast 🐍', 2000,
              'API Builder 🔌', 2000,
              'Clean Code Advocate 🧼', 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            style={{ display: 'inline-block' }}
          />
          <motion.span
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            style={{ marginLeft: '2px', fontWeight: 'bold' }}
          >
            |
          </motion.span>
        </p>

        <div className="d-flex justify-content-center gap-3">
          <a href="/projects" className="btn btn-outline-light">View Projects</a>
          <a href="/contact" className="btn btn-info text-white">Contact Me</a>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
