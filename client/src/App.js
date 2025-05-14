import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';

const routeMessages = {
  '/': 'Stay Bold, Stay Bizarre, Stay Building!!',
  '/projects': '> Fetching Repos...',
  '/contact': '> Connecting you ...',
};

const AnimatedRoutes = ({ loading, setLoading, setRouteMessage }) => {
  const location = useLocation();

  useEffect(() => {
    const hasShownLoader = localStorage.getItem('hasShownLoader');

    if (!hasShownLoader) {
      const message =
        routeMessages[location.pathname] ||
        '"If at first, you do not succeed, call it version 1.0." ~ Khayri R.R. Woulfe';

      setRouteMessage(message);
      setLoading(true);

      const typingSpeed = 70;
      const bufferTime = 600;
      const totalDuration = message.length * typingSpeed + bufferTime;

      const timeout = setTimeout(() => {
        setLoading(false);
        localStorage.setItem('hasShownLoader', 'true');
      }, totalDuration);

      return () => clearTimeout(timeout);
    } else {
      setLoading(false); // Skip animation if already shown
    }
  }, [location, setLoading, setRouteMessage]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home loading={loading} />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [routeMessage, setRouteMessage] = useState('> Loading Polycarp.dev...');

  // ✅ Reset loader state on reload
  useEffect(() => {
    window.onbeforeunload = () => {
      localStorage.removeItem('hasShownLoader');
    };
  }, []);

  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />

        <AnimatePresence mode="wait">
          {loading && <Loader message={routeMessage} />}
        </AnimatePresence>

        <div style={{ flex: 1 }}>
          <AnimatedRoutes
            loading={loading}
            setLoading={setLoading}
            setRouteMessage={setRouteMessage}
          />
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
