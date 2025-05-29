import React, { useEffect, useState } from 'react';
import './navbar.css';

const containerStyle = {
  maxWidth: '500px',
  maxHeight: '350px',
  height: 'calc(75vw - 1rem)',
  margin: 'auto',
  position: 'relative',
};

function NavBar ({ pageContext }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [modal, setModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('+18329797034');
  const [urlParams, setUrlParams] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cityID = localStorage.getItem('cityID');
      const url = window.location.href.toLowerCase();

      switch (true) {
        case cityID === '4' || url.includes('rgv'):
          setPhoneNumber('+19564318240');
          break;
        case cityID === '2' || url.includes('austin'):
          setPhoneNumber('+17373258075');
          break;
        default:
          setPhoneNumber('+18329797034');
      }

      const searchParams = new URLSearchParams(window.location.search);
      setUrlParams(searchParams.toString());
    }
  }, []);

  const getUrlWithParams = (url) => {
    return `${url}${urlParams ? `?${urlParams}` : ''}`;
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  function toggleVisible () {
    setIsNavExpanded(!isNavExpanded);
  }

  function toggleDropdown (e) {
    e.preventDefault();
    const dropdownContent = e.currentTarget.nextSibling;
    const isVisible = dropdownContent.style.display === 'block';
    dropdownContent.style.display = isVisible ? 'none' : 'block';
  }

  return (
    <nav className="navbar">
      <a href={getUrlWithParams('/')} className="navbar-logo">
        <img alt="logo" src={require('../../images/luxe_logo.webp').default} className="navbar-logo-img" />
      </a>
      <div className="navbar-links-container" style={{ justifyContent: 'right', gap: '30px' }}>
        <div className="navbar-text-links">
          <div className="dropdown">
            <a href={getUrlWithParams('/more')} onClick={toggleDropdown}>
              Drip Menu
            </a>
            <div className="dropdown-content">
              <a href={getUrlWithParams('/hangover')}>Hangover Drips</a>
              <a href={getUrlWithParams('/advanced-medicine')}>Advanced Medicine Drips</a>
              <a href={getUrlWithParams('/hydration')}>Hydration Drips</a>
              <a href={getUrlWithParams('/workplacehydration')}>Workplace Hydration Drips</a>
              <a href={getUrlWithParams('/sickness')}>Sickness Drips</a>
              <a href={getUrlWithParams('/about')}>About</a>
            </div>
          </div>
        </div>
        <div className="navbar-buttons">
          <a href={getUrlWithParams('/#allservices')}>
            <button onClick={toggleModal} className="navbar-button">
              BOOK ONLINE
            </button>
          </a>
          {pageContext && pageContext.phoneNumber
            ? <a href={`tel:${pageContext.phoneNumber}`}><button className="navbar-button">
              CALL
            </button>
          </a>
            : <a href={`tel:${phoneNumber}`}><button className="navbar-button">
              CALL
            </button>
          </a> }
        </div>
      </div>
      <div className="navigationToggle" onClick={toggleVisible}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <ul className={isNavExpanded ? 'navbar-menu expanded' : 'navbar-menu closed'}>
        <a href={getUrlWithParams('/about')}>About</a>
        <a href={getUrlWithParams('/hangover')}>Hangover Drips</a>
        <a href={getUrlWithParams('/advanced-medicine')}>Advanced Medicine Drips</a>
        <a href={getUrlWithParams('/hydration')}>Hydration Drips</a>
        <a href={getUrlWithParams('/workplacehydration')}>Workplace Hydration Drips</a>
        <a href={getUrlWithParams('/sickness')}>Sickness Drips</a>
      </ul>
    </nav>
  );
}

export default NavBar;
