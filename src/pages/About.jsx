import React from 'react';
import { motion } from 'framer-motion';
import { experience, timeline, skills } from '../mock';
import { Briefcase, Calendar, CheckCircle, Code, Code2, Database, Zap, Eye, MessageCircle, Link, Search, Package, Network, Radio, Cloud, Box, GitBranch, Shield, Lock, Activity, Grid } from 'lucide-react';
import { staggerContainerVariants, staggerItemVariants } from '../hooks/useScrollAnimation';

// Tech name to icon mapping
const skillIconMap = {
  "PyTorch": Zap,
  "Scikit-learn": Activity,
  "TensorFlow": Grid,
  "LangChain": Link,
  "RAG": Search,
  "NLP": MessageCircle,
  "Computer Vision": Eye,
  "Python (FastAPI)": Code,
  "FastAPI": Code,
  "Node.js (Express)": Code2,
  "Node.js": Code2,
  "Express": Package,
  "MongoDB": Database,
  "PostgreSQL": Database,
  "Redis": Zap,
  "GraphQL": GitBranch,
  "React": Zap,
  "TypeScript": Code,
  "MERN Stack": Package,
  "RESTful APIs": Network,
  "Socket.io": Radio,
  "Next.js": Code,
  "Docker": Box,
  "AWS (S3, EC2)": Cloud,
  "AWS": Cloud,
  "CI/CD": GitBranch,
  "Git": GitBranch,
  "Vercel": Cloud,
  "MLflow": Activity,
  "OAuth2": Lock,
  "JWT": Lock,
  "RBAC": Shield,
  "Secure API Design": Shield
};

const About = () => {
  return (
    <div className="portfolio-container" style={{ paddingTop: '80px' }}>
      {/* Experience Section */}
      {experience.length > 0 && (
        <section className="section">
          <h1 className="section-title">Experience</h1>
          <motion.div 
            style={{ maxWidth: '900px' }}
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experience.map((exp) => (
              <motion.div
                key={exp.id}
                className="card"
                variants={staggerItemVariants}
                style={{
                  marginBottom: '2rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  padding: '2.5rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div
                    style={{
                      padding: '0.75rem',
                      background: 'var(--bg-elevated)',
                      borderRadius: 'var(--radius-md)'
                    }}
                  >
                    <Briefcase size={24} color="var(--text-primary)" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h2
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        marginBottom: '0.5rem',
                        color: 'var(--text-primary)'
                      }}
                    >
                      {exp.role}
                    </h2>
                    <div
                      style={{
                        fontSize: '1.125rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '0.25rem'
                      }}
                    >
                      {exp.company}
                    </div>
                    <div
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {exp.period}
                    </div>
                  </div>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0' }}>
                  {exp.description.map((item, index) => (
                    <li
                      key={index}
                      style={{
                        display: 'flex',
                        gap: '1rem',
                        marginBottom: '1rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6
                      }}
                    >
                      <CheckCircle size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {exp.tech.map((tech, index) => (
                    <span
                      key={index}
                      style={{
                        padding: '0.375rem 0.875rem',
                        background: 'var(--bg-elevated)',
                        border: '1px solid var(--border-medium)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}

      {/* Enhanced Timeline Section - Vertical */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <h2 className="section-title">Learning Journey Timeline</h2>
        <motion.div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            position: 'relative',
            paddingLeft: '3rem'
          }}
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: '12px',
              top: '0',
              bottom: '0',
              width: '2px',
              background: 'var(--border-medium)'
            }}
          />

          {timeline.map((item, index) => (
            <motion.div
              key={item.id}
              variants={staggerItemVariants}
              style={{
                display: 'flex',
                gap: '2rem',
                marginBottom: index === timeline.length - 1 ? 0 : '3rem',
                position: 'relative'
              }}
            >
              {/* Timeline dot */}
              <div
                style={{
                  position: 'absolute',
                  left: '-36px',
                  top: '8px',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'var(--bg-secondary)',
                  border: '3px solid var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  zIndex: 2
                }}
              >
                {item.icon}
              </div>

              {/* Content Card */}
              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.5rem',
                  flex: 1,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--text-primary)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
                  e.currentTarget.style.transform = 'translateX(10px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                {/* Period */}
                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '0.5rem'
                  }}
                >
                  {item.period}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    marginBottom: '0.75rem',
                    color: 'var(--text-primary)',
                    lineHeight: 1.3
                  }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1rem'
                  }}
                >
                  {item.description}
                </p>

                {/* Skills */}
                {item.skills && item.skills.length > 0 && (
                  <div style={{ marginBottom: '1rem' }}>
                    <div
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: '0.75rem'
                      }}
                    >
                      Skills Gained
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {item.skills.slice(0, 5).map((skill, idx) => (
                        <span
                          key={idx}
                          style={{
                            padding: '0.375rem 0.75rem',
                            background: 'var(--bg-elevated)',
                            border: '1px solid var(--border-medium)',
                            borderRadius: 'var(--radius-sm)',
                            fontSize: '0.8rem',
                            color: 'var(--text-secondary)',
                            fontWeight: 500
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                      {item.skills.length > 5 && (
                        <span
                          style={{
                            padding: '0.375rem 0.75rem',
                            background: 'var(--bg-elevated)',
                            border: '1px solid var(--border-medium)',
                            borderRadius: 'var(--radius-sm)',
                            fontSize: '0.8rem',
                            color: 'var(--text-secondary)',
                            fontWeight: 500
                          }}
                        >
                          +{item.skills.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Projects */}
                {item.projects && item.projects.length > 0 && (
                  <div style={{ marginBottom: '1rem' }}>
                    <div
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: '0.75rem'
                      }}
                    >
                      Projects Built
                    </div>
                    <ul
                      style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem'
                      }}
                    >
                      {item.projects.map((project, idx) => (
                        <li
                          key={idx}
                          style={{
                            fontSize: '0.9375rem',
                            color: 'var(--text-secondary)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                          }}
                        >
                          <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>▸</span>
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Achievements */}
                {item.achievements && item.achievements.length > 0 && (
                  <div style={{ marginBottom: '0.5rem' }}>
                    <div
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: '0.75rem'
                      }}
                    >
                      Key Achievements
                    </div>
                    <ul
                      style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem'
                      }}
                    >
                      {item.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          style={{
                            fontSize: '0.9rem',
                            color: 'var(--text-secondary)',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.5rem',
                            lineHeight: 1.5
                          }}
                        >
                          <span style={{ color: 'var(--text-primary)', flexShrink: 0 }}>✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Type badge */}
                <div
                  style={{
                    display: 'inline-block',
                    padding: '0.375rem 0.75rem',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--text-muted)',
                    marginTop: '0.5rem'
                  }}
                >
                  {item.type}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="section">
        <h2 className="section-title">Technical Skills</h2>
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div
              key={category}
              className="card"
              variants={staggerItemVariants}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                padding: '2rem'
              }}
            >
              <h3
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  marginBottom: '1.5rem',
                  color: 'var(--text-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                {category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {skillList.map((skill, index) => {
                  const IconComponent = skillIconMap[skill] || Code;
                  return (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        background: 'var(--bg-elevated)',
                        border: '1px solid var(--border-medium)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        transition: 'all 0.2s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--text-primary)';
                        e.currentTarget.style.color = 'var(--text-primary)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 255, 255, 0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-medium)';
                        e.currentTarget.style.color = 'var(--text-secondary)';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <IconComponent size={16} />
                      <span>{skill}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default About;
