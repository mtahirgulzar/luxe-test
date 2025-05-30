import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { getCityID, getCityName } from './cityUtils';

const SocialProofBanner = () => {
  const [cityID, setCityID] = useState(null);
  const [cityName, setCityName] = useState("TEXAS'S");

  useEffect(() => {
    const updateCityID = () => {
      const newCityID = getCityID();
      if (newCityID !== null) {
        setCityID(newCityID);
      //   localStorage.setItem('cityID', newCityID.toString());
      }
    };

    updateCityID();

    // Listen for URL changes and update cityID accordingly
    const handleUrlChange = () => {
      updateCityID();
      // Programmatically navigate to the current URL to trigger a rerender
      navigate(window.location.pathname + window.location.search);
    };

    window.addEventListener('popstate', handleUrlChange);

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  useEffect(() => {
    setCityName(getCityName(cityID));
  }, [cityID]);

  return (
    <div className="social-proof-banner">
      <p>{cityName} HIGHEST RATED DRIP IV SERVICE</p>
      <div className="star-rating" style={{ display: 'block' }}>
        <div className="stars" style={{ display: 'block' }}>
          <StaticImage src="../../images/gold-star.svg" alt="Gold star" width={30} height={30} />
          <StaticImage src="../../images/gold-star.svg" alt="Gold star" width={30} height={30} />
          <StaticImage src="../../images/gold-star.svg" alt="Gold star" width={30} height={30} />
          <StaticImage src="../../images/gold-star.svg" alt="Gold star" width={30} height={30} />
          <StaticImage src="../../images/gold-star.svg" alt="Gold star" width={30} height={30} />
        </div>
        <div className="google-logo" style={{ display: 'block' }}>
          <StaticImage src="../../images/google-logo.webp" alt="Google logo"  height={30}  />
        </div>
      </div>
    </div>
  );
};

export default SocialProofBanner;
