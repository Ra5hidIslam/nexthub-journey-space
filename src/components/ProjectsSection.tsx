
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "House Plant Classification",
    description: "An end-to-end image classification website using React (frontend), Flask (backend), and MongoDB. Used transfer learning (EfficientNet0) on ~14k images with 96% accuracy.",
    tags: ["React", "Flask", "MongoDB", "TensorFlow", "Docker", "AWS"],
    image: "bg-portfolio-blue/20",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Medhavi.com",
    description: "Led a team of four as the lead developer to create a website for hosting tests, Q&As, and blogs targeting JEE and NEET aspirants. Designed the architecture with React, Flask, and MongoDB.",
    tags: ["React", "Flask", "MongoDB", "Team Lead"],
    image: "bg-portfolio-blue/30",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "PAN Card Information Retrieval",
    description: "Developed a pipeline to isolate a PAN card from its background and extract essential details. Utilized OpenCV for image processing and EasyOCR for accurate text retrieval.",
    tags: ["Python", "OpenCV", "EasyOCR", "Image Processing"],
    image: "bg-portfolio-blue/25",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Digit Recognizer (Kaggle)",
    description: "Built a CNN model on Kaggle's Digit Recognizer competition to classify handwritten digits (MNIST dataset). Achieved a 99% accuracy rate, demonstrating strong model performance.",
    tags: ["Python", "TensorFlow", "CNN", "Kaggle"],
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
            Here are some of the key projects I've worked on. Each one represents unique challenges and solutions in data science and web development.
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
