
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-darkBlue text-white py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Rasid Ul Islam</h3>
            <p className="text-gray-300 max-w-md">
              Data Scientist combining AI with modern technologies to build innovative solutions.
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="bg-portfolio-blue hover:bg-portfolio-blue/90 p-3 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} Rasid Ul Islam. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#home" className="text-gray-300 hover:text-portfolio-blue transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-portfolio-blue transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-portfolio-blue transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-portfolio-blue transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
