import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import heroImage from "@/assets/mahi-hero.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen hero-gradient flex items-center section-padding">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                💙 Full Stack Developer
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi! I'm{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Chennakesi Mahesh
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A passionate developer who loves crafting seamless web experiences using{" "}
                <span className="text-primary font-semibold">React.js</span> and{" "}
                <span className="text-primary font-semibold">Java</span>. 
                I turn ideas into interactive, high-performing applications that people genuinely enjoy using.
              </p>
              <p className="text-lg text-muted-foreground">
                💡 I believe clean code is like a good melody—simple, elegant, and unforgettable.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                className="btn-primary group"
                onClick={() => {
                  // Create and trigger download of resume
                  const link = document.createElement('a');
                  link.href = '/resume-chennakesi-mahesh.pdf'; // You'll need to add this file to public folder
                  link.download = 'Chennakesi-Mahesh-Resume.pdf';
                  link.click();
                }}
              >
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                className="btn-secondary"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="hover:bg-primary hover:text-primary-foreground">
                <Github className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary hover:text-primary-foreground">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Chennakesi Mahesh - Full Stack Developer"
                className="w-full max-w-md mx-auto rounded-3xl shadow-[var(--shadow-elegant)] hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-accent to-primary rounded-full opacity-10 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;