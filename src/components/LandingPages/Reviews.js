import React, { useState } from 'react';
import './reviews.css';

const reviews = [
  {
    id: 1,
    text: 'My husband and I decided to try it together. Scheduling was a breeze, and Aisha was the nurse who came to do our drips. Right in the comfort of our living room, we lounged around with our puppies and our IV drips. Aisha was awesome, she even offered to add b12 and taurine. As a medical professional I understood the process but my husband had many questions and Aisha patiently answered all of them and walked him through it. It was fun and we felt amazing after!',
    author: 'Natalie G. (Google)',
  },
  {
    id: 2,
    text: 'I\'ve had multiple drips done by Luxe Mobile IV at really late hours when I\'ve haven\'t been feeling 100%. The IV drips always made me feel so much better afterwards. The nurses are very professional and courteous. I highly recommend!',
    author: 'Rocio S. (Yelp)',
  },
  {
    id: 2,
    text: 'This was my first concierge IV drip. I was tired sleeping all day, no desire to get out of bed and I needed a boost. I booked my first appointment online and within 2 hours they were at my home. Nat explained all my options and was very knowledgeable. It was such a great experience I signed up for the membership. I plan on recommending Luxe Mobile to everyone I know. I can\'t wait to book my next appointment.',
    author: 'Amber A. (Google)',
  },
  // ... more reviews
];

const ReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0); // Keep track of the current review index

  const handleNextReview = () => {
    setCurrentReview((prevCurrentReview) => (prevCurrentReview + 1) % reviews.length);
  };

  const handlePrevReview = () => {
    setCurrentReview((prevCurrentReview) =>
      (prevCurrentReview - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <div className="reviews-section">
      <div className="reviews-counter whiteTitle" style={{ marginTop: '0px', paddingTop: '15px' }}>11,000+ PATIENTS SERVED</div>
      <div className="reviews-title">5 Star Google Reviews</div>
      <div className="reviews-carousel">
        <div className="review-card">
          <div className="reviews-nav">
            <svg onClick={handlePrevReview} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 41" className="arrow-left">
              <path d="M20.3 40.8 0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z"></path>
            </svg>
            <div style={{ margin: 'auto' }}>
              <p className="review-author">{reviews[currentReview].author}</p>
              <hr className='review-hr'/>
              <p className="review-text">{reviews[currentReview].text}</p>
            </div>
            <svg onClick={handleNextReview} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 41" className="arrow-right">
              <path d="M0.7 0.2l20.3 20.3L0.7 40.8l-.7-.7L19.7 20.5 0 0.9z"></path>
            </svg>
          </div>
        </div>
      </div>
      {/* Add indicators here if needed */}
    </div>
  );
};

export default ReviewsSection;
