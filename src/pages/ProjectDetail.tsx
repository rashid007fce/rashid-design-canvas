
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  id: number;
  title: string;
  category: string[];
  image: string;
  description?: string;
  client?: string;
  year?: string;
  skills?: string[];
  slug?: string;
  content?: {
    challenge?: string;
    solution?: string;
    outcome?: string;
  };
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-commerce App Redesign",
    category: ['ui-ux'],
    image: "placeholder",
    description: "A comprehensive redesign of an e-commerce platform focusing on user experience and conversion optimization.",
    client: "Fashion Retailer",
    year: "2023",
    skills: ["UI Design", "UX Research", "Wireframing", "Prototyping"],
    slug: "ecommerce-redesign",
    content: {
      challenge: "The client's existing e-commerce platform had a high cart abandonment rate and users were struggling to navigate through product categories efficiently.",
      solution: "After thorough user research, I redesigned the navigation system and checkout process to be more intuitive. I implemented a simplified product filtering system and streamlined the checkout flow to reduce friction points.",
      outcome: "The redesign resulted in a 24% decrease in cart abandonment and a 18% increase in average order value. User testing showed significant improvement in task completion rates."
    }
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
    slug: "annual-report",
    content: {
      challenge: "The client needed to transform complex financial data into an engaging annual report that would appeal to both stakeholders and potential investors.",
      solution: "I designed a clean, modern layout with custom infographics and data visualizations to present financial information in an accessible way. The design used sophisticated typography and a minimal color palette to maintain professionalism while enhancing readability.",
      outcome: "The report was praised by stakeholders for its clarity and visual appeal. The client reported increased engagement with the financial data compared to previous years' reports."
    }
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
    slug: "product-catalog",
    content: {
      challenge: "The client needed a product catalog that would showcase their premium furniture pieces while providing detailed specifications in an organized way.",
      solution: "I created a catalog design that featured large, high-quality product photography alongside cleanly formatted specifications. The layout used a grid system that allowed for flexibility while maintaining visual consistency throughout.",
      outcome: "The catalog became a key sales tool for the company's representatives and helped increase B2B orders by 15% in the quarter following its distribution."
    }
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
    slug: "event-materials",
    content: {
      challenge: "The client needed a cohesive set of materials for their annual technology conference that would reflect their innovative brand while providing clear information to attendees.",
      solution: "I developed a visual system that could be applied across various print materials including brochures, schedules, badges, and signage. The design incorporated dynamic typography and a color-coding system to help attendees navigate the event.",
      outcome: "The materials received positive feedback from both the client and conference attendees. The wayfinding system significantly improved attendee experience according to post-event surveys."
    }
  },
  // Include more project data here
];

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching project data
    const fetchProject = () => {
      setLoading(true);
      setTimeout(() => {
        const foundProject = projectsData.find(p => p.slug === slug);
        setProject(foundProject || null);
        setLoading(false);
      }, 500);
    };
    
    fetchProject();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-32 h-4 bg-navy/20 rounded"></div>
          <div className="w-48 h-6 bg-navy/30 rounded"></div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-bold text-navy mb-4">Project Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">The project you're looking for doesn't exist or has been moved.</p>
        <Button asChild>
          <Link to="/"><ArrowLeft className="mr-2" size={16} /> Back to Portfolio</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-8">
          <Link to="/#portfolio" className="inline-flex items-center text-navy hover:text-gold transition-colors">
            <ArrowLeft className="mr-2" size={16} />
            Back to Portfolio
          </Link>
        </div>

        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600">{project.description}</p>
        </div>

        <div className="aspect-[16/9] w-full bg-gray-100 rounded-lg shadow-md flex items-center justify-center mb-12">
          <div className="text-navy/50 text-xl">Project Image</div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-navy mb-2">Client</h3>
            <p className="text-gray-700">{project.client}</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-navy mb-2">Year</h3>
            <p className="text-gray-700">{project.year}</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-navy mb-2">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {project.category.map((cat) => (
                <span key={cat} className="inline-block px-3 py-1 bg-navy/10 rounded-full text-navy text-sm">
                  {cat === 'ui-ux' ? 'UI/UX Design' : 
                   cat === 'print' ? 'Print Design' :
                   cat.charAt(0).toUpperCase() + cat.slice(1)}
                </span>
              ))}
            </div>
          </div>
        </div>

        {project.content && (
          <div className="space-y-12">
            {project.content.challenge && (
              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">The Challenge</h2>
                <p className="text-gray-700 leading-relaxed">{project.content.challenge}</p>
              </div>
            )}
            
            {project.content.solution && (
              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">The Solution</h2>
                <p className="text-gray-700 leading-relaxed">{project.content.solution}</p>
              </div>
            )}
            
            {project.content.outcome && (
              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">The Outcome</h2>
                <p className="text-gray-700 leading-relaxed">{project.content.outcome}</p>
              </div>
            )}
          </div>
        )}

        <div className="mt-12 border-t border-gray-200 pt-8">
          <h3 className="text-lg font-semibold text-navy mb-4">Skills & Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {project.skills?.map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-gray-100 rounded-md text-navy font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/#contact" className="flex items-center gap-2 mx-auto">
              Discuss a Similar Project
              <ExternalLink size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
