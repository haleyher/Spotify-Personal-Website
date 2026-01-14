import { useState, useEffect } from 'react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button 
          onClick={() => scrollToSection('hero')}
          className="text-xl font-bold text-primary hover:scale-105 transition-transform"
        >
          ◆ Haley
        </button>
        
        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection('about')}
            className="spotify-nav-link"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('experience')}
            className="spotify-nav-link"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('leadership')}
            className="spotify-nav-link"
          >
            Leadership
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="spotify-nav-link"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="spotify-nav-link"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="spotify-nav-link"
          >
            Contact
          </button>
        </div>

        <a 
          href="mailto:haleyher@mit.edu"
          className="spotify-button text-sm py-2 px-6"
        >
          Contact Me
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
