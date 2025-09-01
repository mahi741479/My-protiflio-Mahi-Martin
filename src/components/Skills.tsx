import { Code2, Database, Server, Palette, Wrench, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Palette className="h-6 w-6 text-primary" />,
      skills: ["React.js",  "HTML", "CSS", "JavaScript", "Tailwind", "Bootstrap"]
    },
    {
      title: "Backend",
      icon: <Server className="h-6 w-6 text-primary" />,
      skills: ["Java", "Spring Boot", "REST APIs"]
    },
    {
      title: "Database",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: ["MySQL", "SQL"]
    },
    {
      title: "Tools",
      icon: <Wrench className="h-6 w-6 text-primary" />,
      skills: ["Git", "Docker", "Postman", "VS Code", "Eclipse"]
    },
    {
      title: "Exploring",
      icon: <Zap className="h-6 w-6 text-primary" />,
      skills: ["TypeScript", "Microservices"]
    }
  ];

  const techIcons = [
    { name: "React", icon: "⚛️", color: "text-blue-500" },
    { name: "Java", icon: "☕", color: "text-orange-600" },
    { name: "Spring", icon: "🍃", color: "text-green-500" },
    { name: "MySQL", icon: "🐬", color: "text-blue-600" },
    { name: "Git", icon: "📦", color: "text-orange-500" },
    { name: "Docker", icon: "🐳", color: "text-blue-400" },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <Code2 className="inline mr-3 h-8 w-8 text-primary" />
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I love blending logic with creativity, making tech both functional and beautiful.
          </p>
        </div>

        {/* Tech Icons */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {techIcons.map((tech, index) => (
            <div key={index} className="skill-badge group">
              <span className="text-3xl group-hover:scale-110 transition-transform">
                {tech.icon}
              </span>
              <span className="font-semibold">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-elegant p-6">
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;