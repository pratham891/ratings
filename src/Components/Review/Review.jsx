import React from 'react';
import './Review.css';
import User from './User';

const Review = () => {
  return (
    <div className='Review_Section'>
      <h1>What Our Happy Users Say</h1>
      <div className='Review_Section_1'>
       

        <User
           img='path/to/sarah-joe.jpg'
           star={4.5}
           name='Sarah Joe'
           bio='Medical Student'
           about='Sarah has been using our service for years and love it!'
        />
        <User
          img='path/to/dr-david-lee.jpg'
          star={4.5}
          name='Dr. David Lee'
          bio='Dean of Academics State University'
          about='Dr. Lee appreciates the efficiency and reliability of our platform.'
        />
        <User
          img='path/to/maria-gracia.jpg'
          star={4.5}
          name='Maria Gracia'
          bio='Head of Global Tech Company'
          about='Maria finds our solution invaluable for her business operations.'
        />
      </div>
      <div className='Review_Section_3'>
        {/* Additional content if needed */}
      </div>
    </div>
  );
};

export default Review;
