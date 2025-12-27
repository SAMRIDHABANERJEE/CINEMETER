
import React from 'react';
import { Review } from '../types';
import ReviewItem from './ReviewItem';

interface ReviewListProps {
  reviews: Review[];
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  if (reviews.length === 0) {
    return <p className="text-gray-400">No reviews yet. Be the first to review!</p>;
  }

  return (
    <div className="mt-6">
      <h3 className="text-2xl font-bold text-white mb-4">User Reviews</h3>
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;
