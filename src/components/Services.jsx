import React from 'react';
import { MonitorSmartphone, LayoutDashboard, Rocket, FileCode2 } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <MonitorSmartphone size={32} />,
      title: "AI-Powered Websites",
      desc: "Stunning, high-conversion landing pages and portfolios built at unprecedented speeds without sacrificing quality."
    },
    {
      icon: <LayoutDashboard size={32} />,
      title: "Business Dashboards",
      desc: "Complex admin panels and data visualization dashboards structured flawlessly using AI intelligence."
    },
    {
      icon: <Rocket size={32} />,
      title: "App Prototyping",
      desc: "Converting rough ideas into real, clickable web and mobile app interfaces in days, not months."
    },
    {
      icon: <FileCode2 size={32} />,
      title: "Landing Page Design",
      desc: "SaaS and startup landing pages built to convert, optimized with responsive, mobile-first design constraints."
    }
  ];

  return (
    <section className="section services" id="services">
      <div className="container">
        <h2 className="section-title">
          What I <span className="gradient-text">Deliver</span>
        </h2>
        
        <div className="services-grid">
          {services.map((service, idx) => (
            <div key={idx} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
