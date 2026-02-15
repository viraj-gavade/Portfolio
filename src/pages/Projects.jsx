import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, personalInfo } from '../mock';
import { Github, ExternalLink, X, ArrowRight } from 'lucide-react';
import { staggerContainerVariants, staggerItemVariants } from '../hooks/useScrollAnimation';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="portfolio-container" style={{ paddingTop: '80px' }}>
      <section className="section">
        <h1 className="section-title">Projects</h1>

        {/* Project cards */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 'clamp(1rem, 2vw, 2rem)'
          }}
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="card"
              variants={staggerItemVariants}
              style={{
                background: 'var(--bg-card)',
                border: hoveredCard === project.id ? '1px solid var(--text-primary)' : '1px solid var(--border-subtle)',
                padding: '1.5rem',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: hoveredCard === project.id ? '0 10px 30px rgba(0, 0, 0, 0.2)' : 'none'
              }}
              onClick={() => setSelectedProject(project)}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Content */}
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div
                  style={{
                    display: 'inline-block',
                    padding: '0.25rem 0.625rem',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--text-muted)',
                    marginBottom: '0.75rem'
                  }}
                >
                  {project.category}
                </div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)'
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-muted)',
                    marginBottom: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  {project.subtitle}
                </p>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    marginBottom: '1.5rem',
                    lineHeight: 1.6,
                    fontSize: '0.9375rem',
                    flexGrow: 1
                  }}
                >
                  {project.description}
                </p>

                {/* Tech stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {project.tech.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      style={{
                        padding: '0.25rem 0.75rem',
                        background: 'var(--bg-elevated)',
                        border: '1px solid var(--border-medium)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.75rem',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span
                      style={{
                        padding: '0.25rem 0.75rem',
                        background: 'var(--bg-elevated)',
                        border: '1px solid var(--border-medium)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.75rem',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--text-secondary)',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        transition: 'color 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                    >
                      <Github size={16} />
                      Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          color: 'var(--text-secondary)',
                          textDecoration: 'none',
                          fontSize: '0.875rem',
                          fontWeight: 500,
                          transition: 'color 0.2s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                        onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    style={{
                      padding: '0.5rem 1rem',
                      background: hoveredCard === project.id ? 'var(--text-primary)' : 'transparent',
                      color: hoveredCard === project.id ? 'var(--bg-primary)' : 'var(--text-secondary)',
                      border: `1px solid ${hoveredCard === project.id ? 'var(--text-primary)' : 'var(--border-medium)'}`,
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    See Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More on GitHub Button */}
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ display: 'inline-flex' }}
          >
            <Github size={20} />
            View More Projects on GitHub
            <ExternalLink size={18} />
          </a>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            overflowY: 'auto'
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-medium)',
              maxWidth: '900px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'rgba(0, 0, 0, 0.8)',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.5rem',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                zIndex: 10,
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--text-primary)';
                e.target.style.color = 'var(--bg-primary)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(0, 0, 0, 0.8)';
                e.target.style.color = 'var(--text-primary)';
              }}
            >
              <X size={20} />
            </button>

            {/* Content */}
            <div style={{ padding: '3rem' }}>
              <div
                style={{
                  display: 'inline-block',
                  padding: '0.375rem 0.875rem',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: 'var(--text-muted)',
                  marginBottom: '1rem'
                }}
              >
                {selectedProject.category}
              </div>

              <h2
                style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                  color: 'var(--text-primary)'
                }}
              >
                {selectedProject.title}
              </h2>

              <p
                style={{
                  fontSize: '1.125rem',
                  color: 'var(--text-muted)',
                  marginBottom: '2rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                {selectedProject.subtitle}
              </p>

              <p
                style={{
                  fontSize: '1.0625rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: '2rem'
                }}
              >
                {selectedProject.longDescription}
              </p>

              {/* Highlights */}
              {selectedProject.highlights && (
                <div style={{ marginBottom: '2rem' }}>
                  <h3
                    style={{
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      marginBottom: '1rem',
                      color: 'var(--text-primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    Key Highlights
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {selectedProject.highlights.map((highlight, index) => (
                      <li
                        key={index}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                          marginBottom: '0.75rem',
                          color: 'var(--text-secondary)'
                        }}
                      >
                        <ArrowRight size={16} />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Metrics */}
              {selectedProject.metrics && (
                <div
                  style={{
                    display: 'flex',
                    gap: '2rem',
                    padding: '1.5rem',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border-medium)',
                    marginBottom: '2rem'
                  }}
                >
                  {Object.entries(selectedProject.metrics).map(([key, value]) => (
                    <div key={key}>
                      <div
                        style={{
                          fontSize: '2rem',
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          marginBottom: '0.25rem'
                        }}
                      >
                        {value}
                      </div>
                      <div
                        style={{
                          fontSize: '0.875rem',
                          color: 'var(--text-muted)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em'
                        }}
                      >
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech stack */}
              <div style={{ marginBottom: '2rem' }}>
                <h3
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    marginBottom: '1rem',
                    color: 'var(--text-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  Technology Stack
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {selectedProject.tech.map((tech, index) => (
                    <span
                      key={index}
                      style={{
                        padding: '0.5rem 1rem',
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
              </div>

              {/* Links */}
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <Github size={18} />
                  View Code
                </a>
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
