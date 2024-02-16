import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container text-center">
        <p>Contact us at: <a href="mailto:info@example.com">info@example.com</a></p>
        <div>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary m-1">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-info m-1">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-danger m-1">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary m-1">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
}
