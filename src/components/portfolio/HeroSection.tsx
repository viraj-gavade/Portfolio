import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const socialLinks = [
  { icon: Github, href: "https://github.com/viraj-gavade", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/viraj-gavade-8877aa30b/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/viraj_gavade", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/_viraj.js/", label: "Instagram" },
  { icon: Mail, href: "mailto:vrajgavade17@gmail.com", label: "Email" },
];

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-accent/30 rounded-full blur-2xl float-animation" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="block text-foreground">👋 Hello, I'm</span>
            <span className="block gradient-text">Viraj Gavade</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Full Stack Developer & AI/ML Learner
          </p>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            I'm a passionate Full Stack Developer with a strong grip on building full-stack web apps that scale. 
            I'm also diving deep into Machine Learning—curious about how data can drive real-world solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="px-8 py-3 text-lg glow-effect hover-scale">
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg hover-scale">
              <a href="#certifications">My Certifications</a>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg hover-scale">
              <a href="#about">About Me</a>
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 border border-border hover:bg-primary hover:border-primary hover:scale-110 transition-all duration-300 glow-effect"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};