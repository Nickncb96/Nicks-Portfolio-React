import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contact</h2>
        <ul className="list-unstyled text-center">
          <li>Email: example@email.fa.ke</li>
          <li>Phone: +1234567890</li>
          <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          {/* Replace with actual links */}
        </ul>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;







