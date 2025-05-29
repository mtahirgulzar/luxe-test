import React, { useEffect, useState } from 'react';
import './WeightlossTreatmentBanner.css';

const WeightLossOptions = () => {
  const [cityId, setCityId] = useState('1');

  const getCityId = () => {
    if (typeof window !== 'undefined') {
      const url = window.location.href.toLowerCase();
      if (url.includes('maddisonville')) return '3';
      if (url.includes('rgv')) return '4';
      if (url.includes('austin')) return '2';
      return localStorage.getItem('cityID') || '1';
    }
    return '1';
  };

  useEffect(() => {
    const fetchedCityId = getCityId();
    setCityId(fetchedCityId);
    if (typeof window !== 'undefined') {
      localStorage.setItem('cityID', fetchedCityId);
    }
  }, []);

  const getServiceUrl = (serviceId) => `/city/${serviceId}/${cityId}`;

  return (
    <div className="weight-loss-options" id="treatments">
      <h2 className="whiteTitle" style={{ marginTop: '0px', paddingTop: '15px' }}>
        OPTIONS
      </h2>
      <div className="cards">
        <div className="card">
          <h3>Semaglutide</h3>
          <p style={{ marginBottom: '0px', marginTop: '0px' }}>
            Semaglutide Injections<br />(generic for Ozempic and Wegovy)
          </p>
          <p style={{ marginTop: '0px' }}><strong>$74 Per Week*</strong></p>
          <div className="button-container">
            <a href={getServiceUrl('43cb25ba-ba1b-47a3-873d-d4655e43ea86')}>
              <button className="bookOnlineButtonWeightloss">Book Now</button>
            </a>
            <a href="tel:+18329797034">
              <button className="bookOnlineButtonWeightloss">Call Now</button>
            </a>
          </div>
        </div>
        <div className="card">
          <h3>Tirzepatide</h3>
          <p style={{ marginBottom: '0px', marginTop: '0px' }}>
            Tirzepatide Injections<br />(generic for Mounjaro)
          </p>
          <p style={{ marginTop: '0px' }}><strong>$112.50 Per Week*</strong></p>
          <div className="button-container">
            <a href={getServiceUrl('216c32a4-afb0-4747-8fa7-eafc5ac07de1')}>
              <button className="bookOnlineButtonWeightloss">Book Now</button>
            </a>
            <a href="tel:+18329797034">
              <button className="bookOnlineButtonWeightloss">CALL NOW</button>
            </a>
          </div>
        </div>
        <div className="card">
          <h3>Free Virtual Consult</h3>
          <p style={{ marginBottom: '0px', marginTop: '0px' }}>
            Have questions? Get answers.<br />Speak with a nurse - <strong> Free! </strong>
          </p>
          <p style={{ marginTop: '0px' }}></p>
          <div className="button-container">
            <a href={getServiceUrl('25fcfd47-fd50-459e-8468-920a0eacb9ff')}>
              <button className="bookOnlineButtonWeightloss">Book Now</button>
            </a>
            <a href="tel:+18329797034">
              <button className="bookOnlineButtonWeightloss">CALL NOW</button>
            </a>
          </div>
        </div>
      </div>
      <p style={{ padding: '0px 0px 20px', margin: '0px', lineHeight: 1 }}>
        * Semaglutide bought in 5 week increments. <br/>
        Tirzepatide bought in 4 to 6 week increments <br/>
        depending on the dosage.
      </p>
    </div>
  );
};

export default WeightLossOptions;