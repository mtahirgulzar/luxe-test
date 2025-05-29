import React, { useEffect, useState } from 'react';
import './HowGLPWorks.css';
import desktopImage from '../../images/desktopGLP.png';

const ImageComponent = () => {
  const [cityId, setCityId] = useState('1');
  const [urlParams, setUrlParams] = useState('');

  const getCityId = () => {
    if (typeof window !== 'undefined') {
      // Check if the URL contains the word "maddisonville"
      const url = window.location.href.toLowerCase();
      if (url.includes('maddisonville')) {
        localStorage.setItem('cityID', '3');
        return '3';
      } else if (url.includes('rgv')) {
        localStorage.setItem('cityID', '4');
        return '4';
      } else if (url.includes('austin')) {
        localStorage.setItem('cityID', '2');
        return '2';
      } else {
        // Check if cityID exists in local storage, otherwise set it to '1'
        const storedCityID = localStorage.getItem('cityID');
        if (storedCityID) {
          return storedCityID;
        } else {
          localStorage.setItem('cityID', '1');
          return '1';
        }
      }
    }
    // Return '1' as the default value when window is not defined
    return '1';
  };

  useEffect(() => {
    const fetchedCityId = getCityId();
    setCityId(fetchedCityId);
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
    return `/city/25fcfd47-fd50-459e-8468-920a0eacb9ff/${cityId}${urlParams ? `?${urlParams}` : ''}`;
  };

  return (
    <div className="container" id="howItWorks">
      <div className="contentSectionGLP">
        <div className="imageContainer">
          <img src={desktopImage} alt="GLP" className="image" />
        </div>
        <div className="stepsSectionGLP">
          <div className="buttonContainer">
            {/* <a href={getUrlWithParams()} style={{ textDecoration: 'none' }}> */}
            <a href="#treatments" style={{ textDecoration: 'none' }}>
              <button className="bookOnlineButton" style={{ margin: 'auto', width: '350px', marginBottom: '15px' }}>
                GET STARTED
              </button>
            </a>
            <br />
            <a href={`#side-effects${urlParams ? `?${urlParams}` : ''}`}>
              <button className="bookOnlineButton" style={{ margin: 'auto', width: '350px' }}>
                LEARN ABOUT SIDE EFFECTS
              </button>
            </a>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
