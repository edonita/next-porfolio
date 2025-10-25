import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent">
            About Me
          </h2>
        </div>

        <Card className="p-8 md:p-12 bg-card border-border shadow-card">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Full Stack Software Developer with 6 years of experience building dynamic websites and applications. 
              Skilled in backend development with PHP and Laravel, and frontend development with React.js, Next.js, 
              Tailwind CSS, JavaScript and jQuery.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experienced in collaborating with agencies and clients to deliver scalable, user-friendly and secure 
              websites. Proficient in WordPress theme and plugin development, WooCommerce customization and API 
              integrations. Focused on delivering secure, optimized and user-friendly digital solutions.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
