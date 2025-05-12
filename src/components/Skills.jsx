import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Skills.css';

const Skills = () => {
  const languages = [
    { name: 'Python', logo: 'python', color: '3776AB' },
    { name: 'C++', logo: 'cplusplus', color: '00599C' },
    { name: 'C', logo: 'c', color: 'A8B9CC' },
    { name: 'TypeScript', logo: 'typescript', color: '3178C6' },
    { name: 'JavaScript', logo: 'javascript', color: 'F7DF1E' },
  ];
  
  const frameworks = [
    { name: 'React', logo: 'react', color: '61DAFB' },
    { name: 'Node.js', logo: 'nodejs', color: '339933' },
    { name: 'Express', logo: 'express', color: '000000' },
    { name: 'NestJS', logo: 'nestjs', color: 'E0234E' },
    { name: 'Flask', logo: 'flask', color: '000000' },
    { name: 'Tailwind CSS', logo: 'tailwindcss', color: '06B6D4' },
    { name: 'Bootstrap', logo: 'bootstrap', color: '563D7C' },
    { name: 'HTML5', logo: 'html5', color: 'E34F26' },
    { name: 'CSS3', logo: 'css3', color: '1572B6' },
    { name: 'GraphQL', logo: 'graphql', color: 'E10098' },
  ];
  
  const databases = [
    { name: 'MongoDB', logo: 'mongodb', color: '47A248' },
    { name: 'MySQL', logo: 'mysql', color: '4479A1' },
    { name: 'PostgreSQL', logo: 'postgresql', color: '336791' },
    { name: 'SQLite', logo: 'sqlite', color: '003B57' },
  ];
  
  const tools = [
    { name: 'Docker', logo: 'docker', color: '2496ED' },
    { name: 'Prisma', logo: 'prisma', color: '2D3748' },
    { name: 'Postman', logo: 'postman', color: 'FF6C37' },
    { name: 'Git', logo: 'git', color: 'F05032' },
    { name: 'Vercel', logo: 'vercel', color: '000000' },
    { name: 'Netlify', logo: 'netlify', color: '00C7B7' },
    { name: 'Firebase', logo: 'firebase', color: 'FFCA28' },
    { name: 'Linux', logo: 'linux', color: 'FCC624' },
    { name: 'AWS', logo: 'amazonaws', color: '232F3E' },
  ];
  
  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12,
        duration: 0.5 
      }
    }
  };

  // Enhanced skill rendering with hover effects and better accessibility
  const renderSkills = (skills) => (
    <motion.div 
      className="skills-grid"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {skills.map((skill) => (
        <motion.div 
          key={skill.name} 
          className="skill-item"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.05,
            rotate: 1,
            transition: { duration: 0.2 }
          }}
          tabIndex={0}
          role="button"
          aria-label={`Skill: ${skill.name}`}
        >
          <div className="skill-badge">
            <LazyLoadImage
              effect="blur"
              src={`https://img.shields.io/badge/${skill.name}-${skill.color}?style=flat-square&logo=${skill.logo}&logoColor=white`}
              alt={`${skill.name} skill badge`}
              className="skill-image"
              placeholderSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 className="skills-title">
            💻 Technical Skills
          </motion.h2>
          <motion.p className="skills-description">
            Here are some technologies I've been working with recently
          </motion.p>
        </motion.div>

        <div className="skills-categories">
          {[
            { title: "Languages", data: languages },
            { title: "Frameworks & Libraries", data: frameworks },
            { title: "Databases", data: databases },
            { title: "Tools & Technologies", data: tools }
          ].map((category, index) => (
            <motion.div 
              key={category.title} 
              className="skills-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="category-title">{category.title}</h3>
              {renderSkills(category.data)}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
