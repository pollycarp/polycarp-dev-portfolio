import React from 'react';
import { motion } from 'framer-motion';

const badgeColors = {
  JavaScript: '#f7df1e',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Rust: '#dea584',
  default: '#6c757d'
};

const ProjectCard = ({ project }) => {
  const language = project.tech[0] || 'Other';
  const badgeColor = badgeColors[language] || badgeColors.default;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
      style={{
        borderRadius: '10px',
        backgroundColor: '#fff',
        padding: '1.5rem',
        boxShadow: '0 8px 20px rgba(0,0,0,0.05)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <div>
        <h4 className="mb-2 text-dark">{project.title}</h4>
        <p className="text-muted" style={{ fontSize: '0.95rem' }}>
          {project.description || 'No description provided.'}
        </p>
      </div>

      <div style={{ marginTop: '1rem' }}>
        {/* Tech Badge */}
        <span
          style={{
            backgroundColor: badgeColor,
            color: '#000',
            fontWeight: 'bold',
            fontSize: '0.8rem',
            padding: '0.2rem 0.6rem',
            borderRadius: '20px',
            marginRight: '0.5rem'
          }}
        >
          {language}
        </span>

        {/* GitHub Link */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: '0.5rem',
              fontSize: '0.85rem',
              fontWeight: '500',
              color: '#00bfff',
              textDecoration: 'none'
            }}
            onMouseOver={(e) => (e.target.style.textDecoration = 'underline')}
            onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
          >
            View on GitHub →
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
