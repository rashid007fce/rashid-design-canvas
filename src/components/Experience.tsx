
import React from 'react';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "Graphic Designer V",
    company: "Bazaarvoice",
    period: "Nov 2023 – Present",
    description: "Leading design initiatives for digital marketing campaigns, creating compelling visual assets, and maintaining brand consistency across platforms."
  },
  {
    role: "Senior Graphic Designer",
    company: "Affable.ai",
    period: "Oct 2021 – Nov 2023",
    description: "Directed the visual identity for a fast-growing AI startup, designed UI components for the platform, and created marketing materials that helped scale user acquisition."
  },
  {
    role: "Senior Graphic Designer",
    company: "Snapdeal",
    period: "Aug 2015 – Nov 2021",
    description: "Contributed to one of India's largest e-commerce platforms, designing promotional campaigns, improving UI elements, and collaborating with cross-functional teams to enhance the shopping experience."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-offwhite">
      <div className="section-container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="timeline-item animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white shadow-sm border border-gray-100 p-6 rounded-lg">
                <div className="bg-navy/10 inline-block px-3 py-1 rounded text-sm font-medium text-navy mb-2">
                  {exp.period}
                </div>
                <h3 className="font-bold text-xl text-navy">{exp.role}</h3>
                <h4 className="text-lg text-navy/80 mb-3">{exp.company}</h4>
                <p className="text-charcoal/80">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
