import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '1rem',
        backgroundColor: '#fff',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '180px',
      }}
    >
      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', wordBreak: 'break-word' }}>
          {project.title}
        </h3>
        <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '1rem' }}>
          {project.description || 'No description provided.'}
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '0.5rem',
          marginTop: 'auto',
        }}
      >
        <span
          style={{
            padding: '0.3rem 0.8rem',
            backgroundColor: getBadgeColor(project.tech[0]),
            color: '#fff',
            borderRadius: '16px',
            fontSize: '0.75rem',
            fontWeight: 'bold',
          }}
        >
          {project.tech[0] || 'N/A'}
        </span>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '0.85rem',
              color: '#00bfff',
              fontWeight: '500',
              textDecoration: 'none',
            }}
          >
            View on GitHub →
          </a>
        )}
      </div>
    </motion.div>
  );
};

// 🔧 Helper for language-based badge coloring
const getBadgeColor = (tech) => {
  switch ((tech || '').toLowerCase()) {
    case 'python': return '#3572A5';
    case 'javascript': return '#f0db4f';
    case 'html': return '#e44d26';
    case 'java': return '#b07219';
    case 'react': return '#61DBFB';
    default: return '#555';
  }
};

export default ProjectCard;
