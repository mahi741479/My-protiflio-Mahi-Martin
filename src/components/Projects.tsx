import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Target, FileText, Plane, Box, DollarSign } from "lucide-react";
import armyLogo from "@/assets/army-logo.png";
import airlinesIcon from "@/assets/airlines-icon.png";
import ocrIcon from "@/assets/ocr-icon.png";

const Projects = () => {
  const projects = [
    {
      title: "Firearm Simulator",
      subtitle: "Indian Army Project",
      description: "Interactive simulator UI with backend for defense-grade applications. Built for the Indian Army with intuitive React.js frontend and robust Java backend.",
      detailedExplanation: "This was a critical defense project where I developed a comprehensive firearm training simulator. The system includes realistic UI/UX for weapon handling simulations, backend data management for training records, and integration with physical hardware components. Implemented secure user authentication, detailed analytics for training performance, and real-time feedback systems.",
      image: armyLogo,
      tags: ["React.js", "Java", "REST APIs", "Defense", "Hardware Integration"],
      icon: <Target className="h-6 w-6 text-primary" />,
      highlight: "Army Project",
      codeUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Advanced OCR Application",
      subtitle: "Document Processing System",
      description: "Converts scanned PDFs into searchable, editable documents. Advanced text recognition with high accuracy and user-friendly interface.",
      detailedExplanation: "Built an enterprise-grade OCR system that processes various document formats with 95%+ accuracy. Features include batch processing, multi-language support, document classification, and automated data extraction. The system handles complex layouts, handwritten text recognition, and exports to multiple formats including Word, Excel, and searchable PDFs.",
      image: ocrIcon,
      tags: ["React.js", "Java", "MySQL", "OCR", "Machine Learning"],
      icon: <FileText className="h-6 w-6 text-primary" />,
      highlight: "AI-Powered",
      codeUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Airlines Management System",
      subtitle: "German Client Project",
      description: "Backend system for airline ticketing & management. Developed during international collaboration with Pass Group Consultancy.",
      detailedExplanation: "Comprehensive airline management system handling reservations, flight scheduling, passenger management, and billing. Built with microservices architecture for scalability, integrated payment gateways, real-time flight status updates, and automated notification systems. Collaborated with German team following Agile methodologies.",
      image: airlinesIcon,
      tags: ["Java", "Spring Boot", "MySQL", "Enterprise", "Microservices"],
      icon: <Plane className="h-6 w-6 text-primary" />,
      highlight: "International Project",
      codeUrl: "#",
      liveUrl: "#"
    },
    {
      title: "MezHub 3D Platform",
      subtitle: "Freelancing Project (Ongoing)",
      description: "3D modeling and visualization platform with real-time rendering capabilities. Custom quote generation system for 3D printing and modeling services.",
      detailedExplanation: "Currently developing a comprehensive 3D platform that allows users to upload, customize, and visualize 3D models. Features include real-time 3D rendering using Three.js, automated quote generation based on model complexity, material selection, and printing parameters. Integrated payment system and order management for seamless customer experience.",
      image: ocrIcon, // Using placeholder, you can add a specific icon
      tags: ["React.js", "Three.js", "Node.js", "3D Modeling", "Payment Integration"],
      icon: <Box className="h-6 w-6 text-primary" />,
      highlight: "Ongoing",
      codeUrl: "#",
      liveUrl: "#"
    },
    {
      title: "GetQuote System",
      subtitle: "Quote Management Platform",
      description: "Dynamic quote generation system for service-based businesses. Automated pricing, custom templates, and client management.",
      detailedExplanation: "Built a flexible quote generation platform that automates pricing calculations based on project parameters. Features include customizable quote templates, client relationship management, automated follow-ups, conversion tracking, and integrated invoicing. Supports multiple pricing models including hourly, fixed-price, and tiered pricing.",
      image: airlinesIcon, // Using placeholder
      tags: ["React.js", "Node.js", "MongoDB", "Payment Gateway", "CRM"],
      icon: <DollarSign className="h-6 w-6 text-primary" />,
      highlight: "Business Tool",
      codeUrl: "#",
      liveUrl: "#"
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

                {/* Detailed Explanation */}
                <details className="group">
                  <summary className="cursor-pointer text-primary hover:text-primary/80 font-medium text-sm mb-2">
                    View detailed explanation ↓
                  </summary>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/20">
                    {project.detailedExplanation}
                  </p>
                </details>

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
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => window.open(project.codeUrl, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 btn-primary"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
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