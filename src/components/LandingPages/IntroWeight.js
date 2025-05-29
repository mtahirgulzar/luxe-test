import React from 'react';
import './intro.css';
import introImage from '../../images/treatments/altweightloss_good.webp';

const IntroSection = ({ pageContext }) => (
  <div className="intro-section">
    <div className="intro-content">
      <h1>{pageContext.introHead}</h1>
      <p className='intro-desc'>{pageContext.introDesc}</p>
      <p className="intro-details">
  {pageContext.ctaBenefits.split(' | ').map((benefit, index) => (
    <span key={index}>{benefit}<br/></span>
  ))}
      </p>
      <div className="intro-buttons">
        <a href="#treatments"
  onClick={(e) => {
    // console.log('here')
    e.preventDefault();
    const targetElement = document.getElementById('treatments');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }}><button type="button" className='bookOnlineButton'>BOOK</button></a>
        <a href="tel:+18329797034"><button type="button" className='bookOnlineButton'>CALL</button></a>
      </div>
    </div>
    <div className="intro-image">
      <img src={introImage} alt="Luxe Mobile IV" />
    </div>
  </div>
);

export default IntroSection;
