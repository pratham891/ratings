import React from 'react';
import './User.css';
import StarRating from './StarRating';

const User = ({ img, star, name, bio, about }) => {
  return (
    <div className='User'>
      <img src={img} alt={name} />
      <StarRating rating={star} />
      <h3>{name}</h3>
      <p className='bio'>{bio}</p>
      <p>{about}</p>
    </div>
  );
};

export default User;
