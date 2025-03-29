
import { Code, Database, Server, Cpu } from 'lucide-react';

const skills = [
  "Python",
  "JavaScript",
  "C++",
  "C",
  "TensorFlow",
  "PyTorch",
  "Pandas",
  "React",
  "Flask",
  "Docker",
  "AWS",
  "MongoDB",
  "OpenCV",
  "EasyOCR",
  "Rasa",
  "spaCy",
];

const services = [
  {
    icon: <Cpu className="w-10 h-10 text-portfolio-blue" />,
    title: "Machine Learning",
    description: "I build end-to-end machine learning pipelines and models to solve complex problems with high accuracy."
  },
  {
    icon: <Code className="w-10 h-10 text-portfolio-blue" />,
    title: "Computer Vision",
    description: "I develop OCR solutions and image classification systems using state-of-the-art computer vision techniques."
  },
  {
    icon: <Server className="w-10 h-10 text-portfolio-blue" />,
    title: "NLP Solutions",
    description: "I create intelligent chatbots and natural language processing applications with multilingual capabilities."
  },
  {
    icon: <Database className="w-10 h-10 text-portfolio-blue" />,
    title: "Full Stack Development",
    description: "I deliver end-to-end web applications that integrate frontend (React) and backend (Flask) with database solutions."
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
                I'm a passionate <span className="text-portfolio-blue font-medium">Data Scientist</span> with 
                expertise in building end-to-end machine learning pipelines, computer vision solutions, and NLP applications.
              </p>
              <p>
                With experience in the data science field, I've worked on various projects including document validation systems,
                multilingual chatbots, and image classification applications that solve real-world problems.
              </p>
              <p>
                I graduated from Heritage Institute of Technology, Kolkata with a B.Tech in Electronics and Instrumentation Engineering in 2021,
                and have since been applying my technical skills to create innovative AI solutions.
              </p>
              <p>
                I'm particularly interested in leveraging AI technologies to address practical challenges and am always exploring
                new techniques and tools to enhance my capabilities as a data scientist.
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
