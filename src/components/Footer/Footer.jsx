import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer'>
        <div className='footer-item'>
          <h3>Vildan Akbulut</h3>
          

          <div className='footer-social'>
            <a href='https://www.facebook.com/'>
            <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href='https://twitter.com/'>
            <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href='https://www.instagram.com/'>
            <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href='https://www.linkedin.com/'>
            <FontAwesomeIcon icon={faLinkedinIn} />

            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
