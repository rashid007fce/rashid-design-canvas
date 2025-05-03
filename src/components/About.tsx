
import React from 'react';
import { cn } from '@/lib/utils';

interface EducationItem {
  degree: string;
  school: string;
  period: string;
  year: string;
}

const education: EducationItem[] = [
  {
    degree: "BS in Multimedia Technology",
    school: "Punjab Technical University",
    period: "2011–2012",
    year: "2012"
  },
  {
    degree: "Diploma in Design & VFX",
    school: "DQ School of Visual Arts",
    period: "2014",
    year: "2014"
  },
  {
    degree: "Brand Management",
    school: "University of London",
    period: "2022",
    year: "2022"
  },
  {
    degree: "UI/UX Bootcamp",
    school: "Upgrad",
    period: "2024",
    year: "2024"
  }
];

const ValueCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
    <h3 className="text-lg font-semibold text-navy mb-2">{title}</h3>
    <p className="text-charcoal/80">{description}</p>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <p className="text-lg text-charcoal/80 mb-6">
              I'm Rashid Ansari, a versatile visual designer with over 9 years of experience in the digital design industry. My expertise spans across branding, UI/UX design, marketing design, and video production, allowing me to bring a multidisciplinary approach to every project.
            </p>
            <p className="text-lg text-charcoal/80 mb-6">
              Throughout my career, I've collaborated with startups, tech companies, and e-commerce brands to create compelling visual narratives that drive engagement and business growth. My passion lies in creating user-centric designs that seamlessly blend aesthetics with functionality.
            </p>
            <p className="text-lg text-charcoal/80 mb-8">
              I believe great design is invisible - it should enhance the user experience without calling attention to itself. This philosophy guides my approach to every project, ensuring that the end result is not just visually stunning but also intuitive and effective.
            </p>
            
            <h3 className="text-2xl font-semibold text-navy mb-6">Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ValueCard 
                title="Creativity" 
                description="Approaching each project with fresh perspectives and innovative ideas" 
              />
              <ValueCard 
                title="Strategy" 
                description="Aligning design decisions with business goals and user needs" 
              />
              <ValueCard 
                title="Innovation" 
                description="Embracing new technologies and methodologies to stay ahead" 
              />
              <ValueCard 
                title="User-Centric" 
                description="Placing the end user at the heart of every design decision" 
              />
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-semibold text-navy mb-6">Education</h3>
            <div className="space-y-0">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="bg-offwhite inline-block px-3 py-1 rounded text-sm font-medium text-navy/80 mb-1">
                    {edu.period}
                  </div>
                  <h4 className="font-semibold text-navy text-lg">{edu.degree}</h4>
                  <p className="text-charcoal/80">{edu.school}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
