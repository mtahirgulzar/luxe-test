import React, { useState } from 'react';
import './SideEffects.css';

const SideEffects = () => {
  const [expandedCards, setExpandedCards] = useState([]);

  const toggleCard = (index) => {
    if (expandedCards.includes(index)) {
      setExpandedCards(expandedCards.filter((i) => i !== index));
    } else {
      setExpandedCards([...expandedCards, index]);
    }
  };

  const cards = [
    {
      title: 'GI Issues:',
      content:
        'The most common is nausea, but may include diarrhea, belching, and constipation. Most of these occur in the first week. While most doctors let you deal with this on your own, we specialize in these medications. We help you understand how to minimize the side effects through small changes in behavior. If necessary we can prescribe additional medication.',
    },
    {
      title: 'Good side effects:',
      content:
        'GLP-1 medications, like Semaglutide and Tirzepatide, manage your blood glucose in addition to helping you lose weight. Well managed blood sugar and weight loss have a myriad of well documented, positive benefits. It\'s part of reason every doctor recommends weight loss for heavier people. They include a lower risk of cognitive decline and dementia, lower risk for heart attack, improved cardiovascular health, and many others.',
    },
    {
      title: 'Headache:',
      content:
        'Some patients report headaches. However, again, these are often alleviated with small changes in behavior (like drinking more water).',
    },
    {
      title: 'Serious side effects:',
      content:
        'It\'s important to note that GLP-1 drugs have shown to cause thyroid tumors and cancer in lab animals. Thyroid cancer has not been verified in humans, despite very large number of people taking the drug. The doctor will go through risks for your particular situation.',
    },
    {
      title: 'Avoid pregnancy:',
      content:
        'Do not take if you\'re planning to get pregnant. Eating significantly less is never a good idea during pregnancy (with or without medication).',
    },
  ];

  return (
    <div className="side-effects" id="side-effects">
      <h2 className='greenTitle' style={{ textAlign: 'center' }}>SIDE EFFECTS</h2>
      <p style={{ textAlign: 'center', fontWeight: '200' }}>Like any drugs, there are side effects. It's important to understand what you put in your body.</p>
      <div className="card-grid-side-effects">
        {cards.map((card, index) => (
          <div key={index} className="card-side-effects">
            <div className="card-header-side-effects">
              <span className="checkmark-side-effects">✔</span>
              <h3>{card.title}</h3>
            </div>
            <p className={`card-content-side-effects ${expandedCards.includes(index) ? 'expanded' : ''}`}>
              {card.content}
            </p>
            {card.content.length > 120 && (
              <button className="read-more-side-effects" onClick={() => toggleCard(index)}>
                {expandedCards.includes(index) ? 'Read less' : 'Read more'}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideEffects;
