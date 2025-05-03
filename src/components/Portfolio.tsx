
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

type ProjectCategory = 'all' | 'ui-ux' | 'branding' | 'marketing' | 'motion';

interface Project {
  id: number;
  title: string;
  category: ProjectCategory[];
  image: string;
}

// Placeholder projects
const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce App Redesign",
    category: ['ui-ux'],
    image: "placeholder"
  },
  {
    id: 2,
    title: "Brand Identity System",
    category: ['branding'],
    image: "placeholder"
  },
  {
    id: 3,
    title: "Marketing Campaign Assets",
    category: ['marketing'],
    image: "placeholder"
  },
  {
    id: 4,
    title: "Product Motion Graphics",
    category: ['motion'],
    image: "placeholder"
  },
  {
    id: 5,
    title: "Banking Dashboard UI",
    category: ['ui-ux'],
    image: "placeholder"
  },
  {
    id: 6,
    title: "Corporate Brand Guidelines",
    category: ['branding'],
    image: "placeholder"
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeCategory));
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ui-ux', name: 'UI/UX Design' },
    { id: 'branding', name: 'Branding' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'motion', name: 'Motion' }
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <h2 className="section-title">Portfolio</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as ProjectCategory)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 font-medium",
                activeCategory === category.id 
                  ? "bg-navy text-white" 
                  : "bg-gray-100 text-charcoal/80 hover:bg-gray-200"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-sm border border-gray-100 aspect-[4/3] bg-offwhite animate-fade-in"
              style={{ animationDelay: `${project.id * 0.1}s` }}
            >
              {/* Project visual placeholder - would be replaced with actual images */}
              <div className="absolute inset-0 flex items-center justify-center bg-navy/5 group-hover:bg-navy/10 transition-colors duration-300">
                <div className="w-16 h-16 rounded-full bg-navy/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-navy/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              
              {/* Project info overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-navy/0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.category.map((cat) => (
                    <span key={cat} className="text-xs px-2 py-1 bg-white/20 rounded-full text-white">
                      {cat === 'ui-ux' ? 'UI/UX Design' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* View project button */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                <button className="bg-white text-navy font-medium px-5 py-2 rounded-full shadow-lg hover:bg-navy hover:text-white transition-colors duration-300">
                  Coming Soon
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
