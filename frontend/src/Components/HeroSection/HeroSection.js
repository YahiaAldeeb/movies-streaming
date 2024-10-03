import React from 'react';
import "./HeroSection.css"
function HeroSection() {
  return (
    <section className="hero">
        <div className="hero-overlay">
            <h1 className="hero-title">Unlimited movies, TV shows, and more</h1>
            <p className="hero-subtitle">Starts at EGP 70. Cancel anytime.</p>
            <p className="hero-text">Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="hero-input-container">
            <input type="email" placeholder="Email address" className="email-input" />
            <button className="get-started-btn">Get Started</button>
            </div>
      </div>  
    </section>
  );
}

export default HeroSection;
