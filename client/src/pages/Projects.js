import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const techStacks = ["All", "React", "Flask", "Python", "API"];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await axios.get("https://api.github.com/users/pollycarp/repos?sort=updated");
        setProjects(res.data);
      } catch (err) {
        console.error("Error fetching repos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) =>
          project.topics?.includes(filter.toLowerCase()) || // if using GitHub topics
          (project.language && project.language.toLowerCase() === filter.toLowerCase())
        );

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      style={{ padding: '2rem' }}
    >
      <h2 style={{ marginBottom: '1rem' }}>Projects</h2>

      {/* Filters */}
      <motion.div
        style={{ marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {techStacks.map((stack) => (
          <motion.button
            key={stack}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(stack)}
            style={{
              marginRight: '1rem',
              marginBottom: '0.5rem',
              padding: '0.5rem 1rem',
              backgroundColor: filter === stack ? '#00bfff' : '#f0f0f0',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {stack}
          </motion.button>
        ))}
      </motion.div>

      {/* Project Cards */}
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}
      >
        {loading ? (
          <p>Loading projects...</p>
        ) : filteredProjects.length === 0 ? (
          <p>No projects match this filter.</p>
        ) : (
          filteredProjects.map((repo) => (
            <ProjectCard
              key={repo.id}
              project={{
                title: repo.name,
                description: repo.description,
                tech: [repo.language],
                link: repo.html_url
              }}
            />
          ))
        )}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
