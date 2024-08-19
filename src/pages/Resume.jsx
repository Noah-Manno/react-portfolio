import React from 'react';
import './css/Resume.css';
import { Container } from 'react-bootstrap';

export default function Resume() {
  return (
    <section className="resume-container">
      <div className="resume-overlay"></div>
      <div className="resume-content">
        <a href="../../public/Resume.pdf" download className="resume-download-button">Download Resume</a>
        <h1 className="resume-title">Resume</h1>
        <Container>
          <div className="resume-section">
            <h2 className="resume-subtitle">Contact</h2>
            <p className="resume-info">
              <strong>Name:</strong> Noah Manno<br />
              <strong>Phone:</strong> <a href="tel:+16092358826">609-235-8826</a><br />
              <strong>Email:</strong> <a href="mailto:noahmanno19@gmail.com">noahmanno19@gmail.com</a><br />
              <strong>Location:</strong> Parsippany, New Jersey<br />
              <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/noah-manno/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a><br />
              <strong>Portfolio:</strong> <a href="https://noah-manno.github.io/portfolio-website-v3/" target="_blank" rel="noopener noreferrer">Portfolio</a><br />
              <strong>GitHub:</strong> <a href="https://github.com/Noah-Manno" target="_blank" rel="noopener noreferrer">Noah-Manno</a>
            </p>
          </div>
          <div className="resume-section">
            <h2 className="resume-subtitle">Summary</h2>
            <p className="resume-info">
              Full Stack Web Developer with training from Rutgers University Coding Bootcamp. Specialized in JavaScript, CSS, and UI/UX design. Adept in Agile environments and clean code delivery. Focused on continuous learning and innovation in tech.
            </p>
          </div>
          <div className="resume-section">
            <h2 className="resume-subtitle">Skills</h2>
            <p className="resume-info">
              <strong>Languages:</strong> JavaScript, HTML, CSS, PostgreSQL<br />
              <strong>Tools:</strong> VS Code, Node.js, Express.js, React, GitHub<br />
              <strong>Frameworks/Libraries:</strong> jQuery, Bootstrap, Materialize<br />
              <strong>Additional:</strong> Responsive design, API Integration
            </p>
          </div>
          <div className="resume-section">
            <h2 className="resume-subtitle">Projects</h2>
            <div className="resume-project">
              <h3 className="resume-project-title">Community Connect</h3>
              <a href="https://community-connect-img3.onrender.com/" target="_blank" rel="noopener noreferrer">Visit Project</a>
              <p className="resume-project-description">
                A platform for non-profits to collaborate and share information. Features event promotion and discussion forums. Technologies: HTML, CSS, JavaScript, Node.js.
              </p>
            </div>
            <div className="resume-project">
              <h3 className="resume-project-title">Taste Harmony</h3>
              <a href="https://noah-manno.github.io/taste-harmony/" target="_blank" rel="noopener noreferrer">Visit Project</a>
              <p className="resume-project-description">
                A web app integrating taste preferences with recipe suggestions. Features food API integration and local storage. Technologies: HTML, CSS, JavaScript.
              </p>
            </div>
            <div className="resume-project">
              <h3 className="resume-project-title">Pokemon Plaza</h3>
              <a href="https://noah-manno.github.io/pokemon-plaza/" target="_blank" rel="noopener noreferrer">Visit Project</a>
              <p className="resume-project-description">
                A webpage providing detailed information on Pokemon. Includes search and local storage. Technologies: HTML, CSS, JavaScript.
              </p>
            </div>
          </div>
          <div className="resume-section">
            <h2 className="resume-subtitle">Experience</h2>
            <div className="resume-job">
              <h3 className="resume-job-title">Music Producer, Audio Engineer</h3>
              <p className="resume-job-location">Cut Off Studios, Remote (2023 – Present)</p>
              <p className="resume-job-description">
                Creates high-quality recordings, collaborates with diverse teams, and manages projects. Recognized in the Best of College Acapella Compilation Album.
              </p>
            </div>
            <div className="resume-job">
              <h3 className="resume-job-title">Technology Educator, Music Educator</h3>
              <p className="resume-job-location">Barnegat High School (2023 – 2024)</p>
              <p className="resume-job-description">
                Teaches technology and music, increased class enrollment, and led students to international competition success.
              </p>
            </div>
          </div>
          <div className="resume-section">
            <h2 className="resume-subtitle">Education</h2>
            <p className="resume-info">
              <strong>Rutgers University</strong> - Full-Stack Coding Certificate (In-Progress)<br />
              <strong>Millersville University</strong> - Bachelor of Science in Music Education and Bachelor of Arts in Vocal Performance, Summa Cum Laude
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}

