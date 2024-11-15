import React from 'react';


const SearchBar = ({ searchQuery, setSearchQuery, handleKeyPress, className }) => (
  <div className={`w-full max-w-screen-lg mx-auto ${className}`}>
    <input
      type="text"
      placeholder="Cāk njâ'wú séè lè..."
      value={searchQuery}
      onChange={setSearchQuery}
      onKeyPress={handleKeyPress}
      className="p-4 text-2xl w-full rounded-lg shadow-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
    />
  </div>
);


export default SearchBar;

// ####################

