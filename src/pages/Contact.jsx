import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../mock';
import { Github, Linkedin, Twitter, Mail, Download, ExternalLink } from 'lucide-react';
import { staggerContainerVariants, staggerItemVariants } from '../hooks/useScrollAnimation';

const Contact = () => {
  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: personalInfo.github,
      username: '@viraj-gavade',
      description: 'Open source projects and code repositories'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: personalInfo.linkedin,
      username: 'viraj-gavade',
      description: 'Professional network and connections'
    },
    {
      icon: Twitter,
      label: 'Twitter/X',
      url: personalInfo.twitter,
      username: '@viraj_gavade',
      description: 'Tech insights and updates'
    },
    {
      icon: Mail,
      label: 'Email',
      url: `mailto:${personalInfo.email}`,
      username: personalInfo.email,
      description: 'Direct communication'
    }
  ];

  return (
    <div className="portfolio-container" style={{ paddingTop: '80px' }}>
      <section className="section">
        <h1 className="section-title">Get In Touch</h1>
        <p
          style={{
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            marginBottom: '4rem',
            maxWidth: '800px',
            lineHeight: 1.7
          }}
        >
          Interested in collaborating on ML systems, backend architecture, or scalable solutions?
          Feel free to reach out through any of these channels.
        </p>

        {/* Social Links */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.div
                key={index}
                variants={staggerItemVariants}
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    padding: '2rem',
                    textDecoration: 'none',
                    display: 'block'
                  }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                  <div
                    style={{
                      padding: '0.75rem',
                      background: 'var(--bg-elevated)',
                      borderRadius: 'var(--radius-md)'
                    }}
                  >
                    <Icon size={24} color="var(--text-primary)" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontSize: '1.125rem',
                        fontWeight: 600,
                        marginBottom: '0.375rem',
                        color: 'var(--text-primary)'
                      }}
                    >
                      {social.label}
                    </h3>
                    <div
                      style={{
                        fontSize: '0.9375rem',
                        color: 'var(--text-muted)',
                        fontFamily: 'monospace'
                      }}
                    >
                      {social.username}
                    </div>
                  </div>
                  <ExternalLink size={18} color="var(--text-muted)" />
                </div>
                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    margin: 0,
                    lineHeight: 1.5
                  }}
                >
                  {social.description}
                </p>
              </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Resume Download */}
        <motion.div
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-subtle)',
            padding: '3rem',
            textAlign: 'center'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            style={{
              fontSize: '1.75rem',
              fontWeight: 600,
              marginBottom: '1rem',
              color: 'var(--text-primary)'
            }}
          >
            Resume
          </h2>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem'
            }}
          >
            Download my detailed resume with complete information about my experience, skills, and achievements.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={personalInfo.resumes.ml}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ display: 'inline-flex' }}
            >
              <Download size={18} />
              ML Engineer Resume
            </a>
            <a
              href={personalInfo.resumes.fullstack}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ display: 'inline-flex' }}
            >
              <Download size={18} />
              Fullstack Resume
            </a>
          </div>
        </motion.div>

        {/* Quick Info */}
        <div
          style={{
            marginTop: '4rem',
            padding: '2rem',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-sm)'
          }}
        >
          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              marginBottom: '1.5rem',
              color: 'var(--text-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            Quick Info
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem'
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.5rem'
                }}
              >
                Location
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>India</div>
            </div>
            <div>
              <div
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.5rem'
                }}
              >
                Availability
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>Open to opportunities</div>
            </div>
            <div>
              <div
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.5rem'
                }}
              >
                Work Type
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>Remote / Hybrid / On-site</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
