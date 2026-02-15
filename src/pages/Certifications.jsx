import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certifications } from '../mock';
import { ExternalLink, Award, X } from 'lucide-react';
import { staggerContainerVariants, staggerItemVariants } from '../hooks/useScrollAnimation';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const groupedCerts = certifications.reduce((acc, cert) => {
    if (!acc[cert.category]) {
      acc[cert.category] = [];
    }
    acc[cert.category].push(cert);
    return acc;
  }, {});

  return (
    <div className="portfolio-container" style={{ paddingTop: '80px' }}>
      <section className="section">
        <h1 className="section-title">Certifications</h1>
        <p
          style={{
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            marginBottom: '3rem',
            maxWidth: '800px',
            lineHeight: 1.7
          }}
        >
          Professional certifications demonstrating expertise in AI, Machine Learning, Web Development, and Cloud technologies.
        </p>

        {/* All certifications */}
        <div style={{ marginBottom: '4rem' }}>
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
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                className="card"
                variants={staggerItemVariants}
                onClick={() => setSelectedCert(cert)}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--text-primary)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                    <div
                      style={{
                        padding: '0.75rem',
                        background: 'var(--bg-elevated)',
                        borderRadius: 'var(--radius-md)'
                      }}
                    >
                      <Award size={24} color="var(--text-primary)" />
                    </div>
                    <div style={{ flex: 1 }}>
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
                        {cert.category}
                      </div>
                    </div>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      marginBottom: '0.75rem',
                      color: 'var(--text-primary)',
                      lineHeight: 1.3
                    }}
                  >
                    {cert.title}
                  </h3>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.375rem',
                      marginBottom: '1.5rem'
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.9375rem',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {cert.issuer}
                    </div>
                    <div
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {cert.date}
                    </div>
                  </div>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  Verify Certificate
                  <ExternalLink size={14} />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Grouped by category */}
        <div
          style={{
            background: 'var(--bg-secondary)',
            padding: 'clamp(1.5rem, 4vw, 3rem)',
            border: '1px solid var(--border-subtle)'
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
              fontWeight: 600,
              marginBottom: '2rem',
              color: 'var(--text-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            Certifications by Category
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'clamp(1rem, 2vw, 2rem)'
            }}
          >
            {Object.entries(groupedCerts).map(([category, certs]) => (
              <div key={category}>
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    marginBottom: '1rem',
                    color: 'var(--text-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  {category}
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '1.5rem',
                      height: '1.5rem',
                      borderRadius: '50%',
                      background: 'var(--bg-elevated)',
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)'
                    }}
                  >
                    {certs.length}
                  </span>
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {certs.map((cert) => (
                    <li
                      key={cert.id}
                      style={{
                        marginBottom: '0.75rem',
                        paddingLeft: '1rem',
                        borderLeft: '2px solid var(--border-medium)',
                        color: 'var(--text-secondary)',
                        fontSize: '0.9375rem'
                      }}
                    >
                      {cert.title.length > 50 ? cert.title.substring(0, 50) + '...' : cert.title}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Preview Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              backdropFilter: 'blur(4px)'
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem',
                maxWidth: '600px',
                width: '90%',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--text-primary)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-medium)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                <X size={20} />
              </button>

              {/* Modal Content */}
              <div style={{ display: 'flex', alignItems: 'start', gap: '1.5rem', marginBottom: '2rem' }}>
                <div
                  style={{
                    padding: '1rem',
                    background: 'var(--bg-elevated)',
                    borderRadius: 'var(--radius-md)'
                  }}
                >
                  <Award size={32} color="var(--text-primary)" />
                </div>
                <div style={{ flex: 1 }}>
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
                    {selectedCert.category}
                  </div>
                  <h2
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.5rem',
                      lineHeight: 1.3
                    }}
                  >
                    {selectedCert.title}
                  </h2>
                  <p
                    style={{
                      fontSize: '1.0625rem',
                      color: 'var(--text-secondary)',
                      marginBottom: '0'
                    }}
                  >
                    {selectedCert.issuer}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: '1px',
                  background: 'var(--border-subtle)',
                  margin: '2rem 0'
                }}
              />

              {/* Certification Details */}
              <div style={{ marginBottom: '2rem' }}>
                <h3
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--text-muted)',
                    marginBottom: '1rem'
                  }}
                >
                  Certification Details
                </h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Issued by:</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{selectedCert.issuer}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Category:</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{selectedCert.category}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Issued:</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{selectedCert.date}</span>
                </div>
              </div>

              {/* Verify Button */}
              <a
                href={selectedCert.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  width: '100%',
                  justifyContent: 'center',
                  padding: '1rem',
                  background: 'var(--text-primary)',
                  color: 'var(--bg-primary)',
                  textDecoration: 'none',
                  borderRadius: 'var(--radius-sm)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  fontSize: '0.875rem',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                Verify Certificate
                <ExternalLink size={18} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certifications;
