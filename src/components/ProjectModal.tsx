import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, MapPin, Users } from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  detailedExplanation: string;
  image: string;
  projectImage: string;
  tags: string[];
  icon: React.ReactNode;
  highlight: string;
  codeUrl: string;
  liveUrl: string;
  duration?: string;
  organization?: string;
  role?: string;
  achievements?: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            {project.icon}
            {project.title}
            <Badge variant="secondary" className="bg-primary text-primary-foreground">
              {project.highlight}
            </Badge>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Project Image */}
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={project.projectImage}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Project Overview */}
          <div className="grid md:grid-cols-3 gap-4">
            {project.duration && (
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="font-medium">Duration:</span>
                <span className="text-muted-foreground">{project.duration}</span>
              </div>
            )}
            {project.organization && (
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="font-medium">Organization:</span>
                <span className="text-muted-foreground">{project.organization}</span>
              </div>
            )}
            {project.role && (
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4 text-primary" />
                <span className="font-medium">Role:</span>
                <span className="text-muted-foreground">{project.role}</span>
              </div>
            )}
          </div>

          {/* Subtitle */}
          <p className="text-lg text-accent font-medium">{project.subtitle}</p>

          {/* Description */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Project Overview</h3>
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
          </div>

          {/* Detailed Explanation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Detailed Implementation</h3>
            <p className="text-muted-foreground leading-relaxed">{project.detailedExplanation}</p>
          </div>

          {/* Key Achievements */}
          {project.achievements && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Key Achievements</h3>
              <ul className="space-y-2">
                {project.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Project Links */}
          <div className="flex gap-4 pt-4">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => window.open(project.codeUrl, '_blank')}
            >
              <Github className="mr-2 h-4 w-4" />
              View Code
            </Button>
            <Button 
              className="flex-1 btn-primary"
              onClick={() => window.open(project.liveUrl, '_blank')}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;