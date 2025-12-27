
import React, { useState } from 'react';
import { useMovies } from '../hooks/useMovies';

// Icon from Lucide React.
// For demonstration, manually include SVG or assume lucide-react is configured.
// In a real project, you would `npm install lucide-react` and import { Search, Menu, X } from 'lucide-react';
const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);
const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);
const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

interface NavbarProps {
  onTitleClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onTitleClick }) => {
  const { searchTerm, setSearchTerm } = useMovies();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <nav className="bg-gray-800 p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1
          className="text-2xl md:text-3xl font-bold text-purple-500 cursor-pointer"
          onClick={onTitleClick}
        >
          Cinemeter
        </h1>

        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search movies..."
              className="pl-10 pr-4 py-2 rounded-full bg-gray-700 text-gray-100 placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-purple-500 w-64"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
          {/* Desktop Nav Links can go here */}
          {/* <a href="#" className="text-gray-300 hover:text-white">Home</a>
          <a href="#" className="text-gray-300 hover:text-white">Genres</a> */}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300 focus:outline-none">
            {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu content */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-gray-800 pb-2">
          <div className="relative mb-4 px-4">
            <input
              type="text"
              placeholder="Search movies..."
              className="pl-10 pr-4 py-2 rounded-full bg-gray-700 text-gray-100 placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <SearchIcon className="absolute left-7 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
          {/* Mobile Nav Links can go here */}
          {/* <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">Home</a>
          <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">Genres</a> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
