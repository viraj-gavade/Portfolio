import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [visibleProject, setVisibleProject] = useState(null);  const [activeCategory, setActiveCategory] = useState('web');
  // Function to handle category change
  const handleCategoryChange = (category) => {
    // Only change category if it's different from current
    if (category !== activeCategory) {
      // Reset visible project to avoid UI issues during transition
      setVisibleProject(null);
      // Set the active category immediately
      setActiveCategory(category);
    }
  };
    const webProjects = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      ],
      tags: ["Node.js", "React.js", "Express", "MongoDB", "JWT", "OAuth2"]
    }
  ];
  
  const mlProjects = [
    {
      id: 5,
      title: "Heart Disease Prediction System",
      description: "Machine learning model that predicts heart disease probability based on patient medical data",
      githubLink: "https://github.com/viraj-gavade/Heart-Disease-Prediction-using-Machine-Learning",
      demoLink: 'https://heart-disease-2gln.onrender.com',
      features: [
        "💓 Logistic Regression model trained on UCI Heart Disease dataset with 83.9% accuracy",
        "🔍 Feature importance analysis to identify key heart disease indicators",
        "📊 Data preprocessing including normalization and missing value handling",
        "📈 Exploratory data analysis revealing patterns in cardiovascular health factors",
        "📋 Support for medical parameters like cholesterol, blood pressure, and chest pain type",
        "⚙️ Streamlined ML pipeline from data cleaning to model evaluation",
        "🧪 Model validation using accuracy metrics and confusion matrix"
      ],
      tags: ["Python", "Scikit-Learn", "Pandas", "Fastapi", "Machine Learning"]
    },
    {
      id: 6,
      title: "Forest Fire Weather Index Predictor",
      description: "An end-to-end machine learning solution that predicts forest fire risk based on meteorological data",
      githubLink: "https://github.com/viraj-gavade/Forest-Fire-Predictor-ML",
      demoLink: 'https://forest-fire-predictor-jou1.onrender.com',
      features: [
        "🔥 Trained Ridge Regression model for accurate Forest Fire Weather Index (FWI) predictions",
        "📊 Comprehensive data analysis and visualization of fire risk factors",
        "🌦️ Integration of weather parameters including temperature, humidity, wind speed, and rainfall",
        "💻 Interactive web interface built with Flask and Tailwind CSS for data input and prediction display",
        "📱 Responsive design that works across desktop and mobile devices",
        "📈 Data preprocessing pipeline with handling of missing values and feature scaling",
        "🔮 Color-coded risk level display for easy interpretation of prediction results"
      ],
      tags: ["Python", "Scikit-Learn", "Flask", "Pandas", "Numpy", "Tailwind CSS"]
    }
  ];
    // Get active projects based on category
  const projects = activeCategory === 'web' ? webProjects : mlProjects;

  const toggleProject = (id) => {
    if (visibleProject === id) {
      setVisibleProject(null);
    } else {
      setVisibleProject(id);
    }
  };
  
  // Force re-render of projects when category changes
  // This is a key fix for the blank screen issue

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

        {/* Category Toggle Buttons */}
        <motion.div 
          className="category-toggle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >          <button 
            className={`category-button ${activeCategory === 'web' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('web')}
          >
            💻 Web Development
          </button>
          <button 
            className={`category-button ${activeCategory === 'ml' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('ml')}
          >
            🤖 Machine Learning
          </button>
        </motion.div>        <motion.div
          className="projects-grid"
          key={activeCategory} // Add key prop to force re-render when category changes
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
        
        {/* Explore More Projects Section */}
        <motion.div
          className="explore-projects-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="explore-container">
            <h3 className="explore-title">Discover More Projects</h3>
            <p className="explore-description">
              These are just a few highlights from my portfolio. I've built many other projects including 
              password generators, URL shorteners, task managers, and more!
            </p>
            <a 
              href="https://github.com/viraj-gavade?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="explore-button"
            >
              View All Projects on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
