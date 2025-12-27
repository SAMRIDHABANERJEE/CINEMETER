
import React from 'react';
import { useMovies } from '../hooks/useMovies';
import MovieCard from './MovieCard';

const MovieGrid: React.FC = () => {
  const { filteredMovies, loading, error, searchTerm } = useMovies();

  if (loading) {
    return <div className="text-center text-xl text-gray-400 p-8">Loading movies...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500 p-8">Error: {error}</div>;
  }

  if (filteredMovies.length === 0 && searchTerm) {
    return (
      <div className="text-center text-xl text-gray-400 p-8">
        No movies found matching "{searchTerm}".
      </div>
    );
  }

  if (filteredMovies.length === 0) {
    return (
      <div className="text-center text-xl text-gray-400 p-8">
        No movies available.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;
