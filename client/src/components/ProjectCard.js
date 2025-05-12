import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.5 }}
      className="project-card"
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '1.5rem',
        backgroundColor: '#fff',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <h4 className="mb-2 text-dark">{project.title}</h4>
        <p className="text-muted" style={{ fontSize: '0.95rem' }}>
          {project.description || 'No description provided.'}
        </p>
      </div>

      <div>
        {project.tech && project.tech.length > 0 && (
          <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
            <strong>Tech:</strong> {project.tech.join(', ')}
          </p>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: '0.75rem',
              color: '#00bfff',
              fontWeight: 'bold',
              textDecoration: 'none'
            }}
          >
            View on GitHub →
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
