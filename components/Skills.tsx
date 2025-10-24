import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code2, Database, Globe } from "lucide-react";

const skillCategories = [
  {
    icon: Globe,
    title: "Frontend Development",
    skills: ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind", "JavaScript", "jQuery", "React.js", "Next.js", "TypeScript"]
  },
  {
    icon: Database,
    title: "Backend Development",
    skills: ["PHP", "Laravel", "WordPress", "WooCommerce", "PrestaShop", "REST API", "Ajax"]
  },
  {
    icon: Code2,
    title: "Expertise",
    skills: ["End-to-End Digital Solutions", "e-Commerce Integrations", "Speed Optimization", "Cross-Team Collaboration", "Project Management"]
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            Full-stack development with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-shadow duration-300">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-secondary hover:bg-primary/20 transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
