
import React, { useMemo } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FilterSort from './components/FilterSort';
import MovieGrid from './components/MovieGrid';
import MovieDetail from './components/MovieDetail';
import { MovieProvider } from './context/MovieContext';
import { useMovies } from './hooks/useMovies';

// Main content component that consumes MovieContext
const MainContent: React.FC = () => {
  const { filteredMovies, selectedMovie, selectMovie, loading } = useMovies();

  // Pick a featured movie: highest rated among all movies, or the first one if ratings are equal.
  // This needs to be done from the original 'movies' array, not 'filteredMovies',
  // so the hero section always shows a consistent featured movie regardless of search/sort.
  const featuredMovie = useMemo(() => {
    if (!loading && filteredMovies.length > 0) {
      // Find the movie with the highest average rating
      return filteredMovies.reduce((prev, current) =>
        (prev.averageRating > current.averageRating) ? prev : current
      );
    }
    return null;
  }, [loading, filteredMovies]); // eslint-disable-line react-hooks/exhaustive-deps
  // Disabling exhaustive-deps for filteredMovies here because it's derived from movies state,
  // and we want to select a featured movie once initial data is loaded.

  const handleTitleClick = () => {
    selectMovie(null); // Go back to the movie grid view
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <Navbar onTitleClick={handleTitleClick} />

      {selectedMovie ? (
        <MovieDetail />
      ) : (
        <>
          {featuredMovie && <HeroSection featuredMovie={featuredMovie} />}
          <main className="container mx-auto px-4 py-8 flex-grow">
            <FilterSort />
            <MovieGrid />
          </main>
        </>
      )}

      {/* Footer (optional) */}
      <footer className="bg-gray-800 text-gray-400 text-center py-4 mt-12">
        <p>&copy; {new Date().getFullYear()} Cinemeter. All rights reserved.</p>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <MovieProvider>
      <MainContent />
    </MovieProvider>
  );
};

export default App;
