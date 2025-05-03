
import React from 'react';
import { ArrowRight, Palette, Image, Droplet, ColorPicker } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

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
    <section id="home" className="relative min-h-screen pt-24 pb-16 overflow-hidden bg-gradient-to-br from-navy/10 via-offwhite to-gold/20">
      {/* Enhanced decorative elements */}
      <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-navy/20 to-gold/30 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-navy/15 to-gold/25 blur-3xl -z-10"></div>
      <div className="absolute top-40 right-10 w-40 h-40 rounded-full bg-gold/10 blur-xl -z-10"></div>
      <div className="absolute bottom-40 left-10 w-32 h-32 rounded-full bg-navy/15 blur-2xl -z-10"></div>
      
      {/* Creative design elements */}
      <div className="absolute top-32 left-20 text-gold/40 rotate-12">
        <Palette size={32} />
      </div>
      <div className="absolute bottom-32 right-20 text-navy/30 -rotate-12">
        <ColorPicker size={28} />
      </div>
      <div className="absolute top-64 right-32 text-gold/20">
        <Droplet size={24} />
      </div>
      <div className="absolute bottom-64 left-32 text-navy/20">
        <Image size={24} />
      </div>
      
      <div className="section-container flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 pr-0 lg:pr-12 mb-8 lg:mb-0">
          <div className="inline-block mb-2 px-4 py-1 rounded-full bg-gradient-to-r from-navy/20 to-gold/30 text-navy font-medium animate-fade-in backdrop-blur-sm">
            Hello, I'm Rashid Ansari
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="block text-navy">Visual Designer &</span>
            <span className="block bg-gradient-to-r from-navy via-gold/90 to-navy/80 bg-clip-text text-transparent">UI/UX Specialist</span>
          </h1>
          <p className="text-charcoal/80 text-lg mb-8 max-w-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            With over 9 years of experience in branding, UI/UX, marketing design, and video production, I help companies create seamless digital experiences that connect with their audience.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button 
              onClick={() => scrollToSection('portfolio')}
              className="bg-gradient-to-r from-navy to-navy/80 hover:from-navy/90 hover:to-navy/70 text-white py-3 px-6 rounded-md font-medium hover:shadow-lg transition-all"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-2 border-navy text-navy py-3 px-6 rounded-md font-medium hover:bg-navy hover:text-white transition-colors hover:shadow-md"
            >
              Contact Me
            </Button>
          </div>
        </div>
        
        <div className="relative w-full lg:w-1/2 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Enhanced background design elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-gold/40 to-gold/10 rounded-full -z-10 blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-tr from-navy/30 to-navy/5 rounded-full -z-10 blur-lg"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tl from-navy/30 to-gold/10 rounded-full -z-10 blur-lg"></div>
            
            {/* Enhanced profile image container */}
            <div className="bg-gradient-to-br from-white/90 to-offwhite/80 p-5 rounded-2xl shadow-lg overflow-hidden relative h-full backdrop-blur-sm border border-white/60">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0)_70%)]"></div>
              <div className="h-full rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative border border-white/40 shadow-inner">
                {/* Design pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.1)_25%,rgba(68,68,68,0.1)_50%,transparent_50%,transparent_75%,rgba(68,68,68,0.1)_75%)]" style={{ backgroundSize: "20px 20px" }}></div>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center text-navy/40 text-sm font-medium">
                  Professional photo placeholder
                </div>
                
                {/* Enhanced design elements for the profile photo area */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-navy/60 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                  <div className="w-2 h-2 bg-charcoal/40 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="text-xs bg-gradient-to-r from-navy/20 to-gold/20 backdrop-blur-sm px-3 py-1 rounded-full text-navy font-medium border border-white/40">
                    Visual Designer
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-navy/20 to-gold/20 flex items-center justify-center backdrop-blur-sm border border-white/40">
                    <Palette size={16} className="text-navy/60" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="text-sm font-medium text-navy/70 mb-2 bg-white/30 backdrop-blur-sm px-4 py-1 rounded-full border border-white/40">Scroll Down</div>
        <div className="w-6 h-10 rounded-full border-2 border-navy/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-1.5 rounded-full bg-navy/50 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
