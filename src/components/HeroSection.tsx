
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-white relative">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-portfolio-blue font-medium">Hello, I'm</p>
            <h1 className="text-portfolio-darkBlue">
              <span className="block">John Doe</span>
              <span className="text-portfolio-blue">Full Stack Developer</span>
            </h1>
            <p className="text-portfolio-gray max-w-lg text-lg">
              I build exceptional digital experiences that make life easier and more enjoyable.
              Specializing in creating robust web applications with modern technologies.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                className="bg-portfolio-blue hover:bg-portfolio-blue/90"
                onClick={scrollToProjects}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue/10"
                onClick={() => {
                  const contactSection = document.querySelector('#contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in hidden md:block">
            <div className="w-full h-96 bg-portfolio-blue/10 rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-portfolio-blue">
                <span className="text-xl font-medium">Your Image Here</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-portfolio-blue/20 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-portfolio-blue/30 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => {
            const aboutSection = document.querySelector('#about');
            aboutSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-portfolio-blue flex flex-col items-center"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
