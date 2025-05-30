import React, { useState, useEffect } from 'react';
import './exceptionalMedicine.css';
import { StaticImage } from 'gatsby-plugin-image';

const ExceptionalMedicine = ({ pageContext }) => {
  const [urlParams, setUrlParams] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = window.location.href;
      const paramIndex = url.indexOf('?');
      if (paramIndex !== -1) {
        const paramString = url.slice(paramIndex + 1);
        setUrlParams(paramString);
      }
    }
  }, []);

  const getUrlWithParams = () => {
    // console.log(pageContext);
    if (pageContext && pageContext.treatmentsPage) {
      return `/${pageContext.treatmentsPage}${urlParams ? `?${urlParams}` : ''}`;
    } else {
      // return `#treatments${urlParams ? `?${urlParams}` : ''}`;
      return `#treatments`;
    }
  };

  return (
    <div className="exceptional-medicine">
      <hr className="sectionhr" />
      <div className="greenTitle">EXCEPTIONAL MEDICINE</div>
      <div className="exceptional-medicine__grid">
        <div className="exceptional-medicine__card">
          <div className="exceptional-medicine__icon">
            <StaticImage src="../../images/relief.webp" alt="relief icon" width={100} height={100} /> 
          </div>
          <div className="exceptional-medicine__content">
            <div className="exceptional-medicine__subheading">Fast Relief</div>
            <div className="exceptional-medicine__text">Most patients start to feel better within 30 minutes.</div>
          </div>
        </div>
        <div className="exceptional-medicine__card">
          <div className="exceptional-medicine__icon">
            <StaticImage src="../../images/energy.webp" alt="energy icon" width={100} height={100} /> 
          </div>
          <div className="exceptional-medicine__content">
            <div className="exceptional-medicine__subheading">Bounce Back Faster</div>
            <div className="exceptional-medicine__text">
              Formulated to give you a boost of energy to feel normal through your day.
            </div>
          </div>
        </div>
        <div className="exceptional-medicine__card">
          <div className="exceptional-medicine__icon">
            <StaticImage src="../../images/brain.webp" alt="brain icon" width={100} height={100} /> 
          </div>
          <div className="exceptional-medicine__content">
            <div className="exceptional-medicine__subheading">Cutting Edge</div>
            <div className="exceptional-medicine__text">
              Developed by Dr. Rosines, the medical director for 7 Houston Emergency Rooms.
            </div>
          </div>
        </div>
        <div className="exceptional-medicine__card">
          <div className="exceptional-medicine__icon">
            <StaticImage src="../../images/pestle.webp" alt="pestle icon" width={100} height={100} /> 
          </div>
          <div className="exceptional-medicine__content">
            <div className="exceptional-medicine__subheading">Customizable</div>
            <div className="exceptional-medicine__text">
              We can select various combinations of treatments to fit your individual needs.
            </div>
          </div>
        </div>
      </div>
      <a href={getUrlWithParams()}
        onClick={(e) => {
          // {console.log('pagecontext in exceptional medicine', pageContext)}
          if (!pageContext.treatmentsPage) {
            e.preventDefault();
            const targetElement = document.getElementById('treatments');
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }}>
        <button className="bookOnlineButton">BOOK ONLINE</button>
      </a>
    </div>
  );
};

export default ExceptionalMedicine;
