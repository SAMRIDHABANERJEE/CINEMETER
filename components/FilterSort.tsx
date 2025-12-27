
import React, { useState } from 'react';
import { useMovies } from '../hooks/useMovies';
import { SortBy, SortOrder } from '../types';

// Icon from Lucide React.
// For demonstration, manually include SVG or assume lucide-react is configured.
// In a real project, you would `npm install lucide-react` and import { ChevronDown } from 'lucide-react';
const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="m6 9 6 6 6-6" />
  </svg>
);


const FilterSort: React.FC = () => {
  const { sortMovies } = useMovies();
  const [currentSortBy, setCurrentSortBy] = useState<SortBy>('averageRating');
  const [currentSortOrder, setCurrentSortOrder] = useState<SortOrder>('desc');

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [sortBy, sortOrder] = e.target.value.split('-') as [SortBy, SortOrder];
    setCurrentSortBy(sortBy);
    setCurrentSortOrder(sortOrder);
    sortMovies(sortBy, sortOrder);
  };

  return (
    <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
      <h2 className="text-3xl font-bold text-white">All Movies</h2>
      <div className="relative">
        <select
          onChange={handleSortChange}
          value={`${currentSortBy}-${currentSortOrder}`}
          className="appearance-none bg-gray-700 text-gray-100 py-2 pl-4 pr-10 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
        >
          <option value="averageRating-desc">Rating (High to Low)</option>
          <option value="averageRating-asc">Rating (Low to High)</option>
          <option value="releaseDate-desc">Release Date (Newest)</option>
          <option value="releaseDate-asc">Release Date (Oldest)</option>
        </select>
        <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5" />
      </div>
    </div>
  );
};

export default FilterSort;
