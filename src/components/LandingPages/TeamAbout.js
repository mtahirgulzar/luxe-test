import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import './teamAbout.css';

const Team = ({ teamMembers }) => {
  return (
    <section className="team" id="team">
      <div className="container">
        <h2 className='greenTitle'>{teamMembers.section.title}</h2>
        <p className='subtitle'>{teamMembers.section.subtitle}</p>
        <div className="team-members">
          {teamMembers.members.map(({ image, title, name, description }, index) => (
            <div className="team-member-about" key={index}>
            {/* {console.log(teamMembers)}
            {console.log('image', image)}
            {console.log(getImage(image))} */}
            <div style={{ width: '100%', display: 'flex' }}><GatsbyImage image={getImage(image)} alt={name} className='team-img' style={{ textAlign: 'center' }}/></div>
              <h3 className='team-name'>{name}</h3>
              <h4 className='team-title'>{title}</h4>
              <p className='team-description'>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
