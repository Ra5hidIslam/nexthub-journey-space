
import { Code, Globe, Server, Database } from 'lucide-react';

const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "GraphQL",
  "REST APIs",
  "HTML/CSS",
  "Tailwind CSS",
  "Git",
];

const services = [
  {
    icon: <Code className="w-10 h-10 text-portfolio-blue" />,
    title: "Frontend Development",
    description: "I build responsive, interactive user interfaces that provide an exceptional user experience across all devices."
  },
  {
    icon: <Server className="w-10 h-10 text-portfolio-blue" />,
    title: "Backend Development",
    description: "I develop robust server-side applications and APIs that power your web applications securely and efficiently."
  },
  {
    icon: <Database className="w-10 h-10 text-portfolio-blue" />,
    title: "Database Design",
    description: "I create well-structured database schemas and implement efficient queries to ensure optimal data management."
  },
  {
    icon: <Globe className="w-10 h-10 text-portfolio-blue" />,
    title: "Full Stack Solutions",
    description: "I deliver end-to-end web applications that integrate frontend and backend seamlessly."
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-portfolio-lightGray">
      <div className="section-container">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-portfolio-darkBlue mb-4">About Me</h2>
          <div className="h-1 w-20 bg-portfolio-blue mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-portfolio-darkBlue">Get to know me!</h3>
            <div className="space-y-4 text-portfolio-gray">
              <p>
                I'm a passionate <span className="text-portfolio-blue font-medium">Full Stack Web Developer</span> with 
                a focus on creating clean, efficient, and user-friendly web applications.
              </p>
              <p>
                With over 5 years of experience in the tech industry, I've worked with startups and established 
                companies to deliver high-quality solutions that meet business objectives and exceed user expectations.
              </p>
              <p>
                My approach combines technical expertise with a keen eye for design, ensuring that the applications 
                I build are not only functional but also aesthetically pleasing and intuitive to use.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge through blog posts and community engagement.
              </p>
            </div>
          </div>
          
          <div className="animate-slide-up">
            <h3 className="text-portfolio-darkBlue mb-6">My Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-white p-3 rounded-md text-center shadow-sm hover:shadow-md transition-shadow hover:text-portfolio-blue"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-24">
          <h3 className="text-portfolio-darkBlue text-center mb-12 animate-slide-up">Services I Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold mb-3 text-portfolio-darkBlue group-hover:text-portfolio-blue transition-colors">
                  {service.title}
                </h4>
                <p className="text-portfolio-gray">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
