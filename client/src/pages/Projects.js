import React, { useState } from 'react';
import projectsData from '../utils/projectsData';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const techStacks = ["All", "React", "Flask", "Python", "API"];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((project) => project.tech.includes(filter));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{ padding: '2rem' }}
    >
      <h2 style={{ marginBottom: '1rem' }}>Projects</h2>

      <motion.div style={{ marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap' }}>
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

      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
