import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { personalInfo } from '../mock';

const Footer = () => {
  const socialLinks = [
    { icon: Github, url: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, url: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Twitter, url: personalInfo.twitter, label: 'Twitter' },
    { icon: Mail, url: `mailto:${personalInfo.email}`, label: 'Email' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        {/* Social Links */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                style={{
                  color: 'var(--text-muted)',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--text-primary)';
                  e.target.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'var(--text-muted)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>

        {/* Content Divider */}
        <div style={{ height: '1px', background: 'var(--border-subtle)', margin: '2rem 0' }} />

        {/* Footer Content */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <p style={{ margin: '0 0 0.75rem 0', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
            {personalInfo.name}
          </p>
          <p style={{ margin: '0 0 1rem 0', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            {personalInfo.headline}
          </p>
          <a
            href={`mailto:${personalInfo.email}`}
            style={{
              fontSize: '0.875rem',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
          >
            {personalInfo.email}
          </a>
        </div>

        {/* Copyright */}
        <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-dim)', textAlign: 'center' }}>
          © {currentYear} Viraj Gavade. All rights reserved. | Built with React, Tailwind CSS & Framer Motion
        </p>
      </div>
    </footer>
  );
};

export default Footer;
