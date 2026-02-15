import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink, Code, GitBranch, BookOpen, Zap, FileCode } from 'lucide-react';
import CountUp from 'react-countup';
import { personalInfo, metrics } from '../mock';
import { staggerContainerVariants, staggerItemVariants, fadeInUpVariants } from '../hooks/useScrollAnimation';

const Home = () => {
  return (
    <div className="portfolio-container">
      {/* Hero Section */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6rem 2rem',
          background: 'var(--bg-primary)',
          borderBottom: '1px solid var(--border-subtle)'
        }}
      >
        <motion.div 
          style={{ maxWidth: '1400px', width: '100%' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ maxWidth: '900px' }}>
            <motion.div
              style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '1.5rem'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              AI Solution Architect
            </motion.div>
            
            <h1
              style={{
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1,
                marginBottom: '2rem',
                color: 'var(--text-primary)'
              }}
            >
              {personalInfo.name}
            </h1>
            
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                fontWeight: 600,
                letterSpacing: '-0.01em',
                lineHeight: 1.2,
                marginBottom: '2rem',
                color: 'var(--text-secondary)'
              }}
            >
              {personalInfo.headline}
            </h2>
            
            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: '3rem',
                maxWidth: '700px'
              }}
            >
              {personalInfo.description}
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/projects" className="btn btn-primary">
                View Projects
                <ArrowRight size={18} />
              </Link>
              
              <Link to="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
              
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Github size={18} />
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Animated Stats Dashboard */}
      <section className="section" style={{ background: 'var(--bg-secondary)', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '3rem', textAlign: 'center', color: 'var(--text-primary)' }}>
          By The Numbers
        </h2>
        
        <motion.div 
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Projects */}
          <motion.div
            className="card"
            variants={staggerItemVariants}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-medium)',
              padding: '2rem',
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.borderColor = 'var(--text-primary)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.background = 'var(--bg-elevated)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--border-medium)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.background = 'var(--bg-card)';
            }}
          >
            <Code size={32} style={{ color: 'var(--text-primary)', margin: '0 auto 1rem' }} />
            <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              <CountUp end={50} duration={2.5} suffix="+" />
            </div>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Projects Built
            </div>
          </motion.div>

          {/* GitHub Repos */}
          <motion.div
            className="card"
            variants={staggerItemVariants}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-medium)',
              padding: '2rem',
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.borderColor = 'var(--text-primary)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.background = 'var(--bg-elevated)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--border-medium)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.background = 'var(--bg-card)';
            }}
          >
            <GitBranch size={32} style={{ color: 'var(--text-primary)', margin: '0 auto 1rem' }} />
            <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              <CountUp end={50} duration={2.5} suffix="+" />
            </div>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              GitHub Repos
            </div>
          </motion.div>

          {/* Commits */}
          <motion.div
            className="card"
            variants={staggerItemVariants}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-medium)',
              padding: '2rem',
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.borderColor = 'var(--text-primary)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.background = 'var(--bg-elevated)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--border-medium)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.background = 'var(--bg-card)';
            }}
          >
            <Zap size={32} style={{ color: 'var(--text-primary)', margin: '0 auto 1rem' }} />
            <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              <CountUp end={1200} duration={2.5} suffix="+" />
            </div>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Git Commits
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            className="card"
            variants={staggerItemVariants}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-medium)',
              padding: '2rem',
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.borderColor = 'var(--text-primary)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.background = 'var(--bg-elevated)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--border-medium)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.background = 'var(--bg-card)';
            }}
          >
            <BookOpen size={32} style={{ color: 'var(--text-primary)', margin: '0 auto 1rem' }} />
            <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              <CountUp end={20} duration={2.5} suffix="+" />
            </div>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Tech Stack
            </div>
          </motion.div>

          {/* Lines of Code */}
          <motion.div
            className="card"
            variants={staggerItemVariants}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-medium)',
              padding: '2rem',
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.borderColor = 'var(--text-primary)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.background = 'var(--bg-elevated)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--border-medium)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.background = 'var(--bg-card)';
            }}
          >
            <FileCode size={32} style={{ color: 'var(--text-primary)', margin: '0 auto 1rem' }} />
            <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              <CountUp end={50} duration={2.5} suffix="K+" />
            </div>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Lines of Code
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Skills */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <h2 className="section-title">Core Expertise</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div>
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                marginBottom: '1rem',
                color: 'var(--text-primary)'
              }}
            >
              AI/ML Engineering
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Production ML systems, PyTorch, TensorFlow, RAG architectures, NLP, Computer Vision
            </p>
          </div>

          <div>
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                marginBottom: '1rem',
                color: 'var(--text-primary)'
              }}
            >
              Full Stack MERN
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              MongoDB, Express.js, React, Node.js, TypeScript, RESTful APIs, Real-time applications
            </p>
          </div>

          <div>
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                marginBottom: '1rem',
                color: 'var(--text-primary)'
              }}
            >
              Backend Architecture
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              FastAPI, Node.js, MongoDB, PostgreSQL, Redis, GraphQL, RESTful APIs
            </p>
          </div>

          <div>
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                marginBottom: '1rem',
                color: 'var(--text-primary)'
              }}
            >
              DevOps & Cloud
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Docker, AWS (S3, EC2), CI/CD pipelines, MLflow, Cloud deployment
            </p>
          </div>

          <div>
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                marginBottom: '1rem',
                color: 'var(--text-primary)'
              }}
            >
              Security
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              OAuth2, JWT, RBAC, Secure API design, Authentication flows
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="section"
        style={{
          textAlign: 'center',
          borderTop: '1px solid var(--border-subtle)'
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            marginBottom: '1.5rem',
            color: 'var(--text-primary)'
          }}
        >
          Let's Build Something Exceptional
        </h2>
        <p
          style={{
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}
        >
          Interested in collaborating on ML systems, backend architecture, or scalable solutions?
        </p>
        <Link to="/contact" className="btn btn-primary">
          Get In Touch
          <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
};

export default Home;
