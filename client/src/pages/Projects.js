import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import Container from '../components/Container';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('All');
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(true);

  const pinnedRepoNames = [
    'flask-file-share',
    'polycarp-dev-portfolio',
    'telco_churn_prediction',
    'console-grid-game',
    'PrivacyLLM',
    'Airline-Ticket-Reservation-System-Design'
  ];

  const techStacks = ['All', 'React', 'Flask', 'Python', 'Java', 'Javascript', 'API'];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await axios.get('https://api.github.com/users/pollycarp/repos?sort=updated');
        setProjects(res.data);
      } catch (err) {
        console.error('GitHub API error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const pinnedProjects = projects.filter((repo) => pinnedRepoNames.includes(repo.name));
  const extraProjects = projects.filter((repo) => !pinnedRepoNames.includes(repo.name));

  const applyFilter = (repos) =>
    filter === 'All'
      ? repos
      : repos.filter(
          (repo) =>
            repo.topics?.includes(filter.toLowerCase()) ||
            (repo.language && repo.language.toLowerCase() === filter.toLowerCase())
        );

  return (
    <motion.section
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      style={{
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
        padding: '2rem 0',
        boxSizing: 'border-box',
      }}
    >
      <Container>
        <h2 style={{ marginBottom: '1rem', textAlign: 'center', color: '#222' }}>Projects</h2>

        {/* Filter Buttons */}
        <motion.div
          style={{
            marginBottom: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.75rem',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {techStacks.map((stack) => (
            <motion.button
              key={stack}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(stack)}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: filter === stack ? '#00bfff' : '#e0e0e0',
                color: filter === stack ? '#fff' : '#333',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '0.9rem',
              }}
            >
              {stack}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Cards Grid */}
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {loading ? (
            <p>Loading projects...</p>
          ) : (
            <>
              {applyFilter(pinnedProjects).map((repo) => (
                <ProjectCard
                  key={repo.id}
                  project={{
                    title: repo.name,
                    description: repo.description,
                    tech: [repo.language],
                    link: repo.html_url,
                  }}
                />
              ))}

              {showMore &&
                applyFilter(extraProjects).map((repo) => (
                  <ProjectCard
                    key={repo.id}
                    project={{
                      title: repo.name,
                      description: repo.description,
                      tech: [repo.language],
                      link: repo.html_url,
                    }}
                  />
                ))}
            </>
          )}
        </motion.div>

        {/* Show More Button */}
        {!loading && extraProjects.length > 0 && (
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <button
              onClick={() => setShowMore(!showMore)}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#00bfff',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              {showMore ? 'Show Less' : 'Show More Projects'}
            </button>
          </div>
        )}
      </Container>
    </motion.section>
  );
};

export default Projects;
