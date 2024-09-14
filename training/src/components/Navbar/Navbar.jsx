import React, { useState } from "react";

const Navbar = ({ onSearch, onFontChange, onThemeToggle }) => {
  const [searchInput, setSearchInput] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false); // Track theme state

  const handleSearch = () => {
    onSearch(searchInput);
  };

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    onThemeToggle(); // Call parent callback to toggle the theme
  };

  // Handle the Enter key press in the search input
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <nav className="flex flex-col p-4 bg-white dark:bg-black">
      {/* Header Title and Controls */}
      <div className="flex items-center justify-between mb-4">
        {/* Header Title with SVG */}
        <div className="text-lg font-bold dark:text-white flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="38"
            viewBox="0 0 34 38"
            className="stroke-gray-800 dark:stroke-gray-100"
          >
            <g fill="none" fillRule="evenodd" stroke="#838383" strokeLinecap="round" strokeWidth="1.5">
              <path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28"/>
              <path strokeLinejoin="round" d="M5 37a4 4 0 1 1 0-8"/>
              <path d="M11 9h12"/>
            </g>
          </svg>
        </div>

        {/* Controls on the same line as the header title */}
        <div className="flex items-center space-x-4">
          {/* Font Selector */}
          <select
            onChange={(e) => onFontChange(e.target.value)}
            className="p-2 dark:bg-black dark:text-white"
          >
            <option value="serif">Serif</option>
            <option value="sans-serif">Sans-serif</option>
            <option value="monospace">Monospace</option>
          </select>

          {/* Theme Toggle Button */}
          <button
            onClick={handleThemeToggle}
            className="p-2 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                className="stroke-gray-800 dark:stroke-gray-100"
              >
                <path fill="none" stroke="#A445ED" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                className="stroke-gray-800 dark:stroke-gray-100"
              >
                <path fill="none" stroke="#A445ED" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Search Input with Custom Search Icon */}
      <div className="relative w-full">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleKeyPress} // Trigger search on Enter key press
          placeholder="Search"
          className="w-full p-2 pr-12 bg-gray-200 border rounded-lg dark:bg-gray-200 dark:text-black"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            className="text-gray-500 dark:text-gray-400"
          >
            <path fill="none" stroke="#A445ED" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"/>
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
