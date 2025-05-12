import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const routeMessages = {
  '/': '> Welcome back, kingslayer254...',
  '/projects': '> Fetching deployed code...',
  '/contact': '> Connecting you to Polycarp...',
};


const AnimatedRoutes = ({ setLoading, setRouteMessage }) => {
  const location = useLocation();

useEffect(() => {
  const message = routeMessages[location.pathname] || '> Loading Polycarp.dev...';
  setRouteMessage(message);
  setLoading(true);

  const typingSpeed = 70; // match Loader.js speed
  const bufferTime = 600; // extra time after typing finishes
  const totalDuration = message.length * typingSpeed + bufferTime;

  const timeout = setTimeout(() => setLoading(false), totalDuration);

  return () => clearTimeout(timeout);
}, [location, setLoading, setRouteMessage]);


  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [routeMessage, setRouteMessage] = useState('> Loading Polycarp.dev...');

  return (
    <Router>
      <Navbar />
      <AnimatePresence mode="wait">
        {loading && <Loader message={routeMessage} />}
      </AnimatePresence>
      <AnimatedRoutes setLoading={setLoading} setRouteMessage={setRouteMessage} />
    </Router>
  );
};

export default App;
