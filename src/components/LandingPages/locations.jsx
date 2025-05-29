import React, { useState } from 'react';
import './locations.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { StaticImage } from 'gatsby-plugin-image';

const locationItems = [
  { label: 'Austin, TX', href: '/austin/' },
  { label: 'Houston, TX', href: '/houston/' },
  { label: 'Rio Grande Valley, TX', href: '/rgv/' },
  { label: 'Madisonville, TX', href: '/madisonville/' },
];

const Locations = () => {
  const [activeState, setActiveState] = useState('Texas');
  return (

    <section className="location-wrapper">
      <div className='location-container'>
        <h2 className="location-title">OUR LOCATIONS</h2>
        <p className="location-subtitle">
          Luxe Mobile IV brings premium IV therapy directly to you in these service areas
        </p>
        <div className="location-toggle">
          <button
            className={`toggle-btn ${activeState === 'Texas' ? 'active' : ''}`}
            onClick={() => setActiveState('Texas')}
          >
            Texas
          </button>
          <button
            className={`toggle-btn ${activeState === 'Colorado' ? 'active' : ''}`}
            onClick={() => setActiveState('Colorado')}
          >
            Colorado
          </button>
        </div>
        <div className="location-map-wrapper">
          {activeState === 'Colorado' ? <StaticImage
            loading="eager"
            className="location-map-img"
            src="../../images/landing/Colorado.png"
            alt={`${activeState} service area map`}
          /> : <StaticImage
            loading="eager"
            className="location-map-img"
            src="../../images/landing/Texas.png"
            alt={`${activeState} service area map`}
          />}

        </div>

        <div className="location-button-grid">
          {locationItems.map(({ label, href }) => (
            <a key={label} href={href} className="location-button">
              <FaMapMarkerAlt className="location-button-icon" />
              {label}
            </a>
          ))}
        </div>
      </div>

    </section>
  )
};

export default Locations;
