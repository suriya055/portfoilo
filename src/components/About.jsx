import React from 'react';
import { Cpu, Zap, LineChart, Code } from 'lucide-react';
import './About.css';

const About = () => {
  const workflows = [
    {
      icon: <Cpu size={24} />,
      title: 'Analyze & Plan',
      desc: 'Deeply understand the business problem and architecture requirements.'
    },
    {
      icon: <Zap size={24} />,
      title: 'AI-Assisted Build',
      desc: 'Use advanced prompt engineering to scaffold code, UI, and logic rapidly.'
    },
    {
      icon: <Code size={24} />,
      title: 'Refine & Polish',
      desc: 'Iterate with human expertise to ensure premium design and bug-free code.'
    },
    {
      icon: <LineChart size={24} />,
      title: 'Deliver Output',
      desc: 'Ship hyper-optimized, scalable products in a fraction of traditional time.'
    }
  ];

  return (
    <section className="section about" id="about">
      <div className="container">
        <h2 className="section-title">
          How I Build <span className="gradient-text">Different</span>
        </h2>
        
        <div className="about-grid">
          <div className="about-text">
            <h3>Breaking the traditional development bottleneck.</h3>
            <p>
              I specialize in building practical, fast, and modern digital solutions using AI-assisted workflows. Instead of manually typing every line of boilerplate, I orchestrate AI models to generate robust architectures, allowing me to focus entirely on **business logic, premium user experiences, and rapid delivery.**
            </p>
            <p className="highlight-text">
              My superpower is turning your raw concept into a live, usable product faster than a traditional agency can even draft a proposal.
            </p>
          </div>
          
          <div className="workflow-cards">
            {workflows.map((step, index) => (
              <div key={index} className="workflow-card">
                <div className="icon-wrapper">{step.icon}</div>
                <div className="workflow-content">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
