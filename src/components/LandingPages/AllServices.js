import React, { useState, useEffect, useRef } from 'react';
import './allServices.css';
import { getCityID } from './cityUtils';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const AllServices = ({ services }) => {
  const allServicesRef = useRef(null);
  const [cityID, setCityID] = useState(null);
  const [expandedService, setExpandedService] = useState(null);
  const [urlParams, setUrlParams] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Query for treatment images
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "treatments" } }) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(
              width: 300
              quality: 90
              formats: [AUTO, WEBP, AVIF]
              placeholder: BLURRED
              layout: CONSTRAINED
            )
          }
        }
      }
    }
  `);

  // Create a map of image paths to their data
  const imageMap = data.allFile.nodes.reduce((acc, node) => {
    acc[node.relativePath.replace('treatments/', '')] = node;
    return acc;
  }, {});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const newCityID = getCityID();
      setCityID(newCityID);

      const searchParams = new URLSearchParams(window.location.search);
      setUrlParams(searchParams.toString());
    }
  }, []);

  const toggleDescription = (serviceId) => {
    setExpandedService((prevServiceId) => (prevServiceId === serviceId ? null : serviceId));
  };

  const getUrlWithParams = (serviceUuid) => {
    return `/city/${serviceUuid}/${cityID || ''}${urlParams ? `?${urlParams}` : ''}`;
  };

  return (
    <div className="services-section" id="allservices" ref={allServicesRef}>
      <h2 className="greenTitle" style={{ textAlign: 'center' }}>
        OUR SERVICES
      </h2>
      <div className="services-search" style={{ textAlign: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search services..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: '10px', width: '80%', maxWidth: '400px' }}
        />
      </div>
      <div className="services-table">
        {services
          .filter((item) => !item.hide && item.name.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((service, index) => {
            const imageData = service.websiteInfo?.image ? imageMap[service.websiteInfo.image] : null;
            return (
              <div className="service-row" key={index}>
                <div className="service-column service-image">
                  {imageData?.childImageSharp?.gatsbyImageData ? (
                    <GatsbyImage
                      image={imageData.childImageSharp.gatsbyImageData}
                      alt={service.name}
                    />
                  ) : (
                    <div className="image-placeholder">No image available</div>
                  )}
                </div>
                <div className="service-column service-info">
                  <h3>{service.name}</h3>
                  <div className={`service-description ${expandedService === service.uuid ? 'expanded' : ''}`}>
                    <p>{service.websiteInfo?.description}</p>
                    {service.websiteInfo?.description?.split(' ').length > 20 && (
                      <button className="show-more" onClick={() => toggleDescription(service.uuid)}>
                        {expandedService === service.uuid ? 'Show Less' : 'Show More'}
                      </button>
                    )}
                  </div>
                </div>
                <div className="service-column service-details">
                  <span><strong>{service.duration} Minutes - ${service.price}</strong></span>
                </div>
                <div className="service-column book-now">
                  <a href={getUrlWithParams(service.uuid)}>
                    <button className="service-info-button">Book Now</button>
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AllServices;
