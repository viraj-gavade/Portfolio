import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "Python", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 88 },
      { name: "Node.js", level: 85 },
      { name: "Express", level: 82 },
      { name: "NestJS", level: 78 },
      { name: "FastAPI", level: 80 },
    ]
  },
  {
    title: "Machine Learning & Data Science",
    skills: [
      { name: "TensorFlow", level: 82 },
      { name: "Scikit-learn", level: 85 },
      { name: "Pandas", level: 88 },
      { name: "NumPy", level: 85 },
      { name: "NLTK", level: 78 },
      { name: "Matplotlib", level: 80 },
    ]
  },
  {
    title: "Databases & Tools",
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "PostgreSQL", level: 82 },
      { name: "MySQL", level: 80 },
      { name: "Docker", level: 75 },
      { name: "Git", level: 88 },
      { name: "AWS", level: 70 },
    ]
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning full-stack development, machine learning, and cloud technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="p-6 bg-card/50 border-border gradient-border">
              <h3 className="text-xl font-semibold mb-6 text-center gradient-text">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1.3k+</div>
              <div className="text-sm text-muted-foreground">GitHub Commits</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};