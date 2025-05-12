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
      demoLink: null,
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
      demoLink: null,
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
      id: 3,
      title: "Password Generator",
      description: "A simple, secure password generator with customizable parameters for generating strong passwords.",
      githubLink: "https://github.com/viraj-gavade/Password-Generator",
      demoLink: null,
      features: [
        "🔒 Generates secure, random passwords with customizable length and character types",
        "🎛️ User interface for selecting password complexity (uppercase, lowercase, numbers, symbols)",
        "⚡ Fast password generation with optimized algorithms",
        "💻 Built with modern JavaScript (ES6+) for a smooth user experience",
        "📜 Password history and copy-to-clipboard functionality for ease of use"
      ],
      tags: ["JavaScript", "HTML", "CSS", 'React']
    },
    {
      id: 4,
      title: "E-Commerce API",
      description: "A robust RESTful API for managing e-commerce operations, including products, orders, and users.",
      githubLink: "https://github.com/viraj-gavade/e-commerce-api",
      demoLink: null,
      features: [
        "🔐 Secure authentication with JWT and password hashing for user login and registration",
        "📊 Optimized database queries for fast product search and order retrieval",
        "🛡️ Role-based access control (RBAC) for admin and customer management",
        "🧑‍💻 Clean, maintainable code following best practices with Express.js and MongoDB"
      ],
      tags: ["Node.js", "Express", "MongoDB", "JWT"]
    },
    {
      id: 5,
      title: "URL-Shortener",
      description: "Efficient URL shortening service",
      githubLink: "https://github.com/viraj-gavade/Url-Shortner",
      demoLink: null,
      features: [
        "⚡ Fast redirection system",
        "🔒 Secure custom URL generation",
        "🎯 API rate limiting"
      ],
      tags: ["Node.js", "Express", "MongoDB"]
    },
    {
      id: 6,
      title: "Task Manager-TS",
      description: "Modern task management application built with TypeScript and Express",
      githubLink: "https://github.com/viraj-gavade/Task-Manager-TS",
      demoLink: null,
      features: [
        "🔐 JWT authentication and authorization",
        "📝 CRUD operations for tasks and users",
        "🎯 TypeScript for enhanced type safety and developer experience",
        "📊 MongoDB integration with Mongoose ODM",
        "✨ Clean architecture with middleware implementation"
      ],
      tags: ["TypeScript", "Express", "MongoDB", "JWT"]
    }
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
