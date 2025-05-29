import React from 'react';
import './introAbout.css';
import introImage from '../../images/rgvteam.jpeg';

const IntroSection = () => (
  <div className="intro-section-about">
  <br/>
    <div className="intro-content" style={{ marginTop: '10px' }}>
      <h1>Luxe Mobile IV</h1>
      <p className='intro-desc' style={{ maxWidth: '1000px' }}>
      At Luxe Mobile IV, our mission is to elevate the standard of care in IV therapy by combining the expertise of one of Houston's top-rated ER physicians with personalized, mobile treatments. We are dedicated to delivering unparalleled results for your health and well-being through physician-led care and tailored treatment plans.
</p>
      <p className="intro-details">
        {/* <span>Convenient In-Home Treatments<br/></span>
        <span>Highly Trained Medical Staff<br/></span>
        <span>Customized IV Drip Formulas<br/></span> */}
      </p>
      {/* <div className="intro-buttons">
        <a href="#treatments" onClick={(e) => {
          e.preventDefault();
          const targetElement = document.getElementById('treatments');
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }}>
          <button type="button" className='bookOnlineButton'>LEARN MORE</button>
        </a>
        <a href="tel:+18329797034">
          <button type="button" className='bookOnlineButton'>CONTACT US</button>
        </a>
      </div> */}
    </div>
    <div className="intro-image">
      <img src={introImage} alt="Luxe Mobile IV" style={{ maxWidth: '1000px' }}/>
    </div>
  </div>
);

export default IntroSection;
