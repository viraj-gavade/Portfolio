import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Thriftify",
    description: "A modern, scalable e-commerce platform for buying and selling secondhand goods with real-time messaging, payment integration, and location-based search.",
    tech: ["EJS", "Node.js", "Express", "MongoDB", "Cloudinary"],
    github: "https://github.com/viraj-gavade/Thriftify",
    live: "https://thriftify.onrender.com/",
    color: "from-primary to-secondary"
  },
  {
    title: "Blogify - Full Stack Blogging Platform",
    description: "A modern full-stack blogging platform built with React and Node.js, featuring Google OAuth authentication and a clean, responsive UI.",
    tech: ["Node.js", "React.js", "Express", "MongoDB", "JWT", "OAuth2"],
    github: "https://github.com/viraj-gavade/Blogging-Website",
    live: "https://blogging-website-exjz.onrender.com/",
    color: "from-secondary to-accent"
  },
  {
    title: "StudyShare",
    description: "A full-stack platform that allows students to upload, share, and discover academic resources with AWS S3 integration for file storage.",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "AWS S3", "TailwindCSS"],
    github: "https://github.com/viraj-gavade/STUDY-SHARE",
    live: "https://study-share-frontend.onrender.com/",
    color: "from-accent to-primary"
  },
  {
    title: "Network Security ML",
    description: "Machine learning system for network intrusion detection using Random Forest and Isolation Forest algorithms with FastAPI deployment.",
    tech: ["Python", "Scikit-learn", "FastAPI", "Docker", "MLflow", "Pandas"],
    github: "https://github.com/viraj-gavade/Network-Security-Machine-Learning-Project",
    live: "#",
    color: "from-primary to-accent"
  },
  {
    title: "Heart Disease Prediction",
    description: "ML-powered web app predicting heart disease risk using Logistic Regression with interactive visualizations and mobile-responsive design.",
    tech: ["Python", "Scikit-learn", "FastAPI", "Chart.js", "Docker", "Render"],
    github: "https://github.com/viraj-gavade/Heart-disease-Prediction-using-Machine-Learning",
    live: "#",
    color: "from-secondary to-primary"
  },
  {
    title: "Conversational PDF Chatbot",
    description: "RAG-based chatbot using LangChain and HuggingFace embeddings that allows users to upload PDFs and chat with their content.",
    tech: ["Python", "LangChain", "Streamlit", "ChromaDB", "HuggingFace", "RAG"],
    github: "https://github.com/viraj-gavade/End-to-end-Conversational-chatbot-with-pdf-and-chat-history",
    live: "#",
    color: "from-accent to-secondary"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my latest work in full-stack development and machine learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card/50 border-border hover:bg-card/80 transition-all duration-300 group gradient-border animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="ghost" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    {project.live !== "#" && (
                      <Button size="sm" variant="ghost" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={`h-1 w-full rounded-full bg-gradient-to-r ${project.color} opacity-60`}></div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/viraj-gavade" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>

        {/* GitHub Stats */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-8 gradient-text">GitHub Analytics</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <img
                src="https://github-readme-stats.vercel.app/api?username=viraj-gavade&show_icons=true&theme=dark&bg_color=0f172a&title_color=3b82f6&text_color=e2e8f0&icon_color=3b82f6"
                alt="GitHub Stats"
                className="rounded-lg mx-auto"
              />
            </div>
            <div className="text-center">
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=viraj-gavade&theme=dark&background=0f172a&ring=3b82f6&fire=3b82f6&currStreakLabel=e2e8f0"
                alt="GitHub Streak"
                className="rounded-lg mx-auto"
              />
            </div>
            <div className="text-center">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs?username=viraj-gavade&show_icons=true&locale=en&layout=compact&theme=dark&bg_color=0f172a&title_color=3b82f6&text_color=e2e8f0"
                alt="Top Languages"
                className="rounded-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};