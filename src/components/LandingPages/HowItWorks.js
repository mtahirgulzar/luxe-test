import { StaticImage } from 'gatsby-plugin-image';
import React, { useState, useEffect } from 'react';
// Remove unused styles import
// import styles from './howItWorks.css';

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
      description: 'A highly trained registered nurse will come to you. The doctor will consult virtually if needed.',
      alt: 'mask icon',
    },
    {
      icon: 'smile.svg',
      title: 'Feel Better 30 Minutes Later',
      description:
        'The nurse will take vitals, understand your medical history, consult with the doctor, and administer treatment. Most services are done within 30 minutes.',
      alt: 'smile icon',
    },
  ];

  const getUrlWithParams = () => {
    // Check if pagecontext is properly passed and has the expected structure
    if (pagecontext && pagecontext.pageContext && pagecontext.pageContext.treatmentsPage) {
      return `/${pagecontext.pageContext.treatmentsPage}${urlParams ? `?${urlParams}` : ''}`;
    } else if (pagecontext && pagecontext.treatmentsPage) {
      // Alternative check for direct treatmentsPage property
      return `/${pagecontext.treatmentsPage}${urlParams ? `?${urlParams}` : ''}`;
    } else {
      // return `#treatments${urlParams ? `?${urlParams}` : ''}`;
      return '#treatments';
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
          <StaticImage
            src="../../images/howItWorks.webp" 
            alt="Nurse Opening Door" 
            className="imageWorks"
            objectFit="cover"
            layout="fullWidth"
            placeholder="blurred"
            formats={["auto", "webp", "avif"]}
          />
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
      <a href={getUrlWithParams()}
        onClick={(e) => {
          // console.log('pagecontext', pagecontext)
          if (!pagecontext.pageContext.treatmentsPage) {
            e.preventDefault();
            const targetElement = document.getElementById('treatments');
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }}>
        <button className="bookOnlineButton">BOOK ONLINE</button>
      </a>
      {/* {console.log(pagecontext)} */}
    </div>
  );
};

export default HowItWorks;
