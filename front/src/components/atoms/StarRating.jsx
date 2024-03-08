import { USER } from '@/services/apiServices/user.service';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export const StarRating = ({ userId, userRating }) => {
  const [rating, setRating] = useState(userRating);
  const [hover, setHover] = useState(null);

  const handleRating = (ratingValue) => {
    setRating(ratingValue);
    USER.updateRating(userId, { rating: ratingValue });
  };

  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              className="hidden"
              value={ratingValue}
              onClick={() => handleRating(ratingValue)}
            />
            <FaStar
              className="cursor-pointer transition duration-200"
              color={ratingValue <= (hover || rating) ? '#20ACAF' : '#a9a9a9'}
              size={24}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

StarRating.propTypes = {
  userId: PropTypes.number,
  userRating: PropTypes.number,
};
