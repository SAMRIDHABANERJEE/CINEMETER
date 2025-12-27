
import React from 'react';
import { Movie } from '../types';
import RatingStars from './RatingStars';
import Button from './Button';
import { useMovies } from '../hooks/useMovies';

interface HeroSectionProps {
  featuredMovie: Movie;
}

const HeroSection: React.FC<HeroSectionProps> = ({ featuredMovie }) => {
  const { selectMovie } = useMovies();

  const handleViewDetails = () => {
    selectMovie(featuredMovie.id);
  };

  return (
    <section
      className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] bg-cover bg-center bg-no-repeat flex items-end p-4 md:p-8"
      style={{ backgroundImage: `linear-gradient(to top, rgba(17, 24, 39, 0.9) 0%, transparent 100%), url(${featuredMovie.poster})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
      <div className="relative z-10 max-w-lg text-white">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2">
          {featuredMovie.title}
        </h2>
        <div className="flex items-center mb-4">
          <RatingStars rating={featuredMovie.averageRating} className="mr-2" />
          <span className="text-lg font-semibold">{featuredMovie.averageRating.toFixed(1)} / 5</span>
        </div>
        <p className="text-base md:text-lg mb-6 line-clamp-3">
          {featuredMovie.description}
        </p>
        <Button onClick={handleViewDetails} variant="primary" size="lg" className="mr-4">
          View Details
        </Button>
        {/* <Button variant="outline" size="lg">
          Add to Watchlist
        </Button> */}
      </div>
    </section>
  );
};

export default HeroSection;
