
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled ? 'bg-white/90 shadow-sm backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-portfolio-darkBlue">
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-portfolio-gray hover:text-portfolio-blue transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button 
          className="hidden md:block bg-portfolio-blue hover:bg-portfolio-blue/90"
          onClick={() => scrollToSection('#contact')}
        >
          Get In Touch
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-portfolio-darkBlue"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 animate-fade-in">
          <div className="flex flex-col space-y-4 p-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-lg py-2 text-portfolio-darkBlue hover:text-portfolio-blue transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <Button 
              className="mt-4 bg-portfolio-blue hover:bg-portfolio-blue/90 w-full"
              onClick={() => scrollToSection('#contact')}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
