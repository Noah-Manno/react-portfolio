import React from 'react';
import './css/Hero.css';

export default function Home() {
  return (
    <section className="hero-container">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Noah Manno</h1>
        <p className="hero-subtitle">Creative Web Developer</p>
        <a href="/aboutme" className="hero-button">Learn More</a>
      </div>
    </section>
  );
}