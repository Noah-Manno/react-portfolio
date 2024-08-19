import React from 'react';
import './css/AboutMe.css';

export default function AboutMe() {
  return (
    <section className="aboutme-container">
      <div className="aboutme-overlay"></div>
      <div className="aboutme-content">
        <div className="headshot"></div>
        <h1 className="aboutme-title">About Me</h1>
        <p className="aboutme-description">
        Versatile Full-Stack Web Developer with comprehensive training from Rutgers University Coding Bootcamp, specializing in JavaScript, CSS, and UI/UX design and development. Adept at collaborating within Agile environments, delivering clean code, and communicating effectively. Dedicated to continuous learning and innovation in both front-end and back-end technologies.
        </p>
      </div>
    </section>
  );
}



