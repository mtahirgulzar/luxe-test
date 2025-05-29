import React, { useState } from 'react';
import './reviews.css';

const testimonials = [
  {
    id: 1,
    name: 'Deandre Hopkins',
    title: 'Tennessee Titan\'s Wide Receiver',
    image: 'deandre.webp',
  },
  {
    id: 2,
    name: 'Darvin Kidsey',
    title: 'Wide Receiver for Washington Redskins',
    image: 'darvin.webp',
  },

  // Add more testimonials as needed
];

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prevTestimonial) => (prevTestimonial + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prevTestimonial) => (prevTestimonial - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="reviews-section" style={{ backgroundColor: 'white' }}>
      <div className="reviews-counter greenTitle" style={{ marginTop: '0px', paddingTop: '15px' }}>TRUSTED BY THE PROS</div>
      <div className="testimonials-title subtitle" style={{ color: 'black' }}>Luxe Mobile IV is trusted by the biggest names visiting Texas. Clients include 13 artists on the Billboard top 100, every NFL team, and innumerable celebrities.</div>
      <div className="reviews-carousel">
        <div className="review-card">
          <div className="reviews-nav">
            <svg onClick={handlePrevTestimonial} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 41" className="arrow-left">
              <path d="M20.3 40.8 0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z"></path>
            </svg>
            <div style={{ margin: 'auto' }}>
              <img src={require(`../../images/${testimonials[currentTestimonial].image}`).default} alt={testimonials[currentTestimonial].name} className="testimonial-image" />
              <p className="testimonial-author" style={{ color: '#0f9E82' }}>{testimonials[currentTestimonial].name}</p>
              <p className="testimonial-text" style={{ color: 'black' }}>{testimonials[currentTestimonial].title}</p>
            </div>
            <svg onClick={handleNextTestimonial} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 41" className="arrow-right">
              <path d="M0.7 0.2l20.3 20.3L0.7 40.8l-.7-.7L19.7 20.5 0 0.9z"></path>
            </svg>
          </div>
        </div>
      </div>
      {/* Add indicators here if needed */}
    </div>
  );
};

export default TestimonialsSection;
