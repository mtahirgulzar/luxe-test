import React, { useState, useEffect } from 'react';
import '../components/LandingPages/allServices.css';
import Footer from '../components/General/footer.js';
import NavBar from '../components/General/navbar.js';
import servicesData from '../data/services.json';
import { getCityID } from '../components/LandingPages/cityUtils';

const AllServices = () => {
  const [cityID, setCityID] = useState(null);
  const [services, setServices] = useState([]);
  const [expandedService, setExpandedService] = useState(null);
  const [urlParams, setUrlParams] = useState('');

  useEffect(() => {
    // Check if cityID exists in local storage
    if (typeof window !== 'undefined') {
      const newCityID = getCityID();
      setCityID(newCityID);

      const searchParams = new URLSearchParams(window.location.search);
      setUrlParams(searchParams.toString());
    }
    setServices(servicesData);
  }, []);

  const toggleDescription = (serviceId) => {
    setExpandedService((prevServiceId) => (prevServiceId === serviceId ? null : serviceId));
  };

  const getUrlWithParams = (serviceUuid) => {
    return `/city/${serviceUuid}/${cityID || ''}${urlParams ? `?${urlParams}` : ''}`;
  };

  return (
    <>
      <NavBar/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="services-section" id="allservices">
        <h2 className="greenTitle" style={{ textAlign: 'center' }}>
          OUR SERVICES
        </h2>
        <div className="services-table">
          {services.filter((item) => !item.hide).map((service, index) => (
            <div className="service-row" key={index}>
              <div className="service-column service-image">
                {/* {console.log('service', service)} */}
                <img src={require(`../images/treatments/${service.websiteInfo?.image}`).default} alt={service.name} />
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
                <span>{service.duration} Minutes</span>
                <span>${service.price}</span>
              </div>
              <div className="service-column book-now">
                <a href={getUrlWithParams(service.uuid)}>
                  <button className="service-info-button">Book Now</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default AllServices;
