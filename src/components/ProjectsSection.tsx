
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with secure payment processing, user authentication, and product management.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    image: "bg-portfolio-blue/20",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Task Management App",
    description: "A collaborative task tracking application with real-time updates, user roles, and progress visualization.",
    tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
    image: "bg-portfolio-blue/30",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Social Media Dashboard",
    description: "An analytics platform that aggregates and visualizes social media performance data across multiple channels.",
    tags: ["TypeScript", "Next.js", "Chart.js", "PostgreSQL"],
    image: "bg-portfolio-blue/25",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Weather Application",
    description: "A weather forecasting application with location-based services, historical data, and interactive maps.",
    tags: ["React", "OpenWeather API", "Leaflet", "CSS Modules"],
    image: "bg-portfolio-blue/15",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-portfolio-darkBlue mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-portfolio-blue mx-auto"></div>
          <p className="mt-6 text-portfolio-gray max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents a unique challenge and solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white border border-gray-100 flex flex-col animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-48 ${project.image} flex items-center justify-center`}>
                <span className="text-lg font-medium text-portfolio-blue">Project Image</span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-portfolio-darkBlue">{project.title}</h3>
                <p className="text-portfolio-gray mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 bg-portfolio-blue/10 text-portfolio-blue rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2 border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue/10"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </Button>
                  <Button 
                    className="flex items-center gap-2 bg-portfolio-blue hover:bg-portfolio-blue/90"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue/10"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
