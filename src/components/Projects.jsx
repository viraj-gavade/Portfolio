import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [visibleProject, setVisibleProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "VideoTube-Backend",
      description: "Scalable video platform backend built with modern best practices",
      githubLink: "https://github.com/viraj-gavade/VideoTube-Backend",
      demoLink: 'https://videotubeapi-uukxbf8d.b4a.run./home',
      features: [
        "🔐 Secure user authentication with JWT and password hashing",
        "🎥 Video upload and storage integration with Cloudinary",
        "👥 Social features: comments, likes, and channel subscriptions",
        "🛡️ Role-based access control for secure operations",
        "📊 Optimized database queries and pagination",
        "🚀 Efficient caching for improved performance",
        "📝 Complete CRUD operations for video management"
      ],
      tags: ["Node.js", "Express", "MongoDB", "JWT", "Cloudinary"]
    },
    {
      id: 2,
      title: "Thriftify",
      description: "A modern, scalable e-commerce platform for buying and selling secondhand goods.",
      githubLink: "https://github.com/viraj-gavade/Thriftify",
      demoLink: 'https://thriftify.onrender.com',
      features: [
        "🔐 Secure user authentication with JWT and password hashing",
        "🛒 Order management system with tracking of customer orders and status",
        "📦 Cart functionality with the ability to add, update, and remove items from the cart",
        "💳 Integration with payment gateways for processing orders",
        "🛒 Item listing and categorization for easy browsing",
        "💬 Real-time messaging feature between buyers and sellers",
        "📦 Product image upload and storage integration with Cloudinary",
        "🛡️ Role-based access control for admin and user privileges"
      ],
      tags: ["EJS", "Node.js", "Express", "MongoDB", "Cloudinary"]
    },
   
    {
      id: 4,
      title: "Blogify - Full Stack Blogging Platform",
      description: "A modern full-stack blogging platform built with React and Node.js, featuring Google OAuth authentication and a clean, responsive UI",
      githubLink: "https://github.com/viraj-gavade/Blogging-Website",
      demoLink: 'https://blogging-website-exjz.onrender.com/',
      features: [
  "🎨 Modern, responsive UI built with Tailwind CSS for a clean user experience",
  "⚡ Real-time feedback using toast notifications for instant user interaction",
  "💫 Smooth animations and transitions for a polished feel",
  "🌙 Dark mode support for better accessibility and user preference",
  "🔐 Google OAuth2 and email/password authentication for flexible sign-in options",
  "🛡️ Secure user sessions powered by JWT for reliable auth flow",
  "📝 Create rich blog posts with support for image uploads and markdown",
  "🖼️ Image preview feature before publishing blog content",
  "💬 Real-time comment system to boost community interaction",
  "👁️ Show/hide password toggle for better password security and UX"
]
,
      tags: ["Node.js",'React.js', "Express", "MongoDB", "JWT",'Oath2',]
    },
    {
      id: 5,
      title: "Password Generator",
      description: "A simple, secure password generator with customizable parameters for generating strong passwords.",
      githubLink: "https://github.com/viraj-gavade/BookStore-Api",
      demoLink: 'https://password-generator-lime-tau-95.vercel.app',
      features: [
      "🔑 Generate strong, random passwords with customizable length and complexity",
        "🔒 Secure password storage using local storage",
        "🌐 Responsive design for mobile and desktop compatibility",
        "🎨 User-friendly interface with clear instructions and feedback",
        "💡 Copy-to-clipboard functionality for easy password sharing",
        "🔄 Regenerate passwords with a single click",
        "🛠️ Customizable settings for password length and character types",
        "📜 Password history feature to keep track of generated passwords"
      ],
      tags: ["React.js", "JavaScript",'Tailwind CSS','Vite.js']

    },
   
  ];

  const toggleProject = (id) => {
    if (visibleProject === id) {
      setVisibleProject(null);
    } else {
      setVisibleProject(id);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.h2 
          className="projects-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          🏆 Featured Projects
        </motion.h2>

        <motion.div 
          className="projects-grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={item}
              className="project-card"
            >
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="project-actions">
                  <button 
                    onClick={() => toggleProject(project.id)} 
                    className="project-details-button"
                  >
                    {visibleProject === project.id ? 'Hide details' : 'Show details'}
                  </button>
                  
                  <div className="project-links">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FaGithub className="project-icon" />
                    </a>
                    {project.demoLink && (
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={`View ${project.title} demo`}
                      >
                        <FaExternalLinkAlt className="project-icon" />
                      </a>
                    )}
                  </div>
                </div>
                
                {visibleProject === project.id && (
                  <motion.div 
                    className="project-features"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="features-title">Key Features:</h4>
                    <ul className="features-list">
                      {project.features.map((feature, index) => (
                        <li key={index} className="feature-item">
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
