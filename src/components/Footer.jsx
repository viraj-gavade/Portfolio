import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FiArrowUp } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/viraj-gavade',
      icon: <FaGithub className="footer-icon" />
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/viraj-gavade-8877aa30b/',
      icon: <FaLinkedin className="footer-icon" />
    },
    {
      name: 'Twitter',
      url: 'https://x.com/viraj_gavade',
      icon: <FaTwitter className="footer-icon" />
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/_viraj.js/',
      icon: <FaInstagram className="footer-icon" />
    },
    {
      name: 'Email',
      url: 'mailto:vrajgavade17@gmail.com',
      icon: <MdEmail className="footer-icon" />
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <h2 className="footer-logo">
              <span className="viraj">Viraj</span> <span className="gavade">Gavade</span>
            </h2>
            <p className="footer-tagline">MERN Stack Developer & API Architect</p>
            <div className="footer-social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#hero" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#skills" className="footer-link">Skills</a></li>
              <li><a href="#projects" className="footer-link">Projects</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="footer-heading">Get in Touch</h3>
            <p className="footer-text">
              I'm always interested in collaborating on innovative projects and discussing tech opportunities!
            </p>
            <a 
              href="mailto:vrajgavade17@gmail.com"
              className="footer-contact-button"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} Viraj Gavade. All rights reserved.
          </div>
          <div className="footer-made-with">
            Made with <FaHeart className="heart-icon" /> Happy Coding! 👨‍💻
          </div>
        </div>
      </div>
      
      <button 
        className="scroll-top-btn" 
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FiArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
