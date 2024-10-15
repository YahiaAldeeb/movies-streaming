import React from 'react';
import AllMoviesButton from '../AllMoviesButton/AllMoviesButton';
import "./HeroSection.css"
function HeroSection() {
  return (
    <section className="hero">
        <div className="hero-overlay">
            <h1 className="hero-title">Unlimited movies, TV shows, and more</h1>
            <p className="hero-subtitle">Everything For Free!!</p>
            <p className="hero-text">Ready to watch?.</p>
            <div className="hero-input-container">
            <AllMoviesButton/>
            </div>
      </div>  
    </section>
  );
}

export default HeroSection;
