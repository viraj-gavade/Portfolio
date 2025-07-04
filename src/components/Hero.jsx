import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './Hero.css';

const Hero = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/viraj-gavade',
      icon: <FaGithub className="social-icon" />
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/viraj-gavade-8877aa30b/',
      icon: <FaLinkedin className="social-icon" />
    },
    {
      name: 'Twitter',
      url: 'https://x.com/viraj_gavade',
      icon: <FaTwitter className="social-icon" />
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/_viraj.js/',
      icon: <FaInstagram className="social-icon" />
    },
    {
      name: 'Email',
      url: 'mailto:vrajgavade17@gmail.com',
      icon: <MdEmail className="social-icon" />
    }
  ];

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background"></div>
      
      {/* Decorative elements */}
      <div className="decorative-blob blob-primary"></div>
      <div className="decorative-blob blob-secondary"></div>
      
      <div className="hero-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1 className="hero-heading">
            👋 Hello, I'm <span className="highlight-primary">Viraj Gavade</span>
          </h1>
          
          <motion.h2 
            className="hero-subheading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Full Stack Developer & AI/ML Learner
          </motion.h2>
          
          <motion.div 
            className="social-links-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.name}
              >
                <span className="social-icon-wrapper">{social.icon}</span>
                <span className="social-name">{social.name}</span>
              </a>
            ))}
          </motion.div>
            <motion.div 
            className="cta-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <a href="#projects" className="cta-button primary-button">
              View Projects
            </a>
            <a href="#certifications" className="cta-button secondary-button">
              My Certifications
            </a>
            <a href="#about" className="cta-button secondary-button">
              About Me
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <svg className="scroll-icon" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
