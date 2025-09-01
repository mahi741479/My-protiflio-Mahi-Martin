import { Badge } from "@/components/ui/badge";
import { GraduationCap, Building, Award, MapPin } from "lucide-react";

const About = () => {
  const experiences = [
    {
      company: "Simcon Technologies",
      role: "React.js & Java Developer",
      duration: "6 months",
      type: "Army Projects",
      highlights: [
        "Built Firearm Simulator for Indian Army",
        "Developed Advanced OCR Application",
        "Collaborated with seniors on UI/UX enhancement",
        "Received full-time employee consideration"
      ]
    },
    {
      company: "Pass Group Consultancy",
      role: "Java Spring Boot Developer",
      duration: "1 month",
      type: "German Client Project",
      highlights: [
        "Airlines Management System backend",
        "REST API development with Spring Boot",
        "International project collaboration",
        "Database management with MySQL"
      ]
    }
  ];

  const achievements = [
    { title: "1st Prize", description: "Idea Talent Acquisition Test", icon: "🏆" },
    { title: "2nd Prize", description: "Kabaddi (Social Activity)", icon: "🥈" },
    { title: "Coordinator", description: "District Science Fair - Coding Competition", icon: "🎓" }
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a dedicated developer with hands-on experience in React.js, Java, Spring Boot, REST APIs, and SQL. 
            I've worked on impactful defense projects and gained valuable insights into enterprise-level development 
            through international collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Building className="h-6 w-6 text-primary" />
              Experience & Internships
            </h3>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="card-elegant p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold">{exp.company}</h4>
                      <p className="text-primary font-medium">{exp.role}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">{exp.duration}</Badge>
                      <p className="text-sm text-muted-foreground mt-1">{exp.type}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Achievements */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education & Certifications
            </h3>
            
            <div className="card-elegant p-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">B.Sc. Computer Science</h4>
                    <p className="text-sm text-muted-foreground">Kakatiya University</p>
                  </div>
                </div>
                
                <div className="border-l-2 border-primary/20 pl-4 ml-6 space-y-3">
                  <p className="text-sm"><span className="font-medium">Java Developer Course</span> - J Spiders Institute</p>
                  <p className="text-sm"><span className="font-medium">Internship</span> - Simcon Technologies (Army Projects)</p>
                  <p className="text-sm"><span className="font-medium">Skill Development Program</span> - Pass Group Consultancy </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Award className="h-6 w-6 text-primary" />
              Achievements & Extras
            </h3>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="card-elegant p-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{achievement.icon}</span>
                    <div>
                      <h4 className="font-semibold">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Touch */}
        <div className="text-center">
          <div className="card-elegant p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">💙 Fun Personality Note</h3>
            <p className="text-muted-foreground leading-relaxed">
              I love blending logic with creativity, making tech both functional and beautiful. 
              When I'm not coding, you'll find me exploring new technologies, participating in coding competitions, 
              or playing kabaddi! I believe that the best solutions come from combining technical expertise 
              with genuine passion for problem-solving.
            </p>
            <div className="flex justify-center items-center gap-2 mt-4 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Based in Hyderabad, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;