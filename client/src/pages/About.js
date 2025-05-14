import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile.jpg';
import { FaGithub } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import ReactToPrint from 'react-to-print';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFResume from '../components/PDFResume';

const skills = [
  'React.js', 'Flask', 'Node.js', 'Python', 'JavaScript',
  'PostgreSQL', 'MongoDB', 'MySQL', 'Git', 'REST APIs',
  'Excel & Pandas', 'Tailwind CSS', 'Figma', 'Agile'
];

const timeline = [
  {
    title: 'Full-Stack Developer',
    subtitle: 'Freelance & Open Source',
    date: '2023 – Present',
    description: 'Built secure web platforms, APIs, and dashboards using Flask, React.js, PostgreSQL, and cloud-based tools.'
  },
  {
    title: 'Software Engineering Intern',
    subtitle: 'Ministry of ICT, Kenya',
    date: '2023',
    description: 'Contributed to the development of the Ajira Web Application using Python and Flask. Worked on authentication and dashboard modules.'
  },
  {
    title: 'ALX Software Engineering Program',
    subtitle: 'ALX Africa',
    date: '2023',
    description: 'Completed an intensive software engineering program focused on full-stack development, Agile methodologies, CI/CD pipelines, and DevOps practices.'
  },
  {
    title: 'NEAR Blockchain Developer',
    subtitle: 'Open Web Community',
    date: '2022',
    description: 'Built my first Rust-based smart contract and deployed a basic DApp as part of NEAR’s blockchain learning cohort.'
  },
  {
    title: 'Computer Science Graduate',
    subtitle: 'Maseno University, Kenya',
    date: '2018 – 2022',
    description: 'Focused on web technologies, backend systems, and database design with projects in AI and software engineering.'
  }
];

const projects = {
  Flask: [
    {
      title: 'flask-file-share',
      description: 'A secure file-sharing platform built using Flask, React, and Google Auth. Supports download tracking, admin controls, and password-protected access.',
      link: 'https://github.com/pollycarp/flask-file-share'
    },
    {
      title: 'telco_churn_prediction',
      description: 'A full-stack machine learning app using Flask, scikit-learn, and pandas. Supports real-time churn prediction, CSV upload, data visualization, and chart rendering via Chart.js.',
      link: 'https://github.com/pollycarp/telco_churn_prediction'
    }
  ],
  React: [
    {
      title: 'polycarp-dev-portfolio',
      description: 'A fully animated, responsive personal portfolio built using React.js, Framer Motion, Flask, and Bootstrap, featuring interactive routing, GitHub project integration, and a custom contact form.',
      link: 'https://github.com/pollycarp/polycarp-dev-portfolio'
    }
  ],
  Python: [
    {
      title: 'console-grid-game',
      description: 'A Python-based console game using object-oriented principles and grid logic, featuring obstacles, point collection, and player navigation via CLI.',
      link: 'https://github.com/pollycarp/console-grid-game'
    },
    {
      title: 'PrivacyLLM',
      description: 'A Python research project exploring language model safety and prompt injection vulnerabilities using OpenAI’s GPT APIs and masking strategies.',
      link: 'https://github.com/pollycarp/PrivacyLLM'
    }
  ],
  Java: [
    {
      title: 'Airline-Ticket-Reservation-System-Design',
      description: 'A core Java-based system for managing airline reservations, flight schedules, passenger records, and booking status with basic GUI support.',
      link: 'https://github.com/pollycarp/Airline-Ticket-Reservation-System-Design'
    }
  ]
};


