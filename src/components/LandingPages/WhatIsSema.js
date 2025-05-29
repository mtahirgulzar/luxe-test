import React, { useEffect, useState } from 'react';
import './WhatIsSema.css';

const WhatIsSema = () => {
  const [cityId, setCityId] = useState('1');
  const [urlParams, setUrlParams] = useState('');

  // console.log(treatmentsData)
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

  const getUrlWithParams = (url) => {
    return `${url}${urlParams ? `?${urlParams}` : ''}`;
  };

  // const getUrlWithParams = (url) => {
  //   if (typeof window !== 'undefined') {
  //     const currentUrl = new URL(window.location.href);
  //     currentUrl.pathname = `${url}/${cityId}`;
  //     return decodeURIComponent(currentUrl.toString());
  //   }; return `${url}/${cityId}`;
  // };

  return (
    <div className="what-is-sema">
      <div className="content-wrapper">
        <h2 className="greenTitle" style={{ textAlign: 'center' }}>WHAT IS SEMAGLUTIDE?</h2>
        <ul className="bullet-list">
          <li>
            <span className="checkmark-icon">✔</span>
            <span className="bullet-text">
              <span className="bullet-heading">Summary:</span> Semaglutide, also known as Ozempic and Wegovy, is a medication that stimulates weight loss by mimicking the natural hormone GLP-1, which regulates blood sugar and appetite. It's a synthetic version of this hormone that helps you feel full, aiding in weight loss for individuals dealing with excess body weight.
            </span>
          </li>
          <li>
            <span className="checkmark-icon">✔</span>
            <span className="bullet-text">
              <span className="bullet-heading">Effective:</span> Patients lose an average of 15% of their body weight. For example, a 200 lb person loses an average of 30 lbs.
            </span>
          </li>
          <li>
            <span className="checkmark-icon">✔</span>
            <span className="bullet-text">
              <span className="bullet-heading">FDA approved:</span> Semaglutide (generic for Ozempic, and Wegovy) is FDA approved for weight loss. It is estimated that millions are already taking it.
            </span>
          </li>
          <li>
            <span className="checkmark-icon">✔</span>
            <span className="bullet-text">
              <span className="bullet-heading">Next generation of weight loss:</span> Previously weight loss drugs worked as a stimulant. This works by using your body's natural methods to decrease appetite.
            </span>
          </li>
        </ul>

        <div style={{ margin: 'auto', textAlign: 'center' }}>

        <p style={{ margin: 'auto', textAlign: 'center' }}>Start Today for only $285 per month</p>
        {/* <p style={{ margin: 'auto', textAlign: 'center' }}>Start Today for only $330</p> */}
        {/* <p style={{fontSize:"80%"}}>Continuing subscriptions at $350/5 Weeks</p> */}

        {/* <a href={`/city/25fcfd47-fd50-459e-8468-920a0eacb9ff${typeof window !== 'undefined' && localStorage.getItem('cityId') ? `/${localStorage.getItem('cityId')}` : ''}`} style={{ textDecoration: 'none' }}> */}
          {/* <a href={getUrlWithParams('/city/25fcfd47-fd50-459e-8468-920a0eacb9ff')} style={{ textDecoration: 'none' }}> */}
          <a href="#treatments" style={{ textDecoration: 'none' }}>
            <button className="bookOnlineButton">GET STARTED</button>
          </a>
        {/* <button className="bookOnlineButton">GET STARTED</button> */}
        </div>
      </div>
    </div>
  );
};

export default WhatIsSema;
