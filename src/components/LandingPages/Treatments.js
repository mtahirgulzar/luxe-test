import React, { useEffect, useState } from 'react';
import './treatments.css';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Treatments = ({ treatmentsData, pageContext }) => {
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

  // const treatmentsData = treatmentsJson.lpVariants[0].treatmentsData;
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
      <div className="treatment-cards-wrapper">
        <h2 className="whiteTitle">{pageContext.treatHead || "treatments"}</h2>
        <p>Learn about how Luxe offers cutting medicine to get you feeling better, faster.</p>
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
                    <button className="book-now">Learn More</button>
                  </a>
                  {(treatment.link !== '/city/27aec72e-36ac-4aad-b769-b70c46759d6a')
                    ? <a href={getUrlWithParams(`${treatment.link}#treatments`)} style={{ textDecoration: 'none' }}>
                      <button className="book-now">Book Now</button>
                    </a>
                    : <a href={getUrlWithParams(`${treatment.link}`)} style={{ textDecoration: 'none' }}>
                      <button className="book-now">Book Now</button>
                    </a>
                  }

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