const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        minHeight: '100vh',
        padding: '4rem 2rem',
        background: 'linear-gradient(to right, #2c5364, #203a43, #0f2027)',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      {/* Core Card */}
      <div style={{
        maxWidth: '1000px',
        width: '100%',
        backgroundColor: '#ffffff10',
        borderRadius: '12px',
        padding: '3rem',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
      }}>
        {/* Profile Image */}
        <motion.img
          src={profilePic}
          alt="Polycarp"
          style={{
            borderRadius: '50%',
            width: '180px',
            height: '180px',
            objectFit: 'cover',
            border: '4px solid #00bfff',
            flexShrink: 0
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Text */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h2 style={{ fontSize: '2rem', color: '#00bfff' }}>Mark Polycarp</h2>
          <p style={{ marginBottom: '0.2rem' }}><strong>Full Stack Developer</strong> | Nairobi, Kenya</p>
          <p style={{ fontSize: '0.95rem', color: '#ccc' }}>
            <strong>Email:</strong> markpollycarp@gmail.com<br />
            <strong>Phone:</strong> 0794 386 844<br />
            <strong>GitHub:</strong> <a href="https://github.com/pollycarp" target="_blank" rel="noopener noreferrer" style={{ color: '#00bfff' }}>github.com/pollycarp</a>
          </p>

          <p style={{ marginTop: '1rem', lineHeight: '1.6' }}>
            Motivated and detail-oriented full-stack developer with a strong foundation in web development, system design, and data handling. Passionate about building efficient, scalable web tools and automating data processes to streamline operations and improve integrity.
          </p>

          {/* Skills */}
          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ color: '#fff' }}>Core Skills</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '1rem' }}>
              {skills.map((skill) => (
                <span key={skill} style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#00bfff',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: 500
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Experience Timeline */}
      <div style={{ maxWidth: '1000px', width: '100%', marginTop: '3rem' }}>
        <h3 style={{ textAlign: 'center', color: '#00bfff' }}>Experience & Education</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem' }}>
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              style={{
                backgroundColor: '#ffffff10',
                borderLeft: '4px solid #00bfff',
                padding: '1rem 1.5rem',
                borderRadius: '6px'
              }}
            >
              <h5 style={{ marginBottom: '0.2rem' }}>{item.title}</h5>
              <p style={{ fontStyle: 'italic', color: '#aaa', margin: 0 }}>{item.subtitle}</p>
              <small style={{ color: '#ccc' }}>{item.date}</small>
              <p style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

        {/* Technical Projects */}
        <div style={{ maxWidth: '1000px', width: '100%', marginTop: '3rem' }}>
          <h3 style={{ textAlign: 'center', color: '#00bfff' }}>Technical Projects</h3>

          {Object.entries(projects).map(([stack, projList], stackIndex) => (
            <div key={stack} style={{ marginTop: '2.5rem' }}>
              <h4 style={{ color: '#fff', borderBottom: '1px solid #00bfff', paddingBottom: '0.3rem' }}>
                {stack}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
                {projList.map((proj, i) => {
                  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
                  return (
                    <motion.div
                      key={proj.title}
                      ref={ref}
                      initial={{ opacity: 0, x: 50 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: i * 0.1, duration: 0.6 }}
                      style={{
                        backgroundColor: '#ffffff10',
                        border: '1px solid #00bfff',
                        padding: '1rem 1.2rem',
                        borderRadius: '6px'
                      }}
                    >
                      <h5 style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaGithub style={{ color: '#00bfff' }} />
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: '#00bfff',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            fontSize: '1.05rem'
                          }}
                          onMouseOver={(e) => (e.target.style.textDecoration = 'underline')}
                          onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
                        >
                          {proj.title}
                        </a>
                      </h5>
                      <p style={{ color: '#ccc', fontSize: '0.95rem' }}>{proj.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      {/* Resume Button */}
        <div style={{ marginTop: '3rem' }}>
          <PDFDownloadLink
            document={<PDFResume />}
            fileName="Polycarp_Kingori_Resume.pdf"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#00bfff',
              color: '#fff',
              borderRadius: '6px',
              fontWeight: 'bold',
              textDecoration: 'none'
            }}
          >
            {({ loading }) =>
              loading ? 'Preparing Resume...' : 'Download Resume'
            }
          </PDFDownloadLink>
        </div>

    </motion.section>
  );
};

export default About;
