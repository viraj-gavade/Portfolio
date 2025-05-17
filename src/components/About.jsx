import { motion } from 'framer-motion';
import { 
  FaServer, FaLock, FaBrain, FaCloudUploadAlt, 
  FaBoxOpen, FaCode, FaDatabase, FaGithub, FaTrophy, FaLightbulb
} from 'react-icons/fa';
import './About.css';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const whatIDo = [
    { 
      icon: <FaServer className="about-icon" />, 
      text: "Build full-stack apps using MongoDB, Express, React, and Node.js" 
    },
    { 
      icon: <FaCode className="about-icon" />, 
      text: "Design RESTful APIs and GraphQL services" 
    },
    { 
      icon: <FaLock className="about-icon" />, 
      text: "Implement secure authentication systems (OAuth2, JWT)" 
    },
    { 
      icon: <FaBrain className="about-icon" />, 
      text: "Explore ML concepts like classification, regression & NLP" 
    },
    { 
      icon: <FaCloudUploadAlt className="about-icon" />, 
      text: "Deploy apps using cloud platforms (Vercel, Back4App, Railway)" 
    },
    { 
      icon: <FaBoxOpen className="about-icon" />, 
      text: "Work with microservices and scalable backends" 
    }
  ];

  const currentFocus = [
    { 
      icon: <FaDatabase className="about-icon" />, 
      text: "Deepening knowledge in Data Structures & Algorithms" 
    },
    { 
      icon: <FaServer className="about-icon" />, 
      text: "Exploring microservices architectures" 
    },
    { 
      icon: <FaGithub className="about-icon" />, 
      text: "Contributing to open-source projects" 
    },
    { 
      icon: <FaTrophy className="about-icon" />, 
      text: "Participating in hackathons and tech competitions" 
    },
    { 
      icon: <FaLightbulb className="about-icon" />, 
      text: "Building scalable TypeScript applications" 
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div 
          className="about-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
        >
          <motion.h2 className="about-title">
            <span className="about-title-icon">🚀</span> About
          </motion.h2>
        </motion.div>

        <div className="about-content-wrapper">
          <motion.div 
            className="about-intro-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeIn}
          >
            <p className="about-intro">
              I'm a passionate <span className="highlight">Full Stack Developer</span> with a strong grip on building 
              full-stack web apps that scale. I'm also diving deep into <span className="highlight">Machine Learning</span>
              —curious about how data can drive real-world solutions. I love building things that actually solve problems.
            </p>
          </motion.div>

          <div className="about-grid">
            <motion.div 
              className="about-main-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              variants={fadeIn}
            >
              <h3 className="about-subtitle">What I Do</h3>
              
              <motion.ul 
                className="about-list"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {whatIDo.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="about-list-item"
                    variants={fadeIn}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="about-list-icon">{item.icon}</span>
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div 
              className="about-sidebar"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              variants={fadeIn}
            >
              <h3 className="about-subtitle">Current Focus</h3>
              
              <motion.ul 
                className="about-list focus-list"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {currentFocus.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="about-list-item"
                    variants={fadeIn}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="about-list-icon">{item.icon}</span>
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
