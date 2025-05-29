import React, { useState, useEffect } from 'react';

const SocialProofBanner = () => {
  const [showFifthIcon, setShowFifthIcon] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const container = document.querySelector('.star-rating > div');
      if (container) {
        const icons = container.querySelectorAll('.networkIcon');
        const containerWidth = container.offsetWidth;
        const iconWidth = icons[0].offsetWidth;
        const availableSpace = containerWidth - (4 * iconWidth);
        
        setShowFifthIcon(availableSpace >= iconWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="social-proof-banner">
      <p style={{ fontWeight: '300' }}>WEIGHT LOSS INJECTIONS FEATURED IN 3,000 ARTICLES <br/>Find out why they are wildly popular.</p>
      <div className="star-rating" style={{ display: 'block' }}>
        <div className="" style={{ display: 'block' }}>
          <img src={require('../../images/insider.webp').default} className='networkIcon' alt="Gold star" style={{ width: '85px', height: '85px' }}/>
          <img src={require('../../images/forbes.webp').default} className='networkIcon' alt="Gold star" style={{ width: '85px', height: '85px' }}/>
          <img src={require('../../images/fox.webp').default} className='networkIcon' alt="Gold star" style={{ width: '85px', height: '85px' }}/>
          <img src={require('../../images/nyt.webp').default} className='networkIcon' alt="Gold star" style={{ width: '85px', height: '85px' }}/>
          {showFifthIcon && (
            <img src={require('../../images/rollingstones.webp').default} className='networkIcon' alt="Gold star" style={{ width: '85px', height: '85px' }}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default SocialProofBanner;