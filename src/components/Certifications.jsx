import { useState } from 'react';
import { motion } from 'framer-motion';
import './Certifications.css';


const Certifications = () => {
  const certificationsList = [
      {
        id: 1,
        title: "Complete Web Development Course",
        issuer: "Udemy - Hitesh Choudhary",
        date: "July 2025",
        url: "https://www.udemy.com/certificate/UC-a6ed8df9-572c-4ee0-994c-e8e53026571f/",
        skills: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
        image: "src/assets/web-dev-cert.jpg", // Add your certificate image path here
        description: "Comprehensive course covering full-stack web development with modern technologies including React, Node.js, and MongoDB."
      },
      {
        id: 2,
        title: "Machine Learning Specialization",
        issuer: "Coursera - DeepLearning.AI",
        date: "April 2025",
        url: "https://coursera.org/share/16418c4b4fee42012a01c5e69c7badc5",
        skills: ["Machine Learning", "Neural Networks", "Artificial Intelligence", "Python"],
        image: "src/assets/mlsepcaialaziton.jpeg", // Add your certificate image path here
        description: "Advanced specialization covering machine learning algorithms, neural networks, and AI fundamentals with practical projects."
      },
      {
        id: 3,
        title: "Python for Data Science, AI & Development",
        issuer: "IBM",
        date: "February 2025",
        credentialId: "DYJDEFMYBCJN",
        url: "https://www.coursera.org/account/accomplishments/verify/DYJDEFMYBCJN",
        skills: ["Numpy", "Pandas", "Seaborn", "Matplotlib", "Python"],
        image: "src/assets/aidswithpythoncert.jpeg", // Add your certificate image path here
        description: "Industry-recognized certification focusing on Python libraries and tools for data science and AI applications."
      },
  ];

  const [expandedCert, setExpandedCert] = useState(null);

  const toggleExpand = (id) => {
    if (expandedCert === id) {
      setExpandedCert(null);
    } else {
      setExpandedCert(id);
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
    <section id="certifications" className="certifications-section">
      <div className="certifications-container">
        <motion.h2 
          className="certifications-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          🏆 Certifications & Achievements
        </motion.h2>
        
        <motion.div
          className="certifications-grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certificationsList.map((cert) => (
            <motion.div 
              key={cert.id} 
              variants={item}
              className="certification-card"
            >
              {cert.image && (
                <div className="certification-image-container">
                  <img 
                    src={cert.image} 
                    alt={`${cert.title} Certificate`} 
                    className="certification-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/certificates/default-cert.jpg"; // Fallback image
                    }}
                  />
                </div>
              )}
              <div className="certification-content">
                <h3 className="certification-title">{cert.title}</h3>
                <div className="certification-meta">
                  <p className="certification-issuer">{cert.issuer}</p>
                  <p className="certification-date">{cert.date}</p>
                </div>
                
                {cert.description && (
                  <p className="certification-description">{cert.description}</p>
                )}
                
                <button 
                  onClick={() => toggleExpand(cert.id)} 
                  className="certification-details-button"
                >
                  {expandedCert === cert.id ? 'Show less' : 'Show more'}
                </button>
                
                {expandedCert === cert.id && (
                  <motion.div 
                    className="certification-details"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {cert.credentialId && (
                      <p className="credential-id">Credential ID: {cert.credentialId}</p>
                    )}
                    <div className="certification-skills">
                      <h4>Skills</h4>
                      <div className="skills-tags">
                        {cert.skills.map((skill) => (
                          <span key={skill} className="skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="certification-actions">
                      <a 
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="view-certificate-button"
                      >
                        View Certificate
                      </a>
                    </div>
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

export default Certifications;
