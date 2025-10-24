import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  { name: "Auris Mall", url: "https://aurismall.com/" },
  { name: "Morphinity 3D", url: "https://morphinity3d.com/" },
  { name: "Sportas Shop", url: "https://sportas.shop/" },
  { name: "Trust Noted", url: "https://trustnoted.com/" },
  { name: "Trokit", url: "https://trokit.com/" },
  { name: "Multinet Com", url: "https://multinetcom.ch/" }
];

const Projects = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            A selection of websites and applications I've built
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-2xl font-bold text-primary-foreground group-hover:shadow-glow transition-shadow duration-300">
                  {project.name.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {project.name}
                </h3>
                <Button
                  variant="outline"
                  className="w-full border-primary/50 hover:bg-primary/10 transition-smooth"
                  asChild
                >
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    Visit Site
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
