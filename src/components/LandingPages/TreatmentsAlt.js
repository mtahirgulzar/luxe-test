import React, { useEffect, useState } from 'react';
import './treatments.css';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Treatments = ({ pageContext }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "treatments" } }) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(width: 300, layout: CONSTRAINED)
          }
        }
      }
    }
  `);

  const treatmentsData = [

    {
      title: 'Sickness',
      description: 'For Cold, Flu, and Headaches: charge your immune system and get fast symptom relief.',
      imageName: 'sickness',
      link: '/sickness',
    },
    {
      title: 'Hangover Relief',
      description: 'From basic hydration to treatment of nausea, headaches, and other symptoms.',
      imageName: 'hangover',
      link: '/hangover',
    },
    {
      title: 'Advanced Medicine',
      description: 'NAD+, Myers Advanced Treatments, and other offerings.',
      imageName: 'advanced',
      link: '/advanced-medicine',
    },
    {
      title: 'Workplace Hydration',
      description: 'Keep your team working at maximum potential during extreme heat. Group discounts.',
      imageName: 'workplace',
      link: '/workplacehydration',
    },
    {
      title: 'Hydration Drips',
      description: 'Full hydration drip to help prevent and manage symptoms of dehydration.',
      imageName: 'hydration',
      link: '/hydration',
    },
  ];

  const getImageByName = (imageName) => {
    const image = data.allFile.nodes.find((node) => node.name === imageName);
    return image ? getImage(image) : null;
  };
  const [urlParams, setUrlParams] = useState('');

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

  const getUrlWithParams = (url) => {
    return `${url}${urlParams ? `?${urlParams}` : ''}`;
  };
  // const getUrlWithParams = (url) => {
  //   if (typeof window !== 'undefined') {
  //     const currentUrl = new URL(window.location.href);
  //     currentUrl.pathname = url;
  //     return decodeURIComponent(currentUrl.toString());
  //   };
  //   return url;
  // };
  return (
    <div className="treatments" id="treatments">
      <h2 className="greenTitle">{pageContext.treatHead || "TREATMENTS"}</h2>
      <p>Learn about how Luxe offers cutting medicine to get you feeling better, faster.</p>
      <div className="treatment-cards-wrapper">
        <div className="treatment-cards">
          {treatmentsData.map((treatment, index) => (
            <div className="treatment-card" key={index}>
              {getImageByName(treatment.imageName) && (
                <div className="treatment-img-container">
                  <GatsbyImage
                    image={getImageByName(treatment.imageName)}
                    alt={treatment.title}
                    className="treatment-img"
                  />
                </div>
              )}
              <div className="treatment-card-text-container">
                <h3>{treatment.title}</h3>
                <p>{treatment.description}</p>
                <div className="buttons">
                  <a href={getUrlWithParams(treatment.link)} style={{ textDecoration: 'none' }}>
                    <button className="book-now">learn about  {treatment.title}</button>
                  </a>
                  <a href={getUrlWithParams(`${treatment.link}#treatments`)} style={{ textDecoration: 'none' }}>
                    <button className="book-now">Book Now</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Treatments;
