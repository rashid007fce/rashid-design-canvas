
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

type ProjectCategory = 'all' | 'ui-ux' | 'branding' | 'marketing' | 'motion' | 'print';

interface Project {
  id: number;
  title: string;
  category: ProjectCategory[];
  image: string;
  description?: string;
  client?: string;
  year?: string;
  skills?: string[];
  slug?: string;
}

// Placeholder projects
const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce App Redesign",
    category: ['ui-ux'],
    image: "placeholder",
    description: "A comprehensive redesign of an e-commerce platform focusing on user experience and conversion optimization.",
    client: "Fashion Retailer",
    year: "2023",
    skills: ["UI Design", "UX Research", "Wireframing", "Prototyping"],
    slug: "ecommerce-redesign"
  },
  {
    id: 2,
    title: "Brand Identity System",
    category: ['branding'],
    image: "placeholder",
    description: "Complete brand identity system including logo design, color palette, typography, and brand guidelines.",
    client: "Tech Startup",
    year: "2023",
    skills: ["Logo Design", "Brand Guidelines", "Visual Identity"],
    slug: "brand-identity-system"
  },
  {
    id: 3,
    title: "Marketing Campaign Assets",
    category: ['marketing'],
    image: "placeholder",
    description: "Digital and print marketing assets for a seasonal promotional campaign.",
    client: "Retail Chain",
    year: "2022",
    skills: ["Digital Design", "Campaign Strategy", "Social Media Graphics"],
    slug: "marketing-campaign"
  },
  {
    id: 4,
    title: "Product Motion Graphics",
    category: ['motion'],
    image: "placeholder",
    description: "Animated motion graphics showcasing product features and benefits for promotional videos.",
    client: "Software Company",
    year: "2023",
    skills: ["Motion Design", "Storyboarding", "Animation"],
    slug: "product-motion"
  },
  {
    id: 5,
    title: "Banking Dashboard UI",
    category: ['ui-ux'],
    image: "placeholder",
    description: "User interface design for a banking dashboard with focus on data visualization and accessibility.",
    client: "Financial Services",
    year: "2022",
    skills: ["UI Design", "Dashboard Design", "User Testing"],
    slug: "banking-dashboard"
  },
  {
    id: 6,
    title: "Corporate Brand Guidelines",
    category: ['branding'],
    image: "placeholder",
    description: "Comprehensive brand guidelines document detailing logo usage, typography, color palette and brand voice.",
    client: "Insurance Company",
    year: "2023",
    skills: ["Brand Strategy", "Style Guides", "Visual Systems"],
    slug: "corporate-brand-guidelines"
  },
  {
    id: 7,
    title: "Annual Report Design",
    category: ['print'],
    image: "placeholder",
    description: "Clean, modern design for an annual financial report with infographics and custom data visualization.",
    client: "Investment Firm",
    year: "2023",
    skills: ["Print Design", "Layout Design", "Typography", "Infographics"],
    slug: "annual-report"
  },
  {
    id: 8,
    title: "Product Catalog",
    category: ['print'],
    image: "placeholder",
    description: "Visually compelling product catalog featuring photography, specifications and pricing information.",
    client: "Furniture Manufacturer",
    year: "2022",
    skills: ["Print Design", "Photography Direction", "Layout Design"],
    slug: "product-catalog"
  },
  {
    id: 9,
    title: "Event Brochure & Materials",
    category: ['print', 'branding'],
    image: "placeholder",
    description: "Cohesive set of printed materials for a corporate event including brochures, schedules and signage.",
    client: "Technology Conference",
    year: "2023",
    skills: ["Print Design", "Branding", "Typography"],
    slug: "event-materials"
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeCategory));
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ui-ux', name: 'UI/UX Design' },
    { id: 'branding', name: 'Branding' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'motion', name: 'Motion' },
    { id: 'print', name: 'Print Design' }
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

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
              onClick={() => handleProjectClick(project)}
              className="group relative overflow-hidden rounded-lg shadow-sm border border-gray-100 aspect-[4/3] bg-offwhite animate-fade-in cursor-pointer"
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
                      {cat === 'ui-ux' ? 'UI/UX Design' : 
                       cat === 'print' ? 'Print Design' :
                       cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* View project button */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                <button className="bg-white text-navy font-medium px-5 py-2 rounded-full shadow-lg hover:bg-navy hover:text-white transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[700px] p-0 rounded-lg overflow-hidden">
          {selectedProject && (
            <>
              <div className="relative aspect-[16/9] w-full bg-gray-100 flex items-center justify-center">
                <div className="text-navy/50">Project Image</div>
              </div>
              <div className="p-6">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-navy">{selectedProject.title}</DialogTitle>
                  <DialogDescription className="text-base text-gray-600 mt-2">
                    {selectedProject.description}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="py-4 grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Client</h4>
                    <p className="text-navy">{selectedProject.client}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Year</h4>
                    <p className="text-navy">{selectedProject.year}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.skills?.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-navy">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <DialogFooter>
                  <Button variant="outline" onClick={() => setDialogOpen(false)}>
                    Close
                  </Button>
                  <Button asChild>
                    <Link to={`/projects/${selectedProject.slug}`} className="flex items-center gap-2">
                      View This Project
                      <ExternalLink size={16} />
                    </Link>
                  </Button>
                </DialogFooter>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
