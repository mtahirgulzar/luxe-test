import React, { useState } from 'react'
import { faqData } from './data';
import './faq.css'
import Expand from 'react-expand-animated';
import { ArrowDownIcon } from '../../../icons/ArrowDownIcon';
import { ArrowUpIcon } from '../../../icons/ArrowUpIcon';
const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className="faq-wrapper">
    <div className="faq-container">
      <h2 className="faq-heading">FAQ</h2>
      <div className="faq-section">
        {faqData.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div className={`faq-item ${isActive ? 'active' : ''}`} key={index}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <p>{item.question}</p>
                <span className="faq-toggle">{isActive ? <ArrowUpIcon /> :<ArrowDownIcon />}</span>
              </div>

              <Expand
                open={isActive}
                duration={300}
                transitions={['height', 'opacity']}
              >
                <div className="faq-answer">{item.answer}</div>
              </Expand>
            </div>
          );
        })}
      </div>
    </div>
  </section>
  )
}

export default Faq
