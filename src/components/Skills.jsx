import React from 'react';
import './Skills.css';

const Skills = () => {
  const categories = [
    {
      title: "AI & Workflows",
      skills: ["Prompt Engineering", "AI-Assisted Coding", "Workflow Automation", "LLM Integration", "Agentic Systems"]
    },
    {
      title: "Frontend Engineering",
      skills: ["React / Next.js", "Javascript / Typescript", "Modern CSS / Tailwind", "Responsive UI", "Animations"]
    },
    {
      title: "Product & Design",
      skills: ["Rapid Prototyping", "UI / UX Design", "Admin Panel Design", "Business Logic Planning", "Systems Architecture"]
    }
  ];

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <h2 className="section-title">
          My <span className="gradient-text">Arsenal</span>
        </h2>
        
        <div className="skills-grid">
          {categories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
