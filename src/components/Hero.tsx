
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
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
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-white to-offwhite pt-24 pb-16">
      <div className="section-container flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 pr-0 lg:pr-12 mb-8 lg:mb-0">
          <h2 className="text-navy text-xl md:text-2xl font-medium mb-2 animate-fade-in">
            Hello, I'm Rashid Ansari
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-navy animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="block">Visual Designer &</span>
            <span className="block">UI/UX Specialist</span>
          </h1>
          <p className="text-charcoal/80 text-lg mb-8 max-w-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            With over 9 years of experience in branding, UI/UX, marketing design, and video production, I help companies create seamless digital experiences that connect with their audience.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="inline-flex items-center bg-navy text-white py-3 px-6 rounded-md font-medium hover:bg-opacity-90 transition-colors"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center border-2 border-navy text-navy py-3 px-6 rounded-md font-medium hover:bg-navy hover:text-white transition-colors"
            >
              Contact Me
            </button>
          </div>
        </div>
        
        <div className="relative w-full lg:w-1/2 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gold/20 rounded-full -z-10 blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-navy/10 rounded-full -z-10 blur-lg"></div>
            
            {/* Profile image container */}
            <div className="bg-gradient-to-br from-white to-offwhite p-4 rounded-2xl shadow-lg overflow-hidden relative h-full">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_80%)]"></div>
              <div className="h-full rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center text-navy/30 text-sm font-medium">
                  Professional photo placeholder
                </div>
                {/* Placeholder for profile photo - to be replaced with actual image */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="w-2 h-2 bg-navy/30 rounded-full"></div>
                  <div className="w-2 h-2 bg-navy/30 rounded-full"></div>
                  <div className="w-2 h-2 bg-navy/30 rounded-full"></div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="text-xs text-navy/30 font-medium">Visual Designer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="text-sm text-navy/60 mb-2">Scroll Down</div>
        <svg className="w-5 h-5 text-navy/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
