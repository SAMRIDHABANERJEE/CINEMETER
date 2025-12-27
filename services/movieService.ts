
import { Movie } from '../types';

/**
 * Simulates fetching movie data from an API.
 * @returns A promise that resolves with an array of Movie objects.
 */
export const fetchMovies = async (): Promise<Movie[]> => {
  // Simulate network delay
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        // Use fetch to load the JSON file, assuming it's accessible at the root /data/movies.json
        const response = await fetch('/data/movies.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const moviesData = await response.json();
        resolve(moviesData as Movie[]);
      } catch (error) {
        console.error("Error fetching movies.json:", error);
        reject(new Error("Failed to load movie data."));
      }
    }, 500);
  });
};
