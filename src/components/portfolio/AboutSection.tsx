import { Card } from "@/components/ui/card";
import { Code, Database, Brain, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Expert in MERN stack with focus on scalable architectures"
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Building intelligent systems with TensorFlow and Scikit-learn"
  },
  {
    icon: Database,
    title: "API Architecture",
    description: "RESTful APIs, GraphQL services, and microservices design"
  },
  {
    icon: Rocket,
    title: "Cloud Deployment",
    description: "Experienced with AWS, Vercel, Railway, and containerization"
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a second year Computer Science undergraduate with over 1 year of hands-on coding experience, primarily in JavaScript and full-stack development. My journey started with building web applications and scalable solutions, and now I'm diving deep into AI and machine learning, exploring intelligent systems and data-driven technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">What I Do</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">Build scalable full-stack applications with MongoDB, Express, React, Node.js</span>
              </li>
                <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">Develop ML models for classification, regression & NLP</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">Design and optimize RESTful APIs & GraphQL services</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">Implement secure authentication systems (OAuth2, JWT, RBAC)</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">Deploy ML models as APIs with FastAPI and Flask</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Current Focus</h3>
            <div className="space-y-4">
              <div className="p-4 bg-card/50 rounded-lg border border-border">
                <h4 className="font-medium text-primary mb-2">🤖 ML APIs & Model Deployment</h4>
                <p className="text-sm text-muted-foreground">Building scalable machine learning APIs and exploring MLOps practices</p>
              </div>
              <div className="p-4 bg-card/50 rounded-lg border border-border">
                <h4 className="font-medium text-primary mb-2">🧠 NLP & Computer Vision</h4>
                <p className="text-sm text-muted-foreground">Deepening expertise in natural language processing and computer vision</p>
              </div>
              <div className="p-4 bg-card/50 rounded-lg border border-border">
                <h4 className="font-medium text-primary mb-2">🌐 Microservices Architecture</h4>
                <p className="text-sm text-muted-foreground">Exploring scalable system design and distributed architectures</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="p-6 bg-card/50 border-border hover:bg-card/80 transition-all duration-300 hover:scale-105 gradient-border">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <highlight.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
              <p className="text-sm text-muted-foreground">{highlight.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};