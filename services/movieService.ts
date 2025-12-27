
import { Movie } from '../types';
import { rawMoviesData } from '../data/moviesData'; // Import from the new TS file

/**
 * Simulates fetching movie data from an API.
 * @returns A promise that resolves with an array of Movie objects.
 */
export const fetchMovies = async (): Promise<Movie[]> => {
  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      // Resolve directly with the imported data
      resolve(rawMoviesData);
    }, 500);
  });
};
