import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, ExternalLink } from "lucide-react";

const certifications = [
   {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    date: "August 2025",
    description: "Certification for expertise in Oracle Cloud Infrastructure and Generative AI, validating advanced skills in cloud-based AI solutions and generative models.",
    skills: ["Oracle Cloud", "Generative AI", "Cloud Infrastructure", "AI", "Machine Learning"],
    color: "from-primary to-accent",
    certificateUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=C1581D76C9B19EA7DD25C7E0D0A57626B4084DE7F3D3D1876D86990E100AEC3D"
  },
   {
    title: "Complete Data Science, Machine Learning, Deep Learning, NLP Bootcamp",
    issuer: "Udemy - Krish Naik",
    date: "August 2025",
    description: "Comprehensive bootcamp covering data science, machine learning, deep learning, and natural language processing. Includes hands-on projects, real-world datasets, and practical applications using Python, scikit-learn, TensorFlow, and NLP libraries.",
    skills: ["Python", "Data Science", "Machine Learning", "Deep Learning", "NLP", "TensorFlow", "scikit-learn", "Pandas", "Matplotlib"],
    color: "from-secondary to-accent",
    certificateUrl: "https://www.udemy.com/certificate/UC-90092cff-1746-4643-b394-515fa93e55b5/"
  },
  
  {
    title: "Complete Web Development Course",
    issuer: "Udemy - Hitesh Choudhary",
    date: "July 2025",
    description: "Comprehensive course covering full-stack web development with modern technologies including React, Node.js, and MongoDB.",
    skills: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "HTML/CSS"],
    color: "from-primary to-secondary",
    certificateUrl: "https://www.udemy.com/certificate/UC-a6ed8df9-572c-4ee0-994c-e8e53026571f/"
  },
 
  {
    title: "Machine Learning Specialization", 
    issuer: "Coursera - DeepLearning.AI",
    date: "April 2025",
    description: "Advanced specialization covering machine learning algorithms, neural networks, and AI fundamentals with practical projects.",
    skills: ["Machine Learning", "Neural Networks", "TensorFlow", "Python", "AI"],
    color: "from-accent to-primary",
    certificateUrl: "https://coursera.org/share/16418c4b4fee42012a01c5e69c7badc5"
  },
   {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "August 2025",
    description: "Certification for foundational knowledge in Oracle Cloud Infrastructure and AI, validating essential skills in cloud-based AI concepts and solutions.",
    skills: ["Oracle Cloud", "AI Foundations", "Cloud Infrastructure", "Artificial Intelligence"],
    color: "from-accent to-primary",
    certificateUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=A9319E065260D1AD88B8C2FF33925A707E7B4639148705740C474E4DF6AA75A8"
  },

  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    date: "Feb 2025", 
    description: "Industry-recognized certification focusing on Python libraries and tools for data science and AI applications.",
    skills: ["Python", "Pandas", "NumPy", "Data Science", "AI", "Jupyter"],
    color: "from-primary to-secondary",
    certificateUrl: "https://www.coursera.org/account/accomplishments/verify/DYJDEFMYBCJN"
  },
  {
  title: "Version Control",
  issuer: "Coursera | Meta",
  date: "May 2025",
  description: "Certification covering version control systems, Git, GitHub workflows, and command-line tools for managing code revisions.",
  skills: ["Version Control", "Git", "GitHub", "Command-Line", "Linux", "Software Versioning"],
  color: "from-primary to-secondary",
  certificateUrl: "https://coursera.org/share/a9bb484b74670fe6576c742bcf0184ce"
},
{
  title: "SQL for Data Science",
  issuer: "Coursera | University of California, Davis",
  date: "March 2025",
  description: "Online course covering SQL querying techniques, data manipulation, and relational database fundamentals for data science applications.",
  skills: ["Database Design", "Data Cleansing", "Data Analysis", "Data Manipulation", "Data Governance", "Relational Databases", "SQL"],
  color: "from-primary to-secondary",
  certificateUrl: "https://www.coursera.org/account/accomplishments/verify/1CZMKOTLY8ZL"
},
{
  title: "Prompt Engineering for ChatGPT",
  issuer: "Coursera | Vanderbilt University",
  date: "2025",
  description: "Course on crafting effective prompts for large language models like ChatGPT, covering prompt patterns and applications in AI development.",
  skills: ["Prompt Engineering", "Generative AI", "Large Language Modeling", "ChatGPT", "Artificial Intelligence", "Application Development"],
  color: "from-primary to-secondary",
  certificateUrl: "https://coursera.org/share/5cffd616b84a05222310fb30b5307daf"
}



];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card/50 border-border hover:bg-card/80 transition-all duration-500 group gradient-border animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                       <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors story-link">
                         {cert.certificateUrl ? (
                           <span className="flex items-center gap-2">
                             {cert.title}
                             <a
                               href={cert.certificateUrl}
                               target="_blank"
                               rel="noopener noreferrer"
                               className="inline-flex items-center justify-center h-7 w-7 rounded-md hover:bg-accent transition-colors pointer-events-auto z-10 ml-1"
                               aria-label={`Open certificate for ${cert.title}`}
                               style={{ pointerEvents: 'auto', zIndex: 10 }}
                             >
                               <ExternalLink className="w-4 h-4" />
                             </a>
                           </span>
                         ) : (
                           cert.title
                         )}
                       </h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center space-x-2">
                          <Award className="w-4 h-4 text-primary" />
                          <span>{cert.issuer}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-3 lg:flex-col lg:space-x-0 lg:space-y-3">
                  <div className={`h-24 w-1 lg:h-1 lg:w-24 rounded-full bg-gradient-to-r ${cert.color} opacity-60`}></div>
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">Continuous Learning Journey</h3>
            <p className="text-muted-foreground mb-8">
              I believe in staying updated with the latest technologies and best practices. 
              These certifications represent my commitment to professional growth and excellence in development.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 bg-card/30 rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-2">7+</div>
                <div className="text-sm text-muted-foreground">Certifications Earned</div>
              </div>
              <div className="text-center p-6 bg-card/30 rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-2">300+</div>
                <div className="text-sm text-muted-foreground">Hours of Learning</div>
              </div>
              <div className="text-center p-6 bg-card/30 rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Skills Acquired</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};