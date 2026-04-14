import React from 'react';
import { Mail, Smartphone, Link, Terminal, MessageCircle, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const whatsappMessage = encodeURIComponent("Hi Tech Bull 360! I'd like to discuss a project with you.");

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
              Let's Build <span className="gradient-text">Something</span>
            </h2>
            <p className="contact-desc">
              Have a project in mind? Reach out to discuss how we can leverage AI to accelerate your development and build a premium digital product.
            </p>
            
            <div className="contact-methods">
              <a href="mailto:udhayasuriya035@gmail.com" className="contact-item">
                <div className="contact-icon"><Mail size={20} /></div>
                <div>
                  <h4>Email</h4>
                  <span>udhayasuriya035@gmail.com</span>
                </div>
              </a>
              
              <a href="tel:+919025980641" className="contact-item">
                <div className="contact-icon"><Smartphone size={20} /></div>
                <div>
                  <h4>Phone</h4>
                  <span>+91 9025980641</span>
                </div>
              </a>
              
              <a href={`https://wa.me/919025980641?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-icon"><MessageCircle size={20} /></div>
                <div>
                  <h4>WhatsApp</h4>
                  <span>Chat on WhatsApp</span>
                </div>
              </a>
              
              <div className="contact-item">
                <div className="contact-icon"><MapPin size={20} /></div>
                <div>
                  <h4>Location</h4>
                  <span>India | Remote Services Worldwide</span>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://www.linkedin.com/in/udhaya-suriya-1a59a5230?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="social-link"><Link size={20} /></a>
              <a href="https://github.com/suriya055" target="_blank" rel="noopener noreferrer" className="social-link"><Terminal size={20} /></a>
            </div>
          </div>
          
          {/* WhatsApp CTA Card */}
          <div className="whatsapp-cta-wrapper">
            <div className="whatsapp-cta-card">
              <div className="wa-icon-ring">
                <MessageCircle size={48} />
              </div>
              <h3>Start a Conversation</h3>
              <p>
                Got an idea? We'd love to hear it. Message us directly on WhatsApp and we'll get back to you within minutes!
              </p>
              <a
                href={`https://wa.me/919025980641?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="wa-btn"
              >
                <MessageCircle size={22} />
                Message on WhatsApp
              </a>
              <span className="wa-note">Typically replies within a few minutes</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
