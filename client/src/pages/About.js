import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile.jpg';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFResume from '../components/PDFResume';
import '../styles/About.css';

const skills = [
  'Python',
  'SQL',
  'JavaScript',
  'Pandas',
  'NumPy',
  'Scikit-learn',
  'PyTorch',
  'TensorFlow',
  'Machine Learning',
  'Predictive Modeling',
  'NLP',
  'Generative AI',
  'LLMs',
  'Prompt Engineering',
  'RAG',
  'Vector Databases',
  'AI Agents',
  'Chatbots',
  'MLOps',
  'CI/CD for ML',
  'APIs',
  'Webhooks',
  'Zapier',
  'Make',
  'n8n',
  'Power BI',
  'Metabase',
  'ETL Pipelines',
  'AWS',
  'GCP',
  'Azure',
  'Data Governance',
  'Healthcare Analytics',
  'Fintech Analytics',
  'ERP Integration'
];

const experience = [
  {
    title: 'ML & AI Engineer',
    subtitle: 'Independent Consultant | Remote',
    date: 'Jan. 2026 – Present',
    bullets: [
      'Built scalable AI/ML and analytics solutions that convert raw data into actionable insights for decision-making.',
      'Developed data pipelines, predictive models, and BI dashboards using Python, SQL, Power BI, AWS, and GCP.',
      'Automated workflows and deployed cloud-based solutions that reduced manual effort by 40% and improved reporting speed by 60%.'
    ]
  },
  {
    title: 'Data Scientist',
    subtitle: 'UNDP Kenya | Hybrid',
    date: 'Jan. 2024 – Dec. 2025',
    bullets: [
      'Developed ETL and ingestion pipelines for large datasets and supported model training, data analysis, and storytelling.',
      'Used Python and SQL to improve data quality, analytics readiness, and reporting efficiency by 54%.',
      'Delivered insights for technical and non-technical stakeholders across climate resilience initiatives.'
    ]
  },
  {
    title: 'Data Analyst (Operational Support)',
    subtitle: 'United Nations DT SACCO | Onsite',
    date: 'Jun. 2023 – Dec. 2024',
    bullets: [
      'Improved data quality through verification, cleaning, record standardization, and spreadsheet automation.',
      'Used Excel, Python, and Pandas to streamline workflows and reduce reporting errors by 30%.',
      'Coordinated with departments to resolve incomplete records across datasets.'
    ]
  },
  {
    title: 'Machine Learning & AI Researcher',
    subtitle: 'B12K | Remote',
    date: 'Jan. 2019 – Dec. 2022',
    bullets: [
      'Researched, designed, and benchmarked AI/ML architectures for intelligent systems and applied use cases.',
      'Built RAG pipelines and evaluated models for performance, scalability, and production readiness.',
      'Improved solution performance by 30% through experimentation, optimization, and architecture refinement.'
    ]
  }
];

const education = [
  {
    title: 'Bachelor of Science: Software Development',
    subtitle: 'Brigham Young University - Idaho',
    date: 'Anticipated 2027',
    details: ['Relevant Coursework: Data Structures, Systems Analysis, Database Design']
  },
  {
    title: 'Bachelor of Science: Computer Science',
    subtitle: 'Maseno University',
    date: 'Sept. 2018 – Dec. 2022',
    details: ['Relevant Coursework: Data Structures, Systems Analysis, Database Design']
  }
];

const certificates = [
  'Agentic AI with LangGraph, CrewAI, AutoGen and BeeAI - IBM',
  'Agentic AI Training - UNDP ICPSD'
];

const cardStyle = {
  backgroundColor: '#ffffff10',
  borderLeft: '4px solid #00bfff',
  padding: '1rem 1.5rem',
  borderRadius: '6px'
};

const sectionWrapStyle = {
  maxWidth: '1000px',
  width: '100%',
  marginTop: '3rem'
};

const sectionTitleStyle = {
  textAlign: 'center',
  color: '#00bfff',
  marginBottom: '1.5rem'
};

const About = () => {
  return (
    <motion.section
      className="about-section"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Core Card */}
      <div className="about-card">
        <motion.img
          src={profilePic}
          alt="Polycarp Kingori"
          className="about-image"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        <div className="about-text">
          <h2 className="about-name">Polycarp Kingori</h2>
          <p className="about-title">
            <strong>AI/ML Engineer | Data Analyst | AI Automation Specialist</strong>
          </p>
          <p className="about-title">Building Scalable Solutions for Finance and Tech</p>

          <p className="about-meta">
            <strong>Email:</strong> markpollycarp@gmail.com
            <br />
            <strong>Phone:</strong> +254794386844
            <br />
            <strong>GitHub:</strong>{' '}
            <a
              href="https://github.com/pollycarp"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              github.com/pollycarp
            </a>
          </p>

          <p className="about-summary">
            Results-driven AI and data professional with 7+ years of experience in machine
            learning, generative AI, workflow automation, and analytics. Skilled in Python,
            SQL, LLM applications, dashboards, and no-code/low-code tools to build practical
            solutions that improve business operations and decision-making. Strong at
            translating complex business needs into scalable AI-enabled products, data
            insights, and automated workflows across cross-functional teams.
          </p>

          {/* Skills */}
          <div className="skills-section">
            <h4>Core Skills</h4>
            <div className="skills-wrapper">
              {skills.map((skill) => (
                <span className="skill-badge" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div style={sectionWrapStyle}>
        <h3 style={sectionTitleStyle}>Professional Experience</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {experience.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              style={cardStyle}
            >
              <h4 style={{ marginBottom: '0.3rem' }}>{item.title}</h4>
              <p style={{ fontStyle: 'italic', color: '#aaa', margin: 0 }}>{item.subtitle}</p>
              <small style={{ color: '#ccc' }}>{item.date}</small>

              <ul style={{ marginTop: '0.75rem', paddingLeft: '1.2rem', color: '#ddd' }}>
                {item.bullets.map((bullet, idx) => (
                  <li key={idx} style={{ marginBottom: '0.45rem', lineHeight: 1.6 }}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div style={sectionWrapStyle}>
        <h3 style={sectionTitleStyle}>Education</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {education.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              style={cardStyle}
            >
              <h4 style={{ marginBottom: '0.3rem' }}>{item.title}</h4>
              <p style={{ fontStyle: 'italic', color: '#aaa', margin: 0 }}>{item.subtitle}</p>
              <small style={{ color: '#ccc' }}>{item.date}</small>

              <ul style={{ marginTop: '0.75rem', paddingLeft: '1.2rem', color: '#ddd' }}>
                {item.details.map((detail, idx) => (
                  <li key={idx} style={{ marginBottom: '0.45rem', lineHeight: 1.6 }}>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificates */}
      <div style={sectionWrapStyle}>
        <h3 style={sectionTitleStyle}>Certificates</h3>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={cardStyle}
        >
          <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#ddd' }}>
            {certificates.map((cert) => (
              <li key={cert} style={{ marginBottom: '0.6rem', lineHeight: 1.6 }}>
                {cert}
              </li>
            ))}
          </ul>
        </motion.div>
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
          {({ loading }) => (loading ? 'Preparing Resume...' : 'Download Resume')}
        </PDFDownloadLink>
      </div>
    </motion.section>
  );
};

export default About;