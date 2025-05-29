import React, { useState, useEffect } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import './team.css';

const Team = ({ teamMembers, pageContext }) => {
  const { cityName, cityDemonym } = pageContext;

  // Function to dynamically replace city references in the description
  const replaceCityReferences = (description) => {
    if (!description) return '';
    // console.log(pageContext)
    if (!cityName) return description;
    if (description.includes('area emergency rooms')) return description;
    return description
      .replace(/Houston's/gi, cityName) // Replace possessive city name
      .replace(/Houstonians/gi, cityDemonym) // Replace demonym
      .replace(/Houston/gi, cityName.replace("'S", '')); // Replace non-possessive city name
  };

  return (
    <section className="team" id="team">
      <div className="container">
        <h2 className='greenTitle'>{teamMembers.section.title}</h2>
        <p className='subtitle'>{teamMembers.section.subtitle}</p>
        <div className="team-members">
          {teamMembers.members.map(({ image, title, name, description }, index) => (
            <div className="team-member" key={index}>
            {/* {console.log(teamMembers)}
            {console.log('image', image)}
            {console.log(getImage(image))} */}
            <div style={{ width: '100%', display: 'flex' }}><GatsbyImage image={getImage(image)} alt={name} className='team-img' style={{ textAlign: 'center' }}/></div>
              <h3 className='team-name'>{name}</h3>
              <h4 className='team-title'>{title}</h4>
              <p className="team-description">{replaceCityReferences(description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
