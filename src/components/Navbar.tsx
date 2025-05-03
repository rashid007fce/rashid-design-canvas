
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to update the active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'services', 'portfolio', 'contact'];
      
      // Set navbar background when scrolled
      setScrolled(window.scrollY > 50);
      
      // Find current section
      const currentPos = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= currentPos) {
          if (activeSection !== sections[i]) {
            setActiveSection(sections[i]);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={cn(
      "fixed w-full top-0 z-50 transition-all duration-300 py-4",
      scrolled ? "bg-white bg-opacity-90 backdrop-blur-sm shadow-sm" : ""
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="text-navy font-bold text-xl">
              Rashid Ansari
            </a>
          </div>
          
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              {['Home', 'About', 'Experience', 'Skills', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={cn(
                      "nav-link",
                      activeSection === item.toLowerCase() ? "active-nav-link" : ""
                    )}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <a 
            href="#contact"
            className="hidden md:inline-flex bg-navy hover:bg-navy/90 text-white py-2 px-4 rounded-md font-medium transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Let's talk
          </a>
          
          <button
            className="block md:hidden text-navy"
            onClick={() => {
              // Mobile menu toggle - will be implemented if needed
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
