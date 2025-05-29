import React, { useEffect, useState } from 'react';
import './treatmentsSpecific.css';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Treatments = ({ treatmentsData,pageContext }) => {
  // const [cityId, setCityId] = useState('1');
  const [urlParams, setUrlParams] = useState('');

  // const getCityId = () => {
  //   if (typeof window !== 'undefined') {
  //     // Check if the URL contains the word "maddisonville"
  //     const url = window.location.href.toLowerCase();
  //     if (url.includes('maddisonville')) {
  //       localStorage.setItem('cityID', '3');
  //       return '3';
  //     } else if (url.includes('rgv')) {
  //       localStorage.setItem('cityID', '4');
  //       return '4';
  //     } else if (url.includes('austin')) {
  //       localStorage.setItem('cityID', '2');
  //       return '2';
  //     } else {
  //       // Check if cityID exists in local storage, otherwise set it to '1'
  //       const storedCityID = localStorage.getItem('cityID');
  //       if (storedCityID) {
  //         return storedCityID;
  //       } else {
  //         localStorage.setItem('cityID', '1');
  //         return '1';
  //       }
  //     }
  //   }
  //   // Return '1' as the default value when window is not defined
  //   return '1';
  // };

  useEffect(() => {
    // const fetchedCityId = getCityId();
    // setCityId(fetchedCityId);
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

  if (treatmentsData.length > 0) {
    return (
      <div className="treatmentsSpecific" id="treatments">
        <h2 className="whiteTitle">SELECT TREATMENT</h2>
        {/* <p style={{ color: 'white' }}>Learn about how Luxe offers cutting medicine to get you feeling better, faster.</p> */}
        <div className="treatmentSpecific-cards-wrapper">
          <div className="treatmentSpecific-cards">
            {treatmentsData &&
              treatmentsData.map((treatment, index) => (
                <>
                  <div className="treatmentSpecific-card" key={index}>
                    <div className="treatmentSpecific-card-text-container">
                      <h3>{treatment.title}</h3>
                      <p>{treatment.description}</p>
                      <div className="buttons">
                        <a href={getUrlWithParams(treatment.link)} style={{ textDecoration: 'none' }}>
                          <button className="book-now">Book Now</button>
                        </a>
                      </div>
                    </div>
                    <div className="treatmentSpecific-img-container">
                      {treatment.imageFluid && (
                        <GatsbyImage
                          image={treatment.imageFluid.gatsbyImageData}
                          alt={treatment.title}
                          className="treatmentSpecific-img"
                        />
                      )}
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Treatments;
