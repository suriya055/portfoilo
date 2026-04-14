import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Tech Bull WhatsApp Console",
      category: "Chatbot CRM & Automation",
      problem: "Educational institutions struggle to efficiently handle high volumes of student inquiries and broadcast admission updates at scale without overwhelming their administrative staff.",
      solution: "We developed an automated, MongoDB-backed WhatsApp chatbot that handles 24/7 FAQs via the Meta Cloud API, paired with a web-based dashboard for managing contacts and executing bulk promotional campaigns.",
      stack: ["Node.js", "Express.js", "MongoDB", "Meta WhatsApp Cloud API"],
      role: "Lead Full Stack Developer",
      result: "We developed an automated, MongoDB-backed WhatsApp chatbot that handles 24/7 FAQs via the Meta Cloud API, paired with a web-based dashboard for managing contacts and executing bulk promotional campaigns.",
      placeholderImg: "url('/tech-bull-console.png') center/cover"
    },
    {
      title: "SME 360 - Mall Management Suite",
      category: "Multi-tenant SaaS Platform",
      problem: "Retail malls and multi-tenant complexes struggle with operational inefficiencies caused by fragmented systems for tenant POS, loyalty programs, directory management, and automated alerts.",
      solution: "We built an all-in-one, centralized SaaS platform that unifies multi-tenant architecture, local POS management, POS-integrated loyalty points, and automated WhatsApp/email notifications for intelligent business tracking.",
      stack: ["React.js", "Node.js", "MongoDB", "WhatsApp Cloud API", "Express.js"],
      role: "Lead AI Architect",
      result: "We built an all-in-one, centralized SaaS platform that unifies multi-tenant architecture, local POS management, POS-integrated loyalty points, and automated WhatsApp/email notifications for intelligent business tracking.",
      placeholderImg: "url('/sme-360.png') center/cover"
    },
    {
      title: "RASS - Real College Administration Support System",
      category: "AI Digital Front Desk",
      problem: "Educational institutions and businesses are overwhelmed by repetitive inquiries across messaging platforms, leading to delayed responses, fragmented student/customer support, and inefficient manual lead tracking.",
      solution: "We built an AI-powered Digital Front Desk that autonomously resolves WhatsApp queries using an intelligent RAG system and provides staff with a cohesive dashboard for human takeover, knowledge base management, and lead analytics.",
      stack: ["React", "Node.js", "MongoDB", "ChromaDB", "Google Gemini API", "Meta WhatsApp Cloud API"],
      role: "Full Stack AI Developer",
      result: "We built an AI-powered Digital Front Desk that autonomously resolves WhatsApp queries using an intelligent RAG system and provides staff with a cohesive dashboard for human takeover, knowledge base management, and lead analytics.",
      placeholderImg: "url('/rass-dashboard.png') center/cover"
    }
  ];

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <h2 className="section-title">
          Selected <span className="gradient-text">Works</span>
        </h2>
        
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <div 
                className="project-image" 
                style={{ background: project.placeholderImg }}
              >
              </div>
              
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                
                <div className="project-details">
                  <div className="detail-item">
                    <strong>Problem:</strong> {project.problem}
                  </div>
                  <div className="detail-item">
                    <strong>Outcome:</strong> {project.result}
                  </div>
                </div>

                <div className="project-tags">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="project-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
