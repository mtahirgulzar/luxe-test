import React, { useEffect, useState } from 'react';
import './intro.css';
// import introImage from '../../images/tombstone.webp';
import { getCityID, getPhoneNumber } from './cityUtils';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const IntroSection = ({ pageContext,tombstoneImage }) => {
  const [phoneNumber, setPhoneNumber] = useState('+18329797034');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cityID = getCityID();
      setPhoneNumber(getPhoneNumber(cityID));
    }
  }, []);

  return (
    <div className="intro-section">
      <div className="intro-content">
        <h1>{pageContext.introHead}</h1>
        <p className="intro-desc">{pageContext.introDesc}</p>
        <p className="intro-details">
          {pageContext.ctaBenefits.split(' | ').map((benefit, index) => (
            <span key={index}>
              {benefit}
              <br />
            </span>
          ))}
        </p>
        <div className="intro-buttons">
          <a
            href="#treatments"
            onClick={(e) => {
              e.preventDefault();
              const targetElement = document.getElementById('treatments');
              if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <button type="button" className="bookOnlineButton">
              BOOK
            </button>
          </a>
          {pageContext && pageContext.phoneNumber
            ? <a href={`tel:${pageContext.phoneNumber}`}><button type="button" className="bookOnlineButton">
              CALL
            </button>
            </a>
            : <a href={`tel:${phoneNumber}`}><button type="button" className="bookOnlineButton">
              CALL
            </button>
            </a> }
        </div>
      </div>
      <div className="intro-image">
        {/* <img
          src={require(`../../images/${pageContext.tombstoneImage}`).default}
          alt={pageContext.tombstoneAlt || 'Luxe Mobile IV'}
          height="705"
          width="695"
        /> */}
        <GatsbyImage image={getImage(tombstoneImage)} alt={pageContext.tombstoneAlt || 'Luxe Mobile IV'}   height="705"
          width="695" style={{ textAlign: 'center' }}/>
      </div>
    </div>
  );
};

export default IntroSection;
