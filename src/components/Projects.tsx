import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Target, FileText, Plane, Box } from "lucide-react";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import armyLogo from "@/assets/army-logo.png";
import airlinesIcon from "@/assets/airlines-icon.png";
import ocrIcon from "@/assets/ocr-icon.png";
import firearmsProject from "@/assets/firearm-project.jpg";
import airlineProject from "@/assets/airline-project.jpg";
import ocrProject from "@/assets/ocr-project.jpg";
import threeDProject from "@/assets/3d-project.jpg";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewProject = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  const projects = [
    {
      title: "Firearm Simulation System (.22 Rifle)",
      subtitle: "NCC Training - Simcon Technology Internship",
      description: "Developed a simulation model of the .22 rifle for NCC training programs to improve cadet shooting accuracy and reduce training costs.",
      detailedExplanation: "Developed a comprehensive firearm simulation system for NCC training (.22 rifle) during 6-month internship at Simcon Technology. Built realistic firearm mechanics including trigger response, recoil patterns, and bullet trajectory using Java and simulation frameworks. Integrated physics-based algorithms to simulate wind effect, bullet drop, and target accuracy metrics. Created a scoring and feedback system that tracks cadet performance and provides instant analysis for skill improvement. Worked with senior developers and defense trainers to ensure simulation accuracy and training effectiveness. Successfully contributed to enhancing virtual firearm safety training, reducing risks during early cadet practice. The project improved NCC training efficiency by providing cost-effective and risk-free rifle practice while demonstrating a functional prototype for cadet training.",
      image: armyLogo,
      projectImage: firearmsProject,
      tags: ["Java", "Simulation", "3D Modeling", "Physics Engine", "Defense", "NCC Training"],
      icon: <Target className="h-6 w-6 text-primary" />,
      highlight: "Defense Project",
      codeUrl: "#",
      liveUrl: "#",
      duration: "6 Months",
      organization: "NCC (Simcon Technology)",
      role: "Junior Java Developer and react.js Developer",
      achievements: [
        "Improved NCC training efficiency by providing cost-effective and risk-free rifle practice",
        "Successfully demonstrated a functional prototype for cadet training on the .22 rifle",
        "Gained hands-on experience in simulation technology, defense applications, and Java-based system development",
        "Received recognition for exceptional performance leading to full-time employee consideration"
      ]
    },
    {
      title: "Advanced OCR Application",
      subtitle: "Enterprise Document Processing System",
      description: "Enterprise-grade OCR system that converts scanned PDFs into searchable, editable documents with 95%+ accuracy and multi-language support.",
      detailedExplanation: "Built a comprehensive OCR application using Java and machine learning algorithms to process various document formats with exceptional accuracy. The system features batch processing capabilities for handling multiple documents simultaneously, multi-language support for international documents, and intelligent document classification. Implemented advanced text recognition algorithms that handle complex layouts, tables, and even handwritten text. The application exports processed documents to multiple formats including Word, Excel, and searchable PDFs. Integrated automated data extraction features that can identify and extract specific information like dates, amounts, and names from invoices, contracts, and forms. Built with scalable architecture to handle enterprise-level document processing volumes.",
      image: ocrIcon,
      projectImage: ocrProject,
      tags: ["React.js", "Java", "MySQL", "OCR", "Machine Learning", "Document Processing"],
      icon: <FileText className="h-6 w-6 text-primary" />,
      highlight: "AI-Powered",
      codeUrl: "#",
      liveUrl: "#",
      duration: "2 Months",
      organization: "Personal Project",
      role: "Full-Stack Developer",
      achievements: [
        "Achieved 95%+ accuracy in text recognition across various document formats",
        "Implemented multi-language support for international document processing",
        "Built scalable architecture capable of handling enterprise-level volumes",
        "Integrated automated data extraction for structured document analysis"
      ]
    },
    {
      title: "Airlines Management System",
      subtitle: "Skill development pogram - Pass Group Consultancy",
      description: "Comprehensive backend system for airline operations including ticketing, reservations, and management for German client collaboration.",
      detailedExplanation: "Developed a robust airline management system during international collaboration with Pass Group Consultancy for a German client. Built with microservices architecture using Java Spring Boot to ensure scalability and maintainability. The system handles complex airline operations including flight reservations, passenger management, seat allocation, and comprehensive billing systems. Integrated multiple payment gateways for international transactions and implemented real-time flight status updates with automated notification systems. Features include dynamic pricing algorithms, loyalty program management, crew scheduling, and aircraft maintenance tracking. Collaborated with German development team following Agile methodologies, participating in daily standups and sprint planning. Implemented robust security measures for handling sensitive passenger data and financial transactions, ensuring GDPR compliance for European operations.",
      image: airlinesIcon,
      projectImage: airlineProject,
      tags: ["Java", "Spring Boot", "MySQL", "Microservices", "Payment Gateway", "International"],
      icon: <Plane className="h-6 w-6 text-primary" />,
      highlight: "International",
      codeUrl: "#",
      liveUrl: "#",
      duration: "1 Month",
      organization: "Pass Group Consultancy (German Client)",
      role: "Backend Java Developer",
      achievements: [
        "Successfully delivered enterprise-grade airline management system for international client",
        "Implemented microservices architecture ensuring 99.9% system reliability",
        "Integrated multiple payment gateways supporting international transactions",
        "Collaborated effectively with German development team using Agile methodologies"
      ]
    },
    {
      title: "MezHub 3D Platform",
      subtitle: "Freelancing Project - 3D Modeling & Visualization",
      description: "Comprehensive 3D platform for modeling, visualization, and custom quote generation for 3D printing and modeling services.",
      detailedExplanation: "Currently developing an innovative 3D platform that revolutionizes how users interact with 3D models and request custom manufacturing. Built with React.js frontend and Three.js for real-time 3D rendering, allowing users to upload, customize, and visualize 3D models in the browser. Implemented sophisticated quote generation algorithms that calculate pricing based on model complexity, material selection, printing parameters, and finishing options. The platform features real-time collaboration tools, version control for 3D designs, and integration with popular CAD software. Built comprehensive order management system with payment processing, progress tracking, and automated customer notifications. Includes advanced features like automatic mesh optimization, STL file validation, and print feasibility analysis. The platform serves both individual makers and enterprise clients, with scalable pricing tiers and bulk order management.",
      image: ocrIcon,
      projectImage: threeDProject,
      tags: ["React.js", "Three.js", "Node.js", "3D Modeling", "Payment Integration", "Freelance"],
      icon: <Box className="h-6 w-6 text-primary" />,
      highlight: "Ongoing",
      codeUrl: "#",
      liveUrl: "#",
      duration: "Ongoing (4+ Months)",
      organization: "Freelance Client",
      role: "Full-Stack Developer & 3D Specialist",
      achievements: [
        "Built real-time 3D rendering system using Three.js for browser-based visualization",
        "Implemented sophisticated quote generation algorithms for automated pricing",
        "Developed comprehensive order management system with payment integration",
        "Created scalable platform serving both individual makers and enterprise clients"
      ]
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
            <div key={index} className="project-card group cursor-pointer" onClick={() => handleViewProject(project)}>
              {/* Project Image */}
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img
                  src={project.projectImage}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant="secondary" 
                    className="bg-primary text-primary-foreground"
                  >
                    {project.highlight}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={`${project.title} icon`}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  {project.icon}
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                
                <p className="text-sm text-accent font-medium">{project.subtitle}</p>
                
                <p className="text-muted-foreground leading-relaxed line-clamp-3">
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
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.codeUrl, '_blank');
                    }}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 btn-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewProject(project);
                    }}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <ProjectModal 
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />

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