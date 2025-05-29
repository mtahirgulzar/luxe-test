import React, { useEffect, useState } from 'react';
import './navbar.css';
import { getCityID, getPhoneNumber } from '../LandingPages/cityUtils';

function NavBar ({ pageContext }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [urlParams, setUrlParams] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('+18329797034');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      setUrlParams(searchParams.toString());

      const cityID = getCityID();
      setPhoneNumber(getPhoneNumber(cityID));
    }
  }, []);

  const getUrlWithParams = (url) => {
    return `${url}${urlParams ? `?${urlParams}` : ''}`;
  };

  function toggleVisible () {
    setIsNavExpanded(!isNavExpanded);
  }

  const handleBookOnlineClick = (e) => {
    e.preventDefault();
    const allServicesElement = document.getElementById('allservices');
    if (allServicesElement) {
      allServicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <a href={getUrlWithParams('/')} className="navbar-logo">
        <img alt="logo" src={require('../../images/luxe_logo.webp').default} className="navbar-logo-img" />
      </a>
      {/* Desktop buttons - visible on larger screens */}
      <div className="navbar-buttons">
        <div className="desktop-only">
          <a href={getUrlWithParams('/#allservices')} onClick={handleBookOnlineClick}>
            <button className="navbar-button">BOOK ONLINE</button>
          </a>
          {pageContext && pageContext.phoneNumber
            ? <a href={`tel:${pageContext.phoneNumber}`}>
              <button className="navbar-button">
                CALL
              </button>
            </a>
            : <a href={`tel:${phoneNumber}`}>
              <button className="navbar-button">
                CALL
              </button>
            </a>
          }
        </div>

      </div>
      {/* Hamburger menu toggle - visible on all screen sizes */}
      <div className="navigationToggle" onClick={toggleVisible}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      {/* Unified dropdown menu - visible on all screen sizes when expanded */}
      <ul className={isNavExpanded ? 'navbar-menu expanded' : 'navbar-menu closed'}>
        <li><a href={getUrlWithParams('/')}>Home</a></li>
        <li><a href={getUrlWithParams('/about/')}>About</a></li>
        <li><p>Therapy Categories</p></li>
        {/* <li><a href={getUrlWithParams('/weightloss/')}>Weight Loss Injections</a></li> */}
        <li><a href={getUrlWithParams('/hangover/')}>Hangover Drips</a></li>
        <li><a href={getUrlWithParams('/advanced-medicine/')}>Advanced Medicine Drips</a></li>
        <li><a href={getUrlWithParams('/hydration/')}>Hydration Drips</a></li>
        <li><a href={getUrlWithParams('/nad/')}>NAD+ Shots and Drips</a></li>
        <li><a href={getUrlWithParams('/sickness/')}>Sickness Drips</a></li>
        <li><p>Locations</p></li>
        <li><a href={getUrlWithParams('/houston/')}>Houston</a></li>
        <li><a href={getUrlWithParams('/austin/')}>Austin</a></li>
        <li><a href={getUrlWithParams('/rgv/')}>Rio Grande Valley</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
