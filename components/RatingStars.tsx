
import React from 'react';

// Star icon from Lucide React.
// For demonstration, manually include SVG or assume lucide-react is configured.
// In a real project, you would `npm install lucide-react` and import { Star } from 'lucide-react';
const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);


interface RatingStarsProps {
  rating: number; // typically 0-5
  maxStars?: number;
  className?: string;
  starClassName?: string;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating, maxStars = 5, className = '', starClassName = '' }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.25 && rating % 1 <= 0.75; // Consider a half star for values like 4.5
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={`flex items-center ${className}`}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <StarIcon key={`full-${i}`} fill="currentColor" className={`w-5 h-5 text-yellow-400 ${starClassName}`} />
      ))}
      {hasHalfStar && (
        <div className="relative w-5 h-5 overflow-hidden">
          <StarIcon fill="currentColor" className={`absolute inset-0 w-5 h-5 text-yellow-400 ${starClassName}`} style={{ clipPath: 'inset(0 50% 0 0)' }} />
          <StarIcon className={`absolute inset-0 w-5 h-5 text-gray-500 ${starClassName}`} />
        </div>
      )}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <StarIcon key={`empty-${i}`} className={`w-5 h-5 text-gray-500 ${starClassName}`} />
      ))}
    </div>
  );
};

export default RatingStars;
