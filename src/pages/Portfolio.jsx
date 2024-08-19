import React from 'react';
import './css/Portfolio.css';
import { Container } from 'react-bootstrap';

export default function Portfolio() {
  return (
    <section className="portfolio-container">
      <div className="portfolio-overlay"></div>
      <div className="portfolio-content">
        <h1 className="portfolio-title">Portfolio</h1>
        <Container>
          <div className="portfolio-section">
            <div className="portfolio-project">
              <h2 className="portfolio-project-title">Community Connect</h2>
              <a href="https://community-connect-img3.onrender.com/" target="_blank" rel="noopener noreferrer" className="portfolio-project-link">Visit Project</a>
              <p className="portfolio-project-description">
                CommUnity Connect is a full-service platform designed to foster collaboration and sharing among non-profit organizations. Features include information exchange, event promotion, and interactive discussion forums. Technologies used: HTML, CSS, JavaScript, Node.js, Express.js, PostgreSQL.
              </p>
            </div>
            <div className="portfolio-project">
              <h2 className="portfolio-project-title">Taste Harmony</h2>
              <a href="https://noah-manno.github.io/taste-harmony/" target="_blank" rel="noopener noreferrer" className="portfolio-project-link">Visit Project</a>
              <p className="portfolio-project-description">
                Taste Harmony integrates taste preferences with recipe suggestions. Features include food API integration and local storage. Technologies used: HTML, CSS, JavaScript.
              </p>
            </div>
            <div className="portfolio-project">
              <h2 className="portfolio-project-title">Pokemon Plaza</h2>
              <a href="https://noah-manno.github.io/pokemon-plaza/" target="_blank" rel="noopener noreferrer" className="portfolio-project-link">Visit Project</a>
              <p className="portfolio-project-description">
                Pokemon Plaza provides comprehensive information on Pokemon, including stats, types, abilities, and moves. It includes search functionality and local storage. Technologies used: HTML, CSS, JavaScript.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

