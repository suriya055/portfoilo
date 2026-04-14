import React from 'react';
import { ArrowRight, Download, Bot } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="glow-sphere sphere-1"></div>
        <div className="glow-sphere sphere-2"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge">
            <Bot size={16} className="badge-icon" />
            <span>Available for new projects</span>
          </div>
          
          <h1 className="hero-title" style={{ fontSize: '3.5rem' }}>
            Tech Bull 360 <br />
            <span className="gradient-text">AI Automation Agency</span>
          </h1>
          
          <p className="hero-subtitle">
            At Tech Bull 360, we design and develop professional websites, mobile apps, admin dashboards, and AI-powered digital solutions for modern businesses. We turn ideas into fast, scalable, and impactful products.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
            <a href="./UDHAYA SURIYA RESUME.pdf" className="btn btn-outline" download="UDHAYA SURIYA RESUME.pdf">
              <Download size={18} /> Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
