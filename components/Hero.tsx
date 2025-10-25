import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import profile from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div className="flex justify-center mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary shadow-glow">
              <Image
                src={profile}
                alt="Edonita Berisha"
                width={350}
                height={350}
                className="rounded-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Edonita Berisha
          </h1>

          <p className="text-2xl md:text-3xl text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Full Stack Software Developer
          </p>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            6 years of experience building dynamic websites and applications with expertise in React.js, Next.js, PHP, Laravel, and WordPress.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Prishtina, Kosovo</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+383 48 669 636</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              asChild
            >
              <a href="mailto:edonitaberisha00@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 transition-smooth"
              asChild
            >
              <a href="https://linkedin.com/in/edonita-berisha" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
