import React, { useState, useEffect } from 'react';
import './footer.css';

const FooterPage = () => {
  const year = new Date().getFullYear();
  const [urlParams, setUrlParams] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      setUrlParams(searchParams.toString());
    }
  }, []);

  const getUrlWithParams = (url) => {
    return `${url}${urlParams ? `?${urlParams}` : ''}`;
  };

  return (
    <section className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-column-large">
          <h2 className="footer-title">
            Luxe <br /> Mobile IV
          </h2>
        </div>
        <div className="footer-column">
          <h5 className="footerTitle">Service Areas:</h5>
          <h5 className="footerSubtitle">Houston and surrounding areas:</h5>
          <ul>
            <li>Katy</li>
            <li>Cypress</li>
            <li>Woodlands</li>
            <li>Sugar Land</li>
            <li>Spring</li>
            <li>Pasadena</li>
            <li>Galveston</li>
          </ul>
          <h5 className="footerSubtitle">Rio Grande Valley</h5>
          <ul>
            <li>Brownsville</li>
            <li>McAllen</li>
            <li>Surrounding areas</li>
          </ul>
          <h5 className="footerSubtitle">Maddisonville</h5>
        </div>
        <div className="footer-column">
          <h5 className="footerTitle">Call Us!</h5>
          <a href="tel:8328107650">(832) 810-7650</a>
          <h5 className="footerTitle">Social</h5>
          <a href="https://www.instagram.com/luxemobileiv" aria-label="instagram">
            Instagram
          </a>
          <br />
          <h5 className="footerTitle">Menu</h5>
          <p className="footerLinks">
            <a href={getUrlWithParams('/weightloss')}>Weight loss injections</a>
            <br />
            <a href={getUrlWithParams('/')}>Home</a>
            <br />
            <a href={getUrlWithParams('/about')}>About</a>
            <br />
            <a href={getUrlWithParams('/hangover')}>Hangover Drips</a>
            <br />
            <a href={getUrlWithParams('/advanced-medicine')}>Advanced medicine Drips</a>
            <br />
            <a href={getUrlWithParams('/hydration')}>Hydration Drips</a>
            <br />
            <a href={getUrlWithParams('/workplace-hydration')}>Workplace hydration drips</a>
            <br />
            <a href={getUrlWithParams('/sickness')}>Sickness Drips</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p style={{ maxWidth: '740px', textAlign: 'center', margin: 'auto' }}>
          The services provided have not been evaluated by the Food and drug administration. These services are not
          intended to diagnose, treat, cure or prevent any disease. The material on this website is provided for
          informational purposes only and is not medical advice. Always consult your physician before starting any
          therapy program. © 2023 Luxe Mobile IV. Patient photos may be exchanged with stock photos to protect the
          privacy of our patients.
        </p>
        <a href={getUrlWithParams('/Luxe%20Mobile%20IV%20Legal%20Policy.pdf')}>Legal Policy</a>
        <p>&copy; Copyright © {year} Luxe Mobile IV. All Rights Reserved.</p>
      </div>
    </section>
  );
};

export default FooterPage;
