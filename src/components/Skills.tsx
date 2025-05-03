
import React from 'react';

interface SkillCategory {
  name: string;
  skills: string[];
  icon: JSX.Element;
}

const skillCategories: SkillCategory[] = [
  {
    name: "Branding",
    skills: ["Brand Identity", "Logo Design", "Style Guides", "Brand Strategy", "Visual Identity"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    )
  },
  {
    name: "Marketing Designs",
    skills: ["Social Media Graphics", "Ad Campaigns", "Email Designs", "Print Materials", "Presentations"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 3.75 16.5 16.5M3.75 20.25l16.5-16.5" />
      </svg>
    )
  },
  {
    name: "UI Design",
    skills: ["Web Interfaces", "Mobile App Design", "Responsive Design", "Design Systems", "Wireframing"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
      </svg>
    )
  },
  {
    name: "Graphic & Print Design",
    skills: ["Typography", "Layout Design", "Packaging", "Illustrations", "Infographics"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
      </svg>
    )
  },
  {
    name: "Video Production",
    skills: ["Video Editing", "Motion Graphics", "Storyboarding", "Animation", "Visual Effects"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" d="M15.75 10.5 21 3.75M15.75 10.5 21 17.25M15.75 10.5h-7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5A2.25 2.25 0 0 1 9 2.25H4.5A2.25 2.25 0 0 0 2.25 4.5v10.5A2.25 2.25 0 0 0 4.5 17.25h4.5a2.25 2.25 0 0 1 2.25 2.25V4.5Z" />
      </svg>
    )
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-offwhite p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-navy/10 p-3 rounded-lg text-navy mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy">{category.name}</h3>
              </div>
              
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-charcoal/80">
                    <svg className="w-4 h-4 text-navy mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
