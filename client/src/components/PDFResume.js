import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// PDF styles
const styles = StyleSheet.create({
  page: {
    paddingTop: 32,
    paddingBottom: 32,
    paddingHorizontal: 34,
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.45,
    color: '#1f2937',
  },
  header: {
    marginBottom: 12,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#00bfff',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00bfff',
    marginBottom: 4,
  },
  contactLine: {
    fontSize: 9.5,
    color: '#374151',
    marginBottom: 2,
  },
  roleTitle: {
    marginTop: 8,
    fontSize: 11,
    fontWeight: 'bold',
    color: '#111827',
  },
  tagline: {
    marginTop: 4,
    fontSize: 10,
    color: '#4b5563',
  },
  section: {
    marginTop: 14,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#00bfff',
    marginBottom: 6,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#d1d5db',
  },
  paragraph: {
    fontSize: 10,
    color: '#1f2937',
  },
  skillsGrid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillItem: {
    width: '50%',
    paddingRight: 8,
    marginBottom: 3,
    fontSize: 9.5,
  },
  entry: {
    marginBottom: 10,
  },
  entryHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  entryTitle: {
    fontSize: 10.5,
    fontWeight: 'bold',
    color: '#111827',
    width: '68%',
  },
  entryDate: {
    fontSize: 9.5,
    color: '#374151',
    textAlign: 'right',
    width: '32%',
  },
  entrySubtitle: {
    fontSize: 9.5,
    color: '#4b5563',
    marginBottom: 3,
  },
  bulletRow: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 2,
    paddingRight: 6,
  },
  bullet: {
    width: 10,
    fontSize: 10,
  },
  bulletText: {
    flex: 1,
    fontSize: 9.5,
  },
  certItem: {
    marginBottom: 4,
    fontSize: 9.5,
  },
});

// Resume content
const contact = {
  name: 'Polycarp Kingori',
  email: 'markpollycarp@gmail.com',
  phone: '+254794386844',
  links: 'LinkedIn | GitHub | Portfolio',
  title: 'AI/ML Engineer | Data Analyst | AI Automation Specialist',
  tagline: 'Building Scalable Solutions for Finance and Tech',
};

const summary =
  'Results-driven AI and data professional with 7+ years of experience in machine learning, generative AI, workflow automation, and analytics. Skilled in Python, SQL, LLM applications, dashboards, and no-code/low-code tools to build practical solutions that improve business operations and decision-making. Strong at translating complex business needs into scalable AI-enabled products, data insights, and automated workflows across cross-functional teams.';

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
  'ERP Integration',
];

const experience = [
  {
    title: 'ML & AI Engineer',
    company: 'Independent Consultant | Remote',
    date: 'Jan. 2026 – Present',
    bullets: [
      'Built scalable AI/ML and analytics solutions that convert raw data into actionable insights for decision-making.',
      'Developed data pipelines, predictive models, and BI dashboards using Python, SQL, Power BI, AWS, and GCP.',
      'Automated workflows and deployed cloud-based solutions that reduced manual effort by 40% and improved reporting speed by 60%.',
    ],
  },
  {
    title: 'Data Scientist',
    company: 'UNDP Kenya | Hybrid',
    date: 'Jan. 2024 – Dec. 2025',
    bullets: [
      'Developed ETL and ingestion pipelines for large datasets and supported model training, data analysis, and storytelling.',
      'Used Python and SQL to improve data quality, analytics readiness, and reporting efficiency by 54%.',
      'Delivered insights for technical and non-technical stakeholders across climate resilience initiatives.',
    ],
  },
  {
    title: 'Data Analyst (Operational Support)',
    company: 'United Nations DT SACCO | Onsite',
    date: 'Jun. 2023 – Dec. 2024',
    bullets: [
      'Improved data quality through verification, cleaning, record standardization, and spreadsheet automation.',
      'Used Excel, Python, and Pandas to streamline workflows and reduce reporting errors by 30%.',
      'Coordinated with departments to resolve incomplete records across datasets.',
    ],
  },
  {
    title: 'Machine Learning & AI Researcher',
    company: 'B12K | Remote',
    date: 'Jan. 2019 – Dec. 2022',
    bullets: [
      'Researched, designed, and benchmarked AI/ML architectures for intelligent systems and applied use cases.',
      'Built RAG pipelines and evaluated models for performance, scalability, and production readiness.',
      'Improved solution performance by 30% through experimentation, optimization, and architecture refinement.',
    ],
  },
];

const education = [
  {
    degree: 'Bachelor of Science: Software Development',
    school: 'Brigham Young University - Idaho',
    date: 'Anticipated 2027',
    details: ['Relevant Coursework: Data Structures, Systems Analysis, Database Design'],
  },
  {
    degree: 'Bachelor of Science: Computer Science',
    school: 'Maseno University',
    date: 'Sept. 2018 – Dec. 2022',
    details: ['Relevant Coursework: Data Structures, Systems Analysis, Database Design'],
  },
];

const certificates = [
  'Agentic AI with LangGraph, CrewAI, AutoGen and BeeAI - IBM',
  'Agentic AI Training - UNDP ICPSD',
];

// Small reusable components
const BulletList = ({ items }) => (
  <View>
    {items.map((item, index) => (
      <View key={index} style={styles.bulletRow}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>{item}</Text>
      </View>
    ))}
  </View>
);

const PDFResume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{contact.name}</Text>
        <Text style={styles.contactLine}>
          {contact.email} | {contact.links} | {contact.phone}
        </Text>
        <Text style={styles.roleTitle}>{contact.title}</Text>
        <Text style={styles.tagline}>{contact.tagline}</Text>
      </View>

      {/* Professional Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.paragraph}>{summary}</Text>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <Text key={index} style={styles.skillItem}>
              • {skill}
            </Text>
          ))}
        </View>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        {experience.map((job, index) => (
          <View key={index} style={styles.entry}>
            <View style={styles.entryHeader}>
              <Text style={styles.entryTitle}>{job.title}</Text>
              <Text style={styles.entryDate}>{job.date}</Text>
            </View>
            <Text style={styles.entrySubtitle}>{job.company}</Text>
            <BulletList items={job.bullets} />
          </View>
        ))}
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        {education.map((item, index) => (
          <View key={index} style={styles.entry}>
            <View style={styles.entryHeader}>
              <Text style={styles.entryTitle}>{item.degree}</Text>
              <Text style={styles.entryDate}>{item.date}</Text>
            </View>
            <Text style={styles.entrySubtitle}>{item.school}</Text>
            <BulletList items={item.details} />
          </View>
        ))}
      </View>

      {/* Certificates */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Certificates</Text>
        {certificates.map((cert, index) => (
          <Text key={index} style={styles.certItem}>
            • {cert}
          </Text>
        ))}
      </View>
    </Page>
  </Document>
);

export default PDFResume;