
import { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import { MovieContextType } from '../types';

/**
 * Custom hook to access the MovieContext.
 * Throws an error if used outside of a MovieProvider.
 * @returns The MovieContextType object.
 */
export const useMovies = (): MovieContextType => {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error('useMovies must be used within a MovieProvider');
  }
  return context;
};
