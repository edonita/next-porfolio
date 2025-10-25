import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent">
            Education
          </h2>
        </div>

        <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-shadow duration-300">
              <GraduationCap className="w-8 h-8 text-primary-foreground" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                Bachelor's in Software Engineering
              </h3>
              <p className="text-lg text-accent mb-1">AAB College</p>
              <p className="text-muted-foreground">Prishtina, Kosovo • 2017 – 2020</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Education;
