
import React from 'react';
import { Movie } from '../types';
import RatingStars from './RatingStars';
import { useMovies } from '../hooks/useMovies';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { selectMovie } = useMovies();

  const handleClick = () => {
    selectMovie(movie.id);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer
                 transform transition-transform duration-300 hover:scale-105
                 flex flex-col h-full"
    >
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-auto object-cover max-h-72 md:max-h-80 lg:max-h-96"
        loading="lazy"
      />
      <div className="p-4 flex flex-col justify-between flex-grow">
        <h3 className="text-xl font-bold mb-2 text-gray-50 truncate">{movie.title}</h3>
        <div className="flex items-center mt-auto">
          <RatingStars rating={movie.averageRating} className="mr-2" starClassName="w-4 h-4" />
          <span className="text-sm text-gray-400">{movie.averageRating.toFixed(1)} / 5</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
