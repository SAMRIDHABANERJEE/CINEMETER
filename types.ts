
export interface Review {
  id: string;
  user: string;
  rating: number; // 1-5 stars
  comment: string;
}

export interface Movie {
  id: string;
  title: string;
  poster: string; // URL to the movie poster
  releaseDate: string; // YYYY-MM-DD
  averageRating: number;
  description: string;
  reviews: Review[];
}

export type SortOrder = 'asc' | 'desc';
export type SortBy = 'averageRating' | 'releaseDate';

export interface MovieContextType {
  movies: Movie[];
  filteredMovies: Movie[];
  selectedMovie: Movie | null;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  sortMovies: (sortBy: SortBy, order: SortOrder) => void;
  selectMovie: (movieId: string | null) => void;
  loading: boolean;
  error: string | null;
}
