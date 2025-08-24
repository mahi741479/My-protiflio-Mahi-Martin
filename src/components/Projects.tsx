import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Target, FileText, Plane, Box, DollarSign } from "lucide-react";
import armyLogo from "@/assets/army-logo.png";
import airlinesIcon from "@/assets/airlines-icon.png";
import ocrIcon from "@/assets/ocr-icon.png";

const Projects = () => {
  const projects = [
    {
      title: "Firearm Simulation System (.22 Rifle)",
      subtitle: "NCC Training - Simcon Technology Internship",
      description: "Developed a simulation model of the .22 rifle for NCC training programs to improve cadet shooting accuracy and reduce training costs.",
      detailedExplanation: "Developed a comprehensive firearm simulation system for NCC training (.22 rifle) during 6-month internship at Simcon Technology. Built realistic firearm mechanics including trigger response, recoil patterns, and bullet trajectory using Java and simulation frameworks. Integrated physics-based algorithms to simulate wind effect, bullet drop, and target accuracy metrics. Created a scoring and feedback system that tracks cadet performance and provides instant analysis for skill improvement. Worked with senior developers and defense trainers to ensure simulation accuracy and training effectiveness. Successfully contributed to enhancing virtual firearm safety training, reducing risks during early cadet practice. The project improved NCC training efficiency by providing cost-effective and risk-free rifle practice while demonstrating a functional prototype for cadet training.",
      image: armyLogo,
      tags: ["Java", "Simulation", "3D Modeling", "Physics Engine", "Defense", "NCC Training"],
      icon: <Target className="h-6 w-6 text-primary" />,
      highlight: "Defense Project",
      codeUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Advanced OCR Application",
      subtitle: "Enterprise Document Processing System",
      description: "Enterprise-grade OCR system that converts scanned PDFs into searchable, editable documents with 95%+ accuracy and multi-language support.",
      detailedExplanation: "Built a comprehensive OCR application using Java and machine learning algorithms to process various document formats with exceptional accuracy. The system features batch processing capabilities for handling multiple documents simultaneously, multi-language support for international documents, and intelligent document classification. Implemented advanced text recognition algorithms that handle complex layouts, tables, and even handwritten text. The application exports processed documents to multiple formats including Word, Excel, and searchable PDFs. Integrated automated data extraction features that can identify and extract specific information like dates, amounts, and names from invoices, contracts, and forms. Built with scalable architecture to handle enterprise-level document processing volumes.",
      image: ocrIcon,
      tags: ["React.js", "Java", "MySQL", "OCR", "Machine Learning", "Document Processing"],
      icon: <FileText className="h-6 w-6 text-primary" />,
      highlight: "AI-Powered",
      codeUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Airlines Management System",
      subtitle: "International Client Project - Pass Group Consultancy",
      description: "Comprehensive backend system for airline operations including ticketing, reservations, and management for German client collaboration.",
      detailedExplanation: "Developed a robust airline management system during international collaboration with Pass Group Consultancy for a German client. Built with microservices architecture using Java Spring Boot to ensure scalability and maintainability. The system handles complex airline operations including flight reservations, passenger management, seat allocation, and comprehensive billing systems. Integrated multiple payment gateways for international transactions and implemented real-time flight status updates with automated notification systems. Features include dynamic pricing algorithms, loyalty program management, crew scheduling, and aircraft maintenance tracking. Collaborated with German development team following Agile methodologies, participating in daily standups and sprint planning. Implemented robust security measures for handling sensitive passenger data and financial transactions, ensuring GDPR compliance for European operations.",
      image: airlinesIcon,
      tags: ["Java", "Spring Boot", "MySQL", "Microservices", "Payment Gateway", "International"],
      icon: <Plane className="h-6 w-6 text-primary" />,
      highlight: "International",
      codeUrl: "#",
      liveUrl: "#"
    },
    {
      title: "MezHub 3D Platform",
      subtitle: "Freelancing Project - 3D Modeling & Visualization",
      description: "Comprehensive 3D platform for modeling, visualization, and custom quote generation for 3D printing and modeling services.",
      detailedExplanation: "Currently developing an innovative 3D platform that revolutionizes how users interact with 3D models and request custom manufacturing. Built with React.js frontend and Three.js for real-time 3D rendering, allowing users to upload, customize, and visualize 3D models in the browser. Implemented sophisticated quote generation algorithms that calculate pricing based on model complexity, material selection, printing parameters, and finishing options. The platform features real-time collaboration tools, version control for 3D designs, and integration with popular CAD software. Built comprehensive order management system with payment processing, progress tracking, and automated customer notifications. Includes advanced features like automatic mesh optimization, STL file validation, and print feasibility analysis. The platform serves both individual makers and enterprise clients, with scalable pricing tiers and bulk order management.",
      image: ocrIcon,
      tags: ["React.js", "Three.js", "Node.js", "3D Modeling", "Payment Integration", "Freelance"],
      icon: <Box className="h-6 w-6 text-primary" />,
      highlight: "Ongoing",
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