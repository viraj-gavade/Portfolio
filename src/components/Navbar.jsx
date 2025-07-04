import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiArrowUp } from 'react-icons/fi';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  // Define navLinks before using it in useEffect
  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Certifications", to: "certifications" },
    { name: "Contact", to: "footer" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 300);
      
      // Determine active section based on scroll position
      const sections = navLinks.map(link => link.to);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };
      
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''} navbar-dark`}>
        <div className="navbar-container">
          <div className="navbar-content">
            <div className="navbar-logo">
              <Link to="hero" smooth={true} duration={500} className="logo-text">
                Viraj Gavade
              </Link>
            </div>
            
            {/* Desktop navigation */}
            <div className="desktop-nav">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className={`nav-link ${activeSection === link.to ? 'nav-active' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
                </div>
            
            {/* Mobile menu button */}
            <div className="mobile-nav-buttons">
              <button
                onClick={toggleMenu}
                className="menu-toggle-btn"
                aria-label="Toggle menu"
              >
                {isOpen ? <FiX className="icon-close" /> : <FiMenu className="icon-menu" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`mobile-menu ${isOpen ? 'mobile-menu-active' : ''}`}>
          <div className="mobile-menu-content">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsOpen(false)}
                className={`mobile-nav-link ${activeSection === link.to ? 'nav-active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Scroll to top button */}
      <button 
        className={`scroll-to-top ${showScrollTop ? 'scroll-to-top-visible' : ''}`} 
        onClick={scrollToTop}
        aria-label="Scroll to top"
        tabIndex={showScrollTop ? 0 : -1}
      >
        <FiArrowUp className="scroll-to-top-icon" />
      </button>
    </>
  );
};

export default Navbar;
