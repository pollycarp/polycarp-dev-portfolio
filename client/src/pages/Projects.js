import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [projects, setProjects] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(true);

  // ✅ Define pinned repositories by name (GitHub repo names)
    const pinnedRepoNames = [
      "flask-file-share",
      "polycarp-dev-portfolio",
      "rust",
      "hms",
      "PrivacyLLM",
      "tracker-for-covid19"
    ];


  const techStacks = ["All", "React", "Flask", "Python", "API"];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await axios.get("https://api.github.com/users/pollycarp/repos?sort=updated");
        setProjects(res.data);
      } catch (err) {
        console.error("GitHub API error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  // Split pinned and extra projects
  const pinnedProjects = projects.filter((repo) => pinnedRepoNames.includes(repo.name));
  const extraProjects = projects.filter((repo) => !pinnedRepoNames.includes(repo.name));

  const applyFilter = (repos) =>
    filter === "All"
      ? repos
      : repos.filter((repo) =>
          repo.topics?.includes(filter.toLowerCase()) ||
          (repo.language && repo.language.toLowerCase() === filter.toLowerCase())
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

      {/* Filter Buttons */}
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

      {/* Project Cards Grid */}
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
        ) : (
          <>
            {applyFilter(pinnedProjects).map((repo) => (
              <ProjectCard
                key={repo.id}
                project={{
                  title: repo.name,
                  description: repo.description,
                  tech: [repo.language],
                  link: repo.html_url
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
                    link: repo.html_url
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
              border: 'none',
              color: 'white',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            {showMore ? 'Show Less' : 'Show More Projects'}
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default Projects;
