import { StaticImage } from 'gatsby-plugin-image';
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
      <p style={{ fontWeight: '300' }}>WEIGHT LOSS INJECTIONS FEATURED IN 3,000 ARTICLES <br />Find out why they are wildly popular.</p>
      <div className="star-rating" style={{ display: 'block' }}>
        <div className="" style={{ display: 'block' }}>
          <StaticImage src="../../images/insider.webp" className='networkIcon' alt="Gold star" width={85} height={85} />
          <StaticImage src="../../images/forbes.webp" className='networkIcon' alt="Gold star" width={85} height={85} />
          <StaticImage src="../../images/fox.webp" className='networkIcon' alt="Gold star" width={85} height={85} />
          <StaticImage src="../../images/nyt.webp" className='networkIcon' alt="Gold star" width={85} height={85} />
          {showFifthIcon && (
            <StaticImage src="../../images/rollingstones.webp" className='networkIcon' alt="Gold star" width={85} height={85} />

          )}
        </div>
      </div>
    </div>
  );
};

export default SocialProofBanner;