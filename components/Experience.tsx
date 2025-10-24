import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Software Developer",
    company: "Landmark Technologies sh.p.k",
    period: "11/2024 – Present",
    description: [
      "Built React.js and Next.js applications implementing SSR/SSG, Hybrid dynamic routing, reusable UI components, and optimized build configurations to enhance scalability and performance.",
      "Lead development of custom WordPress themes and plugins, ensuring secure, scalable, and user-friendly solutions.",
      "Optimized site performance and SEO, improving page load speed and user engagement."
    ]
  },
  {
    title: "Full Stack Software Developer",
    company: "Trokit Agency Creative",
    period: "08/2022 – 10/2024",
    description: [
      "Built and optimized backend systems in PHP/Laravel, implementing RESTful APIs, authentication middleware, and workflow automation to improve client operations and site management efficiency.",
      "Engineered dynamic front-end interfaces with JavaScript and jQuery, implementing modular UI components, AJAX-based data loading, and performance optimizations for responsive and interactive user interactions.",
      "Strengthened platform security and reduced downtime through proactive maintenance and optimization."
    ]
  },
  {
    title: "Full Stack Software Developer",
    company: "The Faktory Group",
    period: "05/2021 – 07/2022",
    description: [
      "Worked with eCommerce platforms such as WooCommerce and PrestaShop, implementing custom payment workflows, product management features, and performance optimizations.",
      "Collaborated with designers and cross-functional teams to align technical solutions with business goals, occasionally assuming project management responsibilities to oversee timelines and deliverables."
    ]
  },
  {
    title: "Junior Full Stack Software Developer",
    company: "Ads Group",
    period: "09/2019 – 04/2021",
    description: [
      "Advanced from Intern to Junior Developer, contributing to the development of custom WordPress themes and plugin enhancements tailored to client needs.",
      "Acquired practical experience integrating third-party APIs and external services, improving site functionality and performance.",
      "Supported senior developers and learned the full project workflow from initial planning and development to final delivery and deployment."
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            6+ years of professional software development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-shadow duration-300">
                    <Briefcase className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                      <span className="font-medium text-accent">{exp.company}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
