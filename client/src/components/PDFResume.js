import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';

// Define PDF styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 11,
    lineHeight: 1.6,
    color: '#333'
  },
  header: {
    borderBottom: '2px solid #00bfff',
    marginBottom: 12,
    paddingBottom: 6,
  },
  name: {
    fontSize: 22,
    color: '#00bfff',
    marginBottom: 4,
    fontWeight: 'bold'
  },
  contact: {
    fontSize: 11,
    lineHeight: 1.4,
    color: '#444'
  },
  section: {
    marginTop: 20
  },
  sectionTitle: {
    fontSize: 14,
    marginBottom: 6,
    color: '#00bfff',
    fontWeight: 'bold',
    borderBottom: '1px solid #ccc',
    paddingBottom: 4
  },
  subheading: {
    fontWeight: 'bold',
    fontSize: 11
  },
  bullet: {
    marginLeft: 8,
    marginBottom: 2
  },
  listItem: {
    marginBottom: 4
  }
});

// Skills, Timeline, and Projects
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

// Component
const PDFResume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>Polycarp Kingori</Text>
        <Text style={styles.contact}>Full Stack Developer – Nairobi, Kenya</Text>
        <Text style={styles.contact}>Email: markpollycarp@gmail.com | Phone: 0794 386 844</Text>
        <Text style={styles.contact}>GitHub: github.com/pollycarp</Text>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text>
          Motivated and detail-oriented full-stack developer with experience in building efficient, scalable web platforms, APIs, and automation pipelines. Skilled in modern frameworks and passionate about clean code.
        </Text>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Core Skills</Text>
        <View>
          {skills.map((skill, i) => (
            <Text key={i} style={styles.bullet}>• {skill}</Text>
          ))}
        </View>
      </View>

      {/* Timeline */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience & Education</Text>
        {timeline.map((item, i) => (
          <View key={i} style={styles.listItem}>
            <Text style={styles.subheading}>{item.title}</Text>
            <Text>{item.subtitle} – {item.date}</Text>
            <Text>{item.description}</Text>
          </View>
        ))}
      </View>

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Highlighted Projects</Text>
        {Object.entries(projects).map(([stack, projList]) => (
          <View key={stack} style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 12, marginBottom: 4, color: '#00bfff' }}>{stack}</Text>
            {projList.map((proj, i) => (
              <View key={i} style={{ marginLeft: 8, marginBottom: 4 }}>
                <Text style={{ fontWeight: 'bold' }}>{proj.title}</Text>
                <Text>{proj.description}</Text>
                <Link src={proj.link} style={{ color: '#00bfff', fontSize: 10 }}>{proj.link}</Link>
              </View>
            ))}
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default PDFResume;
