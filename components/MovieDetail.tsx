
import React from 'react';
import { useMovies } from '../hooks/useMovies';
import RatingStars from './RatingStars';
import Button from './Button';
import ReviewList from './ReviewList';

// Icon from Lucide React.
// For demonstration, manually include SVG or assume lucide-react is configured.
// In a real project, you would `npm install lucide-react` and import { ArrowLeft } from 'lucide-react';
const ArrowLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);


const MovieDetail: React.FC = () => {
  const { selectedMovie, selectMovie, loading, error } = useMovies();

  if (loading) {
    return <div className="text-center text-xl text-gray-400 p-8">Loading movie details...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500 p-8">Error: {error}</div>;
  }

  if (!selectedMovie) {
    return (
      <div className="text-center text-xl text-gray-400 p-8">
        No movie selected.
        <Button onClick={() => selectMovie(null)} className="ml-4" variant="secondary">Go to Home</Button>
      </div>
    );
  }

  const handleBackClick = () => {
    selectMovie(null); // Deselect movie to go back to the grid
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button onClick={handleBackClick} variant="outline" className="mb-8 flex items-center">
        <ArrowLeftIcon className="w-5 h-5 mr-2" /> Back to Movies
      </Button>

      <div className="bg-gray-800 rounded-lg shadow-xl p-6 md:flex md:space-x-8">
        <div className="md:w-1/3 flex-shrink-0 mb-6 md:mb-0">
          <img
            src={selectedMovie.poster}
            alt={selectedMovie.title}
            className="w-full h-auto rounded-lg object-cover shadow-lg max-h-[500px] mx-auto"
          />
        </div>
        <div className="md:w-2/3">
          <h2 className="text-4xl font-extrabold text-white mb-3 leading-tight">{selectedMovie.title}</h2>
          <p className="text-purple-400 text-lg mb-4">
            Release Date: {new Date(selectedMovie.releaseDate).getFullYear()}
          </p>

          <div className="flex items-center mb-6">
            <RatingStars rating={selectedMovie.averageRating} className="mr-3" starClassName="w-6 h-6" />
            <span className="text-2xl font-bold text-gray-100">
              {selectedMovie.averageRating.toFixed(1)} / 5
            </span>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            {selectedMovie.description}
          </p>

          <ReviewList reviews={selectedMovie.reviews} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
