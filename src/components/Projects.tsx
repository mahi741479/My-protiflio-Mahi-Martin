import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Target, FileText, Plane } from "lucide-react";
import armyLogo from "@/assets/army-logo.png";
import airlinesIcon from "@/assets/airlines-icon.png";
import ocrIcon from "@/assets/ocr-icon.png";

const Projects = () => {
  const projects = [
    {
      title: "Firearm Simulator",
      subtitle: "Indian Army Project",
      description: "Interactive simulator UI with backend for defense-grade applications. Built for the Indian Army with intuitive React.js frontend and robust Java backend.",
      image: armyLogo,
      tags: ["React.js", "Java", "REST APIs", "Defense"],
      icon: <Target className="h-6 w-6 text-primary" />,
      highlight: "Army Project"
    },
    {
      title: "Advanced OCR Application",
      subtitle: "Document Processing System",
      description: "Converts scanned PDFs into searchable, editable documents. Advanced text recognition with high accuracy and user-friendly interface.",
      image: ocrIcon,
      tags: ["React.js", "Java", "MySQL", "OCR"],
      icon: <FileText className="h-6 w-6 text-primary" />,
      highlight: "PDF Processing"
    },
    {
      title: "Airlines Management System",
      subtitle: "German Client Project",
      description: "Backend system for airline ticketing & management. Developed during international collaboration with Pass Group Consultancy.",
      image: airlinesIcon,
      tags: ["Java", "Spring Boot", "MySQL", "Enterprise"],
      icon: <Plane className="h-6 w-6 text-primary" />,
      highlight: "International Project"
    }
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some projects I've worked on that showcase my skills in React.js, Java, and full-stack development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card group">
              {/* Project Image/Logo */}
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <Badge 
                  variant="secondary" 
                  className="absolute -top-2 -right-2 bg-primary text-primary-foreground"
                >
                  {project.highlight}
                </Badge>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  {project.icon}
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                
                <p className="text-sm text-accent font-medium">{project.subtitle}</p>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-accent/10 text-accent px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3 pt-4">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 btn-primary">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Highlight */}
        <div className="mt-16 text-center">
          <div className="card-elegant p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">🏆 Achievement Highlight</h3>
            <p className="text-lg text-muted-foreground mb-4">
              Received <span className="text-primary font-semibold">full-time employee consideration</span> at Simcon Technologies after internship based on exceptional performance in Army projects!
            </p>
            <div className="flex justify-center gap-4">
              <Badge variant="secondary">Defense Projects</Badge>
              <Badge variant="secondary">Performance Recognition</Badge>
              <Badge variant="secondary">Full-time Offer</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;