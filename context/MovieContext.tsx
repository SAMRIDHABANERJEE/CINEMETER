
import React, { createContext, useState, useEffect, useCallback, useMemo } from 'react';
import { Movie, MovieContextType, SortBy, SortOrder } from '../types';
import { fetchMovies } from '../services/movieService';

export const MovieContext = createContext<MovieContextType | undefined>(undefined);

interface MovieProviderProps {
  children: React.ReactNode;
}

export const MovieProvider: React.FC<MovieProviderProps> = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<SortBy>('averageRating');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [selectedMovieId, setSelectedMovieId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        const data = await fetchMovies();
        setMovies(data);
        setFilteredMovies(data); // Initialize filteredMovies with all movies
      } catch (err) {
        console.error("Failed to fetch movies:", err);
        setError("Failed to load movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Apply filtering and sorting whenever movies, searchTerm, sortBy, or sortOrder change
  useEffect(() => {
    let currentMovies = [...movies];

    // Filtering
    if (searchTerm) {
      currentMovies = currentMovies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sorting
    currentMovies.sort((a, b) => {
      let comparison = 0;
      if (sortBy === 'averageRating') {
        comparison = a.averageRating - b.averageRating;
      } else if (sortBy === 'releaseDate') {
        comparison = new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime();
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    setFilteredMovies(currentMovies);
  }, [movies, searchTerm, sortBy, sortOrder]);

  const sortMovies = useCallback((newSortBy: SortBy, newSortOrder: SortOrder) => {
    setSortBy(newSortBy);
    setSortOrder(newSortOrder);
  }, []);

  const selectMovie = useCallback((movieId: string | null) => {
    setSelectedMovieId(movieId);
  }, []);

  const selectedMovie = useMemo(() => {
    return movies.find(movie => movie.id === selectedMovieId) || null;
  }, [movies, selectedMovieId]);

  const contextValue = useMemo(() => ({
    movies,
    filteredMovies,
    selectedMovie,
    searchTerm,
    setSearchTerm,
    sortMovies,
    selectMovie,
    loading,
    error,
  }), [movies, filteredMovies, selectedMovie, searchTerm, setSearchTerm, sortMovies, selectMovie, loading, error]);

  return (
    <MovieContext.Provider value={contextValue}>
      {children}
    </MovieContext.Provider>
  );
};
