import React, { useState, useEffect } from 'react';
import styles from './howItWorks.css';

const HowItWorks = (pagecontext) => {
  const [urlParams, setUrlParams] = useState('');

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const searchParams = new URLSearchParams(window.location.search);
  //     setUrlParams(searchParams.toString());
  //   }
  // }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = window.location.href;
      const paramIndex = url.indexOf('?');
      if (paramIndex !== -1) {
        const paramString = url.slice(paramIndex + 1);
        setUrlParams(paramString);
      }
    }
  }, []);

  const steps = [
    {
      icon: 'calendar.svg',
      title: 'Book Appointment',
      description: 'Appointments available within 1 hour from 7 am to 10 pm.',
      alt: 'calendar icon',
    },
    {
      icon: 'mask.svg',
      title: 'Nurse Comes To Your House',
      description: 'A highly trained registered nurse will come to you.',
      alt: 'mask icon',
    },
    {
      icon: 'smile.svg',
      title: 'Feel Better 30 Minutes Later',
      description:
        'The nurse will take vitals, medical history, consult with the doctor, and administer treatment.',
      alt: 'smile icon',
    },
    {
      icon: 'nadonline.svg',
      title: 'Refill Shots Online',
      description:
        'Shot refills renewed online, shipped to your house',
      alt: 'nad order online icon',
    },
  ];

  const getUrlWithParams = () => {
    // console.log(pagecontext);
    // console.log(pagecontext.pageContext);
    if (pagecontext && pagecontext.pageContext && pagecontext.pageContext.treatmentsPage) {
      return `/${pagecontext.pageContext.treatmentsPage}${urlParams ? `?${urlParams}` : ''}`;
    } else {
      return `#treatments${urlParams ? `?${urlParams}` : ''}`;
    }
  };

  return (
    <div className="container containerHow">
      <h3 className="greenTitle">HOW IT WORKS</h3>
      <p className="subtitle">
        Concierge IV and medical treatment when it works for you: early or late - at home or at work.
      </p>
      <div className="contentSection">
        <div className="imageSectionWorks">
          <img src={require('../../images/howItWorks.webp').default} alt="Nurse Opening Door" className="imageWorks" />
        </div>
        <div className="stepsSection">
          {steps.map((step, index) => (
            <div className="stepCard" key={index}>
              <div>
                <img className="icon" src={require(`../../images/${step.icon}`).default} alt={step.alt} />
              </div>
              <div className="stepText">
                <h3 className="stepTitle">{step.title}</h3>
                <p className="stepDescription">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <a href={getUrlWithParams()}>
        <button className="bookOnlineButton">BOOK ONLINE</button>
      </a>
      {/* {console.log(pagecontext)} */}
    </div>
  );
};

export default HowItWorks;
