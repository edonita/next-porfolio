import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg">
            Open to new opportunities and collaborations
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card border-border shadow-card">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a
                    href="mailto:edonitaberisha00@gmail.com"
                    className="text-foreground hover:text-accent transition-colors"
                  >
                    edonitaberisha00@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <a
                    href="tel:+38348669636"
                    className="text-foreground hover:text-accent transition-colors"
                  >
                    +383 48 669 636
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="text-foreground">Prishtina, Kosovo</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/edonita-berisha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-accent transition-colors"
                  >
                    linkedin.com/in/edonita-berisha
                  </a>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col justify-center space-y-4">
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                Ready to collaborate?
              </h3>
              <p className="text-muted-foreground mb-4">
                I'm always interested in hearing about new projects and opportunities.
              </p>
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                asChild
              >
                <a href="mailto:edonitaberisha00@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send a Message
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
