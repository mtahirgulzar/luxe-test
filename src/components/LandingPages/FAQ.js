import React, { useState } from 'react';
import './FAQ.css';

const FAQ = ({ fData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = fData || [
    {
      question: 'Are Wegovy and Ozempic the same as Semaglutide?',
      answer:
        'Yes, both Wegovy and Ozempic are brand names for the drug semaglutide. They are used to manage different conditions, with Wegovy being used for weight management and Ozempic primarily for managing type 2 diabetes.',
    },
    {
      question: 'What are the common side effects of Semaglutide?',
      answer: 'The common side effects of Semaglutide can include GI issues (nausea, constipation, and others). Most of these occur during the first week of treatment. If a stronger dose is needed, side effects can occur during the first week the higher dosage. These can helped by different eating habits and possible other medications. Like nearly all medications, serious side effects could occur including Thyroid tumors and Thyroid cancers. These are still being studied. Speak with our medical staff about your specific medical situation. ',
    },
    {
      question: "Do you accept insurance? What about HSA's?",
      answer: 'You can pay with your Health Savings Account (HSA)! At this time, we are not accepting insurance. Our prices are kept competitive with insured rates with this in mind.',
    },
    {
      question: 'Can anyone take GLP-1 medication?',
      answer: 'GLP-1 medication is typically prescribed to adults with a body mass index (BMI) of 30 or higher, or a BMI of 27 or higher when accompanied by at least one weight-related medical condition such as high blood pressure, type 2 diabetes, or high cholesterol. However, it\'s not suitable for everyone, especially those with certain medical conditions. Our medical professionals will help answer any questions during your evaluation.',
    },
    {
      question:
        "I've heard about a current shortage of GLP-1 medication. Can I rely on your company to consistently provide this medication?",
      answer: 'Absolutely. We maintain a direct relationship with our manufacturer to ensure that we can provide a stable supply of GLP-1 to you at all times. For the most recent updates, feel free to contact our team.',
    },
    {
      question: 'What type of GLP-1 do you provide and where is it sourced from?',
      answer: 'We supply actual Semaglutide and Tirzepatide, not a salt, sourced directly from an FDA licensed, state-approved, and inspected facility. This guarantees the highest standard of quality for our customers.',
    },
    {
      question: 'Can I use my FSA or HSA to pay for my GLP-1 prescription?',
      answer: 'Absolutely! We gladly accept both FSA and HSA for your GLP-1 purchases, offering you more flexibility in payment options.',
    },
    {
      question: 'Is Monjauro the same as Tirzepatide?',
      answer: 'Yes, Mounjaro is the brand name for the drug tirzepatide.',
    },
    {
      question: 'What are the common side effects of tirzepatide?',
      answer: 'The common side effects of tirzepatide can include GI issues (nausea, constipation, and others). Most issues occur during the first week of treatment. If a stronger dose is needed, side effects can also occur during the first week the higher dosage. These can helped with adjustments to eating habits and other medications. Like nearly all medications, serious side effects could occur including thyroid tumors and thyroid cancers. These are still being studied. Speak with our medical staff about your specific medical situation. ',
    },
  ];

  return (
    <div className="faq">
      <h2 className='greenTitle' style={{ textAlign: 'center' }}>FAQ'S</h2>
      {faqData.map((faq, index) => (
        <div
          key={index}
          className={`accordion ${activeIndex === index ? 'active' : ''}`}
          onClick={() => toggleAccordion(index)}
        >
          <div className="accordion-header">
            <h3>{faq.question}</h3>
            <span className={`arrow ${activeIndex === index ? 'up' : 'down'}`} style={{ fontWeight: '100', fontSize: '12px' }}>V</span>
          </div>
          {activeIndex === index && (
            <div className="accordion-content">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
      <div className="contact">
        <p>Have another question?</p>
        <span style={{ fontWeight: '300' }}>Call to speak with medical staff</span>
        <br />

        <a href="tel:+18329797034"><button className='bookOnlineButton'>Call Now</button></a>
      </div>
    </div>
  );
};

export default FAQ;
