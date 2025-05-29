import React, { useEffect, useState } from 'react';
import './treatmentsSpecific.css';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import IngredientsModal from './IngredientsModal';
import AddonsModal from './AddonsModal';

const Treatments = ({ treatmentsData, pageContext }) => {
  // const [cityId, setCityId] = useState('1');
  const [urlParams, setUrlParams] = useState('');
  const [selectedDrip, setSelectedDrip] = useState(null);
  const [isIngredientModalOpen, setIsIngredientModalOpen] = useState(false);
  const [isAddonModalOpen, setIsAddonModalOpen] = useState(false);

  const openIngredientModal = (dripUUID) => {
    setSelectedDrip(dripUUID);
    setIsIngredientModalOpen(true);
  };

  const closeIngredientModal = () => {
    setIsIngredientModalOpen(false);
  };

  const openAddonModal = (dripUUID) => {
    setSelectedDrip(dripUUID);
    setIsAddonModalOpen(true);
  };

  const closeAddonModal = () => {
    setIsAddonModalOpen(false);
  };

  // const getCityId = () => {
  //   if (typeof window !== 'undefined') {
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
  //       const storedCityID = localStorage.getItem('cityID');
  //       if (storedCityID) {
  //         return storedCityID;
  //       } else {
  //         localStorage.setItem('cityID', '1');
  //         return '1';
  //       }
  //     }
  //   }
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

  if (treatmentsData.length > 0) {
    return (
      <div className="treatmentsSpecific" id="treatments">
        <h2 className="whiteTitle">{pageContext.treatHead || "TREATMENTS"} </h2>
        <p style={{ color: 'white' }}>Learn about how Luxe offers cutting medicine to get you feeling better, faster.</p>
        <div className="treatmentSpecific-cards-wrapper">
          <div className="treatmentSpecific-cards">
            {treatmentsData &&
              treatmentsData.map((treatment, index) => (
                <div className="treatmentSpecific-card" key={index}>
                  <div className="treatmentSpecific-card-text-container">
                    <h3>{treatment.title}</h3>
                    <p>{treatment.description}</p>
                    <p style={{ fontSize: '1.2rem', fontWeight: '400' }}>
                      <a
                        onClick={() => openIngredientModal(treatment.link.split('/').pop())}
                        className="ingredientsLink"
                        style={{ fontSize: '1.1rem' }}
                      >
                        Ingredients
                      </a>
                      {' - '}
                      <a
                        onClick={() => openAddonModal(treatment.link.split('/').pop())}
                        className="ingredientsLink"
                        style={{ fontSize: '1.1rem' }}
                      >
                        Add-ons
                      </a>
                      <strong style={{ fontWeight: '500', display: 'block', margin: 'auto' }} className='treatmentPrice'>{treatment.price}</strong>

                    </p>
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
              ))}
          </div>
        </div>
        <IngredientsModal isOpen={isIngredientModalOpen} onClose={closeIngredientModal} dripUUID={selectedDrip} />
        <AddonsModal isOpen={isAddonModalOpen} onClose={closeAddonModal} dripUUID={selectedDrip} />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Treatments;
