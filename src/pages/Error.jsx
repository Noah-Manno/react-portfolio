import React from 'react';
import './css/Error.css';

export default function Error() {
  return (
    <section className="error-container">
      <div className="error-overlay"></div>
      <div className="error-content">
        <h1 className="error-title">404</h1>
        <p className="error-message">Oops! The page you are looking for does not exist.</p>
        <a href="/" className="error-button">Go to Home</a>
      </div>
    </section>
  );
}
