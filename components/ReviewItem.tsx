
import React from 'react';
import { Review } from '../types';
import RatingStars from './RatingStars';

interface ReviewItemProps {
  review: Review;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ review }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-4 last:mb-0">
      <div className="flex items-center mb-2">
        <RatingStars rating={review.rating} starClassName="w-4 h-4" />
        <span className="ml-2 text-sm text-gray-400">{review.rating} / 5</span>
      </div>
      <p className="text-gray-300 italic mb-2">"{review.comment}"</p>
      <p className="text-gray-500 text-sm">- {review.user}</p>
    </div>
  );
};

export default ReviewItem;
