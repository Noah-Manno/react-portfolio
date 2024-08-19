import React from 'react';
import './css/ContactMe.css';
import { Container, Form, Button } from 'react-bootstrap';

export default function ContactMe() {
  return (
    <section className="contactme-container">
      <div className="contactme-overlay"></div>
      <div className="contactme-content">
        <h1 className="contactme-title">Contact Me</h1>
        <Container>
          <Form className="contactme-form">
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Your Email" />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Your Message" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
          <div className="contactme-details">
            <h2 className="contactme-subtitle">Get in Touch</h2>
            <p className="contactme-info">
              <strong>Phone:</strong> <a href="tel:+16092358826">609-235-8826</a>
            </p>
            <p className="contactme-info">
              <strong>Email:</strong> <a href="mailto:noahmanno19@gmail.com">noahmanno19@gmail.com</a>
            </p>
            <p className="contactme-info">
              <strong>GitHub:</strong> <a href="https://github.com/Noah-Manno" target="_blank" rel="noopener noreferrer">Noah-Manno</a>
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}
