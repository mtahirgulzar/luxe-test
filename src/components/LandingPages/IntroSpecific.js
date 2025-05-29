import React, { useEffect, useState } from 'react';
import './introSpecific.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import introImageFallback from '../../images/tombstone.webp';
import { getCityID, getPhoneNumber } from './cityUtils';

const IntroSection = ({ pageContext, tombstone }) => {
  const [cityId, setCityId] = useState('1');
  const [phoneNumber, setPhoneNumber] = useState('+18329797034');
  const optimizedTombstoneImage = getImage(tombstone);
  const [urlParams, setUrlParams] = useState('');

  useEffect(() => {
    const fetchedCityId = getCityID();
    setCityId(fetchedCityId);
    setPhoneNumber(getPhoneNumber(fetchedCityId));

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
    if (pageContext.treatmentUuid) {
      return `/city/${pageContext.treatmentUuid}/${cityId}${urlParams ? `?${urlParams}` : ''}`;
    } else if (pageContext.treatmentsPage) {
      return `/${pageContext.treatmentsPage}${urlParams ? `?${urlParams}` : ''}`;
    }
    // } else {
    //   return `/city/27aec72e-36ac-4aad-b769-b70c46759d6a/${cityId}${urlParams ? `?${urlParams}` : ''}`;
    // }
  };


  return (
    <div className="intro-section" id="intro">
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
          <a href={getUrlWithParams()}>
            <button type="button">BOOK ONLINE</button>
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
      <div className="intro-image-specific">
        {optimizedTombstoneImage
          ? (
          <GatsbyImage
            image={optimizedTombstoneImage}
            alt={pageContext.tombstoneAlt || 'Luxe Mobile IV'}
            loading="lazy"
            width={414}
            height={267}
            style={{ width: '100%', height: 'auto' }}
          />
            )
          : (
          <img src={introImageFallback} alt={pageContext.tombstoneAlt || 'Luxe Mobile IV'} loading="lazy" />
            )}
      </div>
    </div>
  );
};

export default IntroSection;
